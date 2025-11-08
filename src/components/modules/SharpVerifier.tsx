import { useState } from "react";
import { Zap, CheckCircle, ChevronRight } from "lucide-react";
import { steps } from "../../constants/sharpSteps";
import type { IconComponent } from "../../types/types";

export default function SharpVerifier() {
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(Array(steps.length).fill(false));
  const [currentStep, setCurrentStep] = useState(0);

  const handleCompleteStep = () => {
    const newCompleted = [...completedSteps];
    newCompleted[currentStep] = true;
    setCompletedSteps(newCompleted);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const reset = () => {
    setCompletedSteps(Array(steps.length).fill(false));
    setCurrentStep(0);
  };

  const allCompleted = completedSteps.every(Boolean);
  const Icon: IconComponent = steps[currentStep].icon;

  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30 p-6 mb-16 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">🛠️ Верификатор «S.H.A.R.P.»</h3>
      </div>

      {/* Прогресс-бар */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-600 mb-2">
          <span>Начало</span>
          <span>{completedSteps.filter(Boolean).length} / {steps.length}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-amber-400 to-orange-500 transition-all duration-500"
            style={{ width: `${(completedSteps.filter(Boolean).length / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Текущий шаг */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0">
            {steps[currentStep].letter}
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{steps[currentStep].title}</h4>
            <p className="text-sm text-gray-600">{steps[currentStep].description}</p>
          </div>
        </div>

        <Icon className="w-12 h-12 text-amber-500 mb-4 opacity-80" />

        <ul className="space-y-2 mb-6">
          {steps[currentStep].actions.map((action, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-0.5">•</span> {action}
            </li>
          ))}
        </ul>

        <button
          onClick={handleCompleteStep}
          disabled={completedSteps[currentStep]}
          className={`w-full py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
            completedSteps[currentStep]
              ? 'bg-green-100 text-green-800 cursor-default'
              : 'bg-amber-500 hover:bg-amber-600 text-white hover:scale-[1.02]'
          }`}
        >
          {completedSteps[currentStep] ? (
            <>
              <CheckCircle className="w-4 h-4" /> Пройдено
            </>
          ) : (
            <>
              Отработал этот шаг
              <ChevronRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Итог (показывается после всех шагов) */}
      {allCompleted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-xl animate-fadeIn">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h4 className="font-bold text-green-800">Поздравляем!</h4>
          </div>
          <p className="text-sm text-green-700">
            Вы прошли весь арсенал верификации. Теперь вы готовы проверять любую информацию — как профессиональный фактчекер.
          </p>
          <button
            onClick={reset}
            className="mt-3 text-xs text-green-700 hover:text-green-900 flex items-center gap-1"
          >
            <ChevronRight className="w-3 h-3 rotate-180" />
            Пройти заново
          </button>
        </div>
      )}
    </div>
  );
}