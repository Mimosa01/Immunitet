import { useParams } from 'react-router-dom';
import { Target } from "lucide-react";
import Header from "../components/layouts/Header";
import Question from "../components/layouts/Question";
import { questions } from '../constants/questions';

function QuestionPage() {
  const { id } = useParams<{ id: string }>();
  const questionIndex = parseInt(id || '0', 10);
  const currentQuestionNumber = questionIndex + 1;

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header 
        icon={<Target className="w-8 h-8 text-white" />}
        title={`Вопрос ${currentQuestionNumber} из ${questions.length}`}
        back
      />
      <Question />
    </main>
  );
}

export default QuestionPage;