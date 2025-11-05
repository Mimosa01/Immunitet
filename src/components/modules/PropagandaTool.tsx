import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface PropagandaToolProps {
  tool: {
    title: string;
    example: string;
  };
}

export default function PropagandaTool({ tool }: PropagandaToolProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 cursor-pointer transition-all hover:bg-amber-100"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-amber-900">{tool.title}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-amber-700" />
        ) : (
          <ChevronDown className="w-5 h-5 text-amber-700" />
        )}
      </div>
      {isOpen && (
        <div className="mt-3 p-3 bg-white/80 rounded-lg text-gray-700 text-sm animate-fadeIn">
          {tool.example}
        </div>
      )}
    </div>
  );
}