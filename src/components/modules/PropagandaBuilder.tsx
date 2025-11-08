import { useState, useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import Button from "../ui/Button";

interface Tool {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
  bgColor: string;
  transform: (text: string) => string;
  // Новая функция для отката (если не указана — используется простой reset)
  revert?: (original: string, current: string) => string;
}

interface PropagandaBuilderProps {
  initialText: string;
  tools: Tool[];
  onTextChange: (text: string, activeToolIds: string[]) => void;
  onAnalyze: () => void;
  onBack: () => void;
}

export default function PropagandaBuilder({
  initialText,
  tools,
  onTextChange,
  onAnalyze,
  onBack
}: PropagandaBuilderProps) {
  const [currentText, setCurrentText] = useState(initialText);
  const [activeTools, setActiveTools] = useState<Record<string, boolean>>({});
  const [originalText, setOriginalText] = useState(initialText);

  // Обновляем исходный текст при смене события
  useEffect(() => {
    setOriginalText(initialText);
    setCurrentText(initialText);
    setActiveTools({});
    onTextChange(initialText, []);
  }, [initialText, onTextChange]);

  const toggleTool = (toolId: string) => {
    const tool = tools.find(t => t.id === toolId);
    if (!tool) return;

    const currentlyActive = activeTools[toolId];

    let newText = currentText;

    if (currentlyActive) {
      if (tool.revert) {
        newText = tool.revert(originalText, currentText);
      } else {
        newText = originalText;
        Object.entries(activeTools).forEach(([id, isActive]) => {
          if (isActive && id !== toolId) {
            const t = tools.find(tt => tt.id === id);
            if (t) newText = t.transform(newText);
          }
        });
      }
    } else {
      newText = tool.transform(currentText);
    }

    const newActive = { ...activeTools, [toolId]: !currentlyActive };
    setCurrentText(newText);
    setActiveTools(newActive);

    const activeIds = Object.entries(newActive)
      .filter(([, active]) => active)
      .map(([id]) => id);
    onTextChange(newText, activeIds);
  };

  const activeToolIds = Object.entries(activeTools)
    .filter(([, active]) => active)
    .map(([id]) => id);

  return (
    <div className="space-y-8">
      {/* Текущий пост */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm">3</span>
          Создайте пропагандистский пост
        </h3>
        <p className="text-gray-700 mb-4">Примените или отключите инструменты ниже:</p>
        <div className="p-5 bg-linear-to-br from-gray-50 to-white rounded-xl min-h-[140px] font-medium text-gray-800 whitespace-pre-line border border-gray-200 shadow-sm">
          {currentText || "Текст появится здесь..."}
        </div>
        {activeToolIds.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {activeToolIds.map(id => {
              const tool = tools.find(t => t.id === id);
              return tool ? (
                <span
                  key={id}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${tool.bgColor} ${tool.color}`}
                >
                  {tool.name}
                </span>
              ) : null;
            })}
          </div>
        )}
      </div>

      {/* Инструменты */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs">🛠️</span>
          Инструментарий пропагандиста
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            const isActive = activeTools[tool.id];
            return (
              <button
                key={tool.id}
                onClick={() => toggleTool(tool.id)}
                className={`p-4 text-left rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.01] ${
                  isActive
                    ? `${tool.bgColor} ${tool.color.replace('text-', 'border-')} border-opacity-80 shadow-sm`
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-5 h-5 shrink-0 ${isActive ? tool.color : 'text-gray-600'}`} />
                    <span className="font-medium text-gray-900">{tool.name}</span>
                  </div>
                  {isActive ? (
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-gray-300 shrink-0" />
                  )}
                </div>
                <p className="text-sm text-gray-700">{tool.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Кнопки */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button
          onClick={onAnalyze}
          disabled={activeToolIds.length === 0}
          className="py-3 px-8 flex-1 max-w-xs"
        >
          Проанализировать пост
        </Button>
        <Button
          variant="ghost"
          onClick={onBack}
          className="py-3 px-8 flex-1 max-w-xs"
        >
          ← Назад к цели
        </Button>
      </div>
    </div>
  );
}