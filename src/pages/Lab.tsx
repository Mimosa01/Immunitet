import { useState, useEffect } from "react";
import { Microscope, AlertTriangle } from "lucide-react";
import Header from "../components/layouts/Header";
import Button from "../components/ui/Button";
import { analysisMap } from "../constants/analysisMap";
import { events } from "../constants/events";
import { goals } from "../constants/goals";
import { tools } from "../constants/tools";
import PropagandaBuilder from "../components/modules/PropagandaBuilder";

export default function Lab() {
  // Состояния игры
  const [step, setStep] = useState<"event" | "goal" | "build" | "analysis">("event");
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [appliedTools, setAppliedTools] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");

  // Установка текста при выборе события
  useEffect(() => {
    if (selectedEvent) {
      const event = events.find(e => e.id === selectedEvent);
      if (event) setCurrentText(event.text);
    }
  }, [selectedEvent]);

  const handleEventSelect = (id: string) => {
    setSelectedEvent(id);
    setStep("goal");
  };

  const handleGoalSelect = (id: string) => {
    setSelectedGoal(id);
    setStep("build");
  };

  const analyzePost = () => {
    setStep("analysis");
  };

  const resetGame = () => {
    setStep("event");
    setSelectedEvent(null);
    setSelectedGoal(null);
    setAppliedTools([]);
    setCurrentText("");
  };

  return (
    <>
      <main className="min-h-screen bg-linear-to-br from-slate-50 via-red-50 to-amber-50/10">
        <Header
          icon={<Microscope className="w-8 h-8 text-white" />}
          title="Лаборатория пропаганды"
          description="Игра-конструктор: создайте пост, чтобы понять его механизм"
          back
        />

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mb-8 text-gray-800">
              <p>
                «Добро пожаловать в Лабораторию. Здесь вам предстоит надеть маску создателя пропаганды. Не волнуйтесь, это всего лишь симуляция. Но именно создавая вирусный пост своими руками, вы лучше всего поймете его механику и выработаете к нему иммунитет.»
              </p>
            </div>

            {/* Шаг 1: Выбор события */}
            {step === "event" && (
              <div className="bg-white/60 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">ШАГ 1: Выберите нейтральное событие</h3>
                <p className="text-gray-700 mb-6">Вы — редактор "нужного" новостного паблика. Выберите событие для работы:</p>
                <div className="flex flex-col gap-4">
                  {events.map((event) => (
                    <Button
                      key={event.id}
                      variant="secondary"
                      onClick={() => handleEventSelect(event.id)}
                    >
                      <div className="flex flex-col md:flex-row gap-2 text-left">
                        <span className="font-medium">{event.title}</span>
                        <span className="text-sm text-gray-600 mt-1">{event.text}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Шаг 2: Выбор цели */}
            {step === "goal" && selectedEvent && (
              <div className="bg-white/60 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">ШАГ 2: Выберите цель пропаганды</h3>
                <p className="text-gray-700 mb-6">Какую реакцию вы хотите вызвать?</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {goals.map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => handleGoalSelect(goal.id)}
                      className="p-4 border-2 border-gray-200 rounded-xl text-center hover:border-amber-400 hover:bg-amber-50 transition-colors"
                    >
                      <span className="text-2xl block mb-2">{goal.emoji}</span>
                      <span className="text-gray-800 font-medium">{goal.label}</span>
                    </button>
                  ))}
                </div>
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    onClick={() => setStep("event")}
                  >
                    ← Назад к событиям
                  </Button>
                </div>
              </div>
            )}

            {/* Шаг 3: Конструктор */}
            {step === "build" && selectedEvent && selectedGoal && (
              <PropagandaBuilder
                initialText={events.find(e => e.id === selectedEvent)?.text || ""}
                tools={tools}
                onTextChange={(text, ids) => {
                  setCurrentText(text);
                  setAppliedTools(ids);
                }}
                onAnalyze={analyzePost}
                onBack={() => setStep("goal")}
              />
            )}

            {/* Шаг 4: Анализ */}
            {step === "analysis" && (
              <div className="space-y-8">
                <div className="bg-white/60 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">✨ Ваш финальный пост</h3>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg font-medium text-gray-800 whitespace-pre-line">
                    {currentText}
                  </div>
                </div>

                <div className="bg-white/60 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                    АНАЛИЗ ВАШЕГО ПОСТА ОТ «ИММУНИТЕТА»
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Вы успешно создали пропагандистский материал. Давайте разберем его по косточкам:
                  </p>

                  <div className="space-y-6">
                    {appliedTools.map((toolId) => {
                      const tool = tools.find(t => t.id === toolId)!;
                      const analysis = analysisMap[toolId];
                      return (
                        <div key={toolId} className={`p-4 rounded-xl ${tool.bgColor} border ${tool.color.replace('text-', 'border-')}`}>
                          <h4 className="font-bold mb-2">{analysis.title}</h4>
                          <p><strong>Как это работает:</strong> {analysis.howItWorks}</p>
                          <p className="mt-2"><strong>Как распознать:</strong> {analysis.howToDetect}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    variant="secondary"
                    onClick={resetGame}
                    className="py-3 px-8"
                  >
                    Создать новый пост
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}