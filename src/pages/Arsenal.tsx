import { useState } from "react";
import { Shield, Target, Search, Brain } from "lucide-react";
import Header from "../components/layouts/Header";
import Button from "../components/ui/Button";
import { logicExercises } from "../constants/logicExercises";
import SharpVerifier from "../components/modules/SharpVerifier";

export default function Arsenal() {
  const [logicAnswers, setLogicAnswers] = useState<(number | null)[]>(Array(logicExercises.length).fill(null));
  const [showRepostFlags, setShowRepostFlags] = useState(false);
  const [repostAnswer, setRepostAnswer] = useState<number | null>(null);

  const handleLogicSelect = (exerciseIndex: number, optionIndex: number) => {
    const newAnswers = [...logicAnswers];
    newAnswers[exerciseIndex] = optionIndex;
    setLogicAnswers(newAnswers);
  };

  const handleRepostSelect = (index: number) => {
    setRepostAnswer(index);
    if (index < 3) {
      setShowRepostFlags(true);
      setTimeout(() => setShowRepostFlags(false), 3000);
    }
  };

  return (
    <>
      <main className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header
          icon={<Shield className="w-8 h-8 text-white" />}
          title="Арсенал критика"
          description="Практические инструменты для защиты своего сознания"
          back
        />

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mb-12 text-gray-800">
              <p>
                «Знать врага в лицо — это только половина дела. Нужно уметь с ним сражаться. Этот модуль — ваш личный арсенал. Здесь вы найдете не теорию, а практические инструменты для защиты своего сознания. Тренируйтесь, проверяйте, отрабатывайте навыки до автоматизма.»
              </p>
            </div>

            {/* Раздел 1: Логические ошибки */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-blue-600" />
                Логические ошибки — Не дайте себя обмануть
              </h2>
              <p className="text-gray-700 mb-8">
                Логические ошибки — это трюки, которые используют, чтобы выиграть спор, апеллируя не к разуму, а к эмоциям, стереотипам или невнимательности. Узнав их, вы сможете находить изъяны в любых аргументах.
              </p>

              {logicExercises.map((ex, idx) => (
                <div key={ex.id} className="mb-10 bg-white/60 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{ex.title}</h3>
                  <p className="text-gray-700 mb-3"><strong>Суть:</strong> {ex.theory}</p>
                  <p className="text-gray-700 mb-4 italic">«{ex.example}»</p>

                  <div className="bg-blue-50/50 p-4 rounded-lg mb-4">
                    <p className="font-medium text-gray-900 mb-2">Упражнение:</p>
                    <p className="text-gray-800 mb-3">«{ex.exercise}»</p>
                    <p className="text-gray-700 mb-3">{ex.question}</p>
                    <div className="space-y-2">
                      {ex.options.map((opt, optIdx) => (
                        <Button
                          key={optIdx}
                          onClick={() => handleLogicSelect(idx, optIdx)}
                          className={`w-full text-left p-3 rounded-lg border transition-colors ${
                            logicAnswers[idx] === optIdx
                              ? 'border-blue-500 bg-blue-100'
                              : 'border-gray-300 hover:bg-gray-50'
                          }`}
                          variant="ghost"
                        >
                          {optIdx + 1}. {opt}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {logicAnswers[idx] !== null && (
                    <div className={`p-4 rounded-lg mt-3 ${
                      logicAnswers[idx] === ex.correctIndex
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-amber-50 border border-amber-200'
                    }`}>
                      <p className="text-sm">
                        {logicAnswers[idx] === ex.correctIndex ? 'Правильно! ' : 'Почти. '}
                        {ex.explanation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Раздел 2: Верификация */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Search className="w-8 h-8 text-amber-600" />
                Верификация информации — Проверь, прежде чем поделиться
              </h2>
              <p className="text-gray-700 mb-8">
                В мире, где фейки распространяются быстрее правды, делиться непроверенной информацией — безответственно. Вот ваш пошаговый план действий.
              </p>

              <SharpVerifier />
            </div>

            {/* Раздел 3: Самопроверка */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-purple-600" />
                Техники самопроверки — Детектор мыслей
              </h2>
              <p className="text-gray-700 mb-8">
                Самый главный оппонент вашего критического мышления — это вы сами. Наши собственные когнитивные искажения мешают нам объективно оценивать информацию.
              </p>

              <div className="bg-white/60 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Чек-лист «Пауза перед репостом»</h3>
                <p className="text-gray-700 mb-4">Прежде чем нажать «Поделиться», задайте себе первый вопрос:</p>
                <p className="font-medium mb-3">1. Какие эмоции у меня вызывает этот текст?</p>
                <div className="space-y-2">
                  {[
                    "Сильный гнев или возмущение",
                    "Радость от того, что «моих» раскритиковали",
                    "Чувство страха или тревоги",
                    "Уверенность, основанная на фактах и логике"
                  ].map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleRepostSelect(i)}
                      className={`w-full text-left p-3 rounded-lg border transition-colors ${
                        repostAnswer === i
                          ? (i < 3 ? 'border-red-500 bg-red-100' : 'border-green-500 bg-green-100')
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                {showRepostFlags && (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg animate-fadeIn">
                    <p className="text-red-800 text-sm font-medium">
                      Это красный флажок! Скорее всего, вами пытаются манипулировать. Перейдите к следующим вопросам.
                    </p>
                  </div>
                )}

                {repostAnswer === 3 && (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg animate-fadeIn">
                    <p className="text-green-800 text-sm font-medium">
                      Отлично! Вы ориентируетесь на факты, а не на эмоции.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center">
              <Button
                linkTo="/"
                variant="outline"
                className="py-3 px-8"
              >
                Вернуться на главную
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}