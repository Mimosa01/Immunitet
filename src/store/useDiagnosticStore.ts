import { create } from 'zustand';
import { questions } from '../constants/questions';
import type { Weights } from '../types/types';

type Answer = {
  questionId: number;
  optionId: number;
  weights: Weights;
};

type DiagnosticState = {
  currentQuestionIndex: number;
  answers: Answer[];
  weights: Weights;
  selectedAnswerId: number | null;
  canProceed: boolean;
};

type DiagnosticActions = {
  selectAnswer: (optionId: number, weights: Weights) => void;
  nextQuestion: () => void;
  resetDiagnostic: () => void;
};

const initialWeights: Weights = { logic: 0, emotion: 0, conformity: 0, authority: 0 };

export const useDiagnosticStore = create<DiagnosticState & DiagnosticActions>((set) => ({
  currentQuestionIndex: 0,
  answers: [],
  weights: { ...initialWeights },
  selectedAnswerId: null,
  canProceed: false,

  selectAnswer: (optionId, weights) => {
    set((state) => ({
      selectedAnswerId: optionId,
      canProceed: true,
      weights: {
        logic: state.weights.logic + weights.logic,
        emotion: state.weights.emotion + weights.emotion,
        conformity: state.weights.conformity + weights.conformity,
        authority: state.weights.authority + weights.authority,
      },
    }));
  },

  nextQuestion: () => {
    set((state) => {
      const currentQuestion = questions[state.currentQuestionIndex];
      const selectedOption = currentQuestion.options.find(
        (opt) => opt.id === state.selectedAnswerId
      );

      if (!selectedOption) return state; // Защита от дурака

      const newAnswer: Answer = {
        questionId: currentQuestion.id,
        optionId: selectedOption.id,
        weights: selectedOption.weights,
      };

      const nextIndex = state.currentQuestionIndex + 1;
      const isLastQuestion = nextIndex >= questions.length;

      return {
        currentQuestionIndex: isLastQuestion ? state.currentQuestionIndex : nextIndex,
        answers: [...state.answers, newAnswer],
        selectedAnswerId: null,
        canProceed: false,
        // weights уже обновлены в selectAnswer
      };
    });
  },

  resetDiagnostic: () => {
    set({
      currentQuestionIndex: 0,
      answers: [],
      weights: { ...initialWeights },
      selectedAnswerId: null,
      canProceed: false,
    });
  },
}));