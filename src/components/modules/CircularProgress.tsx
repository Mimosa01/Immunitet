import { useMemo } from 'react';

interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
}

export default function CircularProgress({
  value,
  max = 30,
  size = 120,
  strokeWidth = 10,
  label,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const percentage = useMemo(() => {
    if (max <= 0) return 0;
    return Math.min((value / max) * 100, 100);
  }, [value, max]);

  const strokeDashoffset = useMemo(() => {
    const offset = circumference - (percentage / 100) * circumference;
    return offset;
  }, [circumference, percentage]);

  const color = useMemo(() => {
    const threshold = 50;
    return percentage >= threshold ? '#EF4444' : '#10B981';
  }, [percentage]);

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="w-32 h-32">
        {/* Фоновое кольцо */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E5E7EB" // серый фон
          strokeWidth={strokeWidth}
        />
        {/* Прогресс */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`} // начинаем сверху
        />
        {/* Центральный текст */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-xl font-bold fill-gray-800"
        >
          {Math.round(percentage)}%
        </text>
      </svg>
      {label && (
        <div className="mt-2 text-sm text-gray-600">{label}</div>
      )}
    </div>
  );
}