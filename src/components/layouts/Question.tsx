import { ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useDiagnosticStore } from '../../store/useDiagnosticStore';
import { questions } from "../../constants/questions";
import QuestionCard from "../modules/QuestionCard";
import Button from "../ui/Button";

export default function Question() {
  const { currentQuestionIndex, canProceed, nextQuestion } = useDiagnosticStore();
  const currentQuestion = questions[currentQuestionIndex];
  const navigate = useNavigate();

  const handleNext = () => {
    if (canProceed) {
      nextQuestion();
      if (currentQuestionIndex + 1 >= questions.length) {
        navigate('/diagnostic/result');
      } else {
        navigate(`/questions/${currentQuestionIndex + 1}`);
      }
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <QuestionCard 
          title={currentQuestion.title}
          postText={currentQuestion.postText}
          options={currentQuestion.options}
        />

        <div className="text-center mt-8">
          <Button
            onClick={handleNext}
            disabled={!canProceed}
            iconRight={<ArrowLeft className="w-5 h-5 rotate-180" />}
            className="bg-linear-to-r from-blue-500 to-cyan-500 text-white"
            variant="primary"
          >
            Далее
          </Button>
        </div>
      </div>
    </section>
  );
}