import { useState } from "react";
import { CheckCircle, RotateCcw, AlertTriangle } from "lucide-react";

interface PhrasePuzzleProps {
  puzzle: {
    parts: string[];
    solution: string;
    explanation: string;
  };
}

export default function PhrasePuzzle({ puzzle }: PhrasePuzzleProps) {
  const [state, setState] = useState(() => {
    const shuffled = [...puzzle.parts]
      .map((text, originalIndex) => ({ text, originalIndex }))
      .sort(() => Math.random() - 0.5);
    
    const order = shuffled.map((_, i) => i);
    
    return {
      shuffledParts: shuffled,
      currentOrder: order,
      selectedIdx: null as number | null,
      completed: false,
    };
  });

  const { shuffledParts, currentOrder, selectedIdx, completed } = state;

  const handleTileClick = (idx: number) => {
    if (completed) return;

    if (selectedIdx === null) {
      setState(prev => ({ ...prev, selectedIdx: idx }));
    } else if (selectedIdx === idx) {
      setState(prev => ({ ...prev, selectedIdx: null }));
    } else {
      setState(prev => {
        const newOrder = [...prev.currentOrder];
        [newOrder[prev.selectedIdx!], newOrder[idx]] = [newOrder[idx], newOrder[prev.selectedIdx!]];
        
        const isSolved = newOrder.every((shuffledIdx, position) => {
          return prev.shuffledParts[shuffledIdx].originalIndex === position;
        });

        return {
          ...prev,
          currentOrder: newOrder,
          selectedIdx: null,
          completed: isSolved,
        };
      });
    }
  };

  const reset = () => {
    setState(prev => ({
      ...prev,
      currentOrder: prev.shuffledParts.map((_, i) => i),
      selectedIdx: null,
      completed: false,
    }));
  };

  const displayedParts = currentOrder.map(i => shuffledParts[i]);

  return (
    <div className="mt-4 bg-white/50 rounded-2xl p-5 border border-gray-200">
      <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
        <span className="bg-amber-100 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center text-xs">
          ?
        </span>
        Соберите фразу, чтобы раскрыть механизм манипуляции
      </h4>

      {!completed ? (
        <div className="space-y-3">
          {displayedParts.map((part, idx) => (
            <div
              key={idx}
              onClick={() => handleTileClick(idx)}
              className={`p-3 border rounded-lg cursor-pointer transition-all ${
                selectedIdx === idx
                  ? 'bg-blue-100 border-blue-500 shadow-inner'
                  : 'bg-white border-gray-300 hover:bg-gray-50'
              }`}
            >
              {part.text}
            </div>
          ))}
          <button
            onClick={reset}
            className="mt-3 text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
          >
            <RotateCcw className="w-4 h-4" /> Сбросить
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
            <p className="text-green-800 font-medium">{puzzle.solution}</p>
          </div>
          {(
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-blue-700 shrink-0 mt-0.5" />
              <p className="text-blue-800 text-sm">{puzzle.explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
