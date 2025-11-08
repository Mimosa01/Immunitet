import type { Option } from "../../types/types";
import { useDiagnosticStore } from "../../store/useDiagnosticStore";
import Button from "../ui/Button";

interface AnswerProps {
  id: number;
  text: string;
  weights: Option['weights'];
}

export default function Answer({ id, text, weights }: AnswerProps) {
  const { selectedAnswerId, selectAnswer } = useDiagnosticStore();
  const isSelected = selectedAnswerId === id;

  const handleClick = () => {
    selectAnswer(id, weights);
  };

  return (
    <Button
      onClick={handleClick}
      className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-200 ${
        isSelected
          ? 'border-blue-500 bg-blue-50 shadow-md'
          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
      }`}
      variant="ghost"
    >
      <div className="flex items-start gap-4">
        <div className={`min-w-8 aspect-square rounded-full flex items-center justify-center ${
          isSelected
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700'
        }`}>
          {id}
        </div>
        <span className="text-gray-800">{text}</span>
      </div>
    </Button>
  );
}