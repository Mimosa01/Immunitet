import type { ComponentType, SVGProps } from 'react';
import GradientIconCircle from '../ui/GradientIconCircle';

interface FeatureCardProps {
  IconComponent: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  gradientClass?: string;
  iconSizeClass?: string;
  sizeClass?: string;
}

export default function FeatureCard({
  IconComponent,
  title,
  description,
  gradientClass = 'bg-gradient-to-br from-blue-500 to-purple-600',
  iconSizeClass = 'w-8 h-8',
  sizeClass = 'w-16 h-16',
}: FeatureCardProps) {
  return (
    <div className="text-center group">
      <GradientIconCircle
        icon={<IconComponent className="w-8 h-8 text-white" />}
        gradientClass={gradientClass}
        sizeClass={sizeClass}
        iconSizeClass={iconSizeClass}
        className="mb-4 group-hover:scale-110 transition-transform duration-300"
      />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}