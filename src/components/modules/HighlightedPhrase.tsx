import { useState } from "react";
import { AlertTriangle } from "lucide-react";

const hints: Record<string, string> = {
  elitism: "Маркер: создание элитарности внутри группы",
  untouchable: "Маркер: лидер становится неприкасаемым",
};

interface HighlightedPhraseProps {
  phraseId: string;
}

export default function HighlightedPhrase({ phraseId }: HighlightedPhraseProps) {
  const [isHovered, setIsHovered] = useState(false);
  const hint = hints[phraseId] || "Ключевой маркер формирования культа";

  return (
    <span
      className="relative inline-block mx-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={(e) => {
        e.preventDefault();
        setIsHovered(!isHovered);
      }}
    >
      <span className="bg-linear-to-t from-amber-100 to-red-100 text-red-800 px-1 rounded font-medium border-b-2 border-amber-300 cursor-pointer">
        ?
      </span>
      {isHovered && (
        <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-800 animate-fadeIn">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <span>{hint}</span>
          </div>
        </div>
      )}
    </span>
  );
}