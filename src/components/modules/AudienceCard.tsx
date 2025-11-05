import type { ReactNode } from 'react';

interface AudienceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bgGradientClass?: string;
  borderClass?: string;
  iconGradientClass?: string;
}

export default function AudienceCard({
  icon,
  title,
  description,
  bgGradientClass = 'bg-gradient-to-br from-blue-50 to-indigo-50',
  borderClass = 'border-blue-200',
}: AudienceCardProps) {
  return (
    <div className={`text-center p-8 rounded-2xl ${bgGradientClass} border ${borderClass}`}>
      {icon}
      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}