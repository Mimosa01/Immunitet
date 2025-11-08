import { ArrowRight } from 'lucide-react';
import { interpretations } from '../../constants/interpretations';
import type { Weights } from '../../types/types';
import Button from '../ui/Button';
import CircularProgress from '../modules/CircularProgress';

interface DiagnosticInterpretationProps {
  weights: Weights;
}

export default function DiagnosticInterpretation({ weights }: DiagnosticInterpretationProps) {
  const THRESHOLD_PERCENT = 50;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(interpretations).map(([key, { label, description, advice, max }]) => {
            const value = weights[key as keyof Weights];
            const percentage = max > 0 ? Math.min((value / max) * 100, 100) : 0;
            const isVulnerable = percentage >= THRESHOLD_PERCENT;

            const cardStyle = isVulnerable
              ? `bg-gradient-to-br from-red-50 to-orange-50 border-red-200 shadow-red-100`
              : `bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-green-100`;

            return (
              <div
                key={key}
                className={`relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${cardStyle}`}
              >
                <CircularProgress value={value} max={max} label={label} />
                <p className="mt-4 text-gray-700 text-sm">{description}</p>
                <div className="mt-4 text-blue-600 font-medium text-sm">
                  {advice}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            iconLeft={<ArrowRight className="w-4 h-4" />}
            className="bg-linear-to-r from-blue-500 to-cyan-500 text-white"
            linkTo='/'
          >
            Прокачать навыки
          </Button>
        </div>
      </div>
    </section>
  );
}
