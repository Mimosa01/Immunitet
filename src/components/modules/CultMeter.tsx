import { useEffect, useState } from "react";

interface CultMeterProps {
  level: number;
}

export default function CultMeter({ level }: CultMeterProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const getColors = () => {
    if (level <= 30) return {
      ring: 'ring-blue-300/40',
      bg: 'from-blue-400 to-cyan-500',
      text: 'text-blue-900',
      label: 'Формирование'
    };
    if (level <= 60) return {
      ring: 'ring-amber-300/50',
      bg: 'from-amber-400 to-orange-500',
      text: 'text-amber-900',
      label: 'Контроль'
    };
    return {
      ring: 'ring-red-400/50',
      bg: 'from-red-500 to-red-700',
      text: 'text-red-900',
      label: 'Культ'
    };
  };

  const { ring, bg, text, label } = getColors();

  return (
    <div className="fixed bottom-6 right-6 z-20 sm:bottom-8 sm:right-8">
      <div
        className={`relative w-28 h-28 rounded-3xl backdrop-blur-md bg-white/20 border border-white/20 flex flex-col items-center justify-center shadow-xl transition-all duration-700 ease-out ${
          mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Soft glow ring */}
        <div className={`absolute inset-0 rounded-3xl ring-4 ${ring} opacity-60 pointer-events-none`} />

        <div className="flex flex-col items-center z-10">
          <div className={`w-20 h-20 rounded-full bg-linear-to-br ${bg} flex items-center justify-center shadow-lg`}>
            <span className="text-white font-bold text-xl tracking-tight">{level}%</span>
          </div>
          <span className={`mt-2 block text-xs font-medium tracking-wide uppercase ${text}`}>
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}