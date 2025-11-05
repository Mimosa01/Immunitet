import { Link } from 'react-router';
import { Play } from 'lucide-react';
import type { IconComponent } from '../../types/types';
import Button from '../ui/Button';

interface Module {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: IconComponent;
  color: string;
  action: string;
  gradient: string;
  link: string;
}

interface ModuleCardProps {
  module: Module;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const Icon = module.icon;

  return (
    <Link
      to={module.link}
      className={`block relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${module.gradient} border border-white/20`}
    >
      <div className="absolute top-4 right-4">
        <div className={`w-12 h-12 rounded-full bg-linear-to-br ${module.color} flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{module.title}</h3>
        <p className="text-lg font-medium text-gray-700 mb-3">{module.subtitle}</p>
        <p className="text-gray-600 mb-6 leading-relaxed">{module.description}</p>

        <Button
          iconLeft={<Play className="w-4 h-4" />}
          className={`w-full py-3 px-6 rounded-xl font-semibold text-white bg-linear-to-r ${module.color} hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2`}
        >
          {module.action}
        </Button>
      </div>
    </Link>
  );
}
