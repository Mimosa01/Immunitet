import type { ReactNode } from 'react';

interface GradientIconCircleProps {
  icon: ReactNode;
  gradientClass?: string;
  sizeClass?: string;
  iconSizeClass?: string;
  className?: string;
}

function GradientIconCircle({
  icon,
  gradientClass = 'bg-gradient-to-br from-blue-500 to-purple-600',
  sizeClass = 'w-20 h-20',
  className
}: GradientIconCircleProps) {
  return (
    <div
      className={`inline-flex items-center justify-center ${sizeClass} ${gradientClass} rounded-full ${className}`}
    >
      {icon}
    </div>
  );
}

export default GradientIconCircle;