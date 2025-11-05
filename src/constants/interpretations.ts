import type { Weights } from '../types/types';

export const interpretations: {
  [K in keyof Weights]: {
    label: string;
    description: string;
    advice: string;
    max: number;
    color: string;
    gradient: string;
  };
} = {
  emotion: {
    label: 'Эмоции',
    description: 'Склонность принимать решения под влиянием страха, гнева, сочувствия или возмущения.',
    advice: 'Арсенал → Чек-листы самопроверки',
    max: 30,
    color: '#EF4444', // red-500
    gradient: 'from-red-50 to-orange-50',
  },
  authority: {
    label: 'Авторитет',
    description: 'Слишком большое доверие к "экспертам", блогерам, официальным лицам.',
    advice: 'Арсенал → Верификация информации',
    max: 30,
    color: '#F59E0B', // amber-500
    gradient: 'from-amber-50 to-yellow-50',
  },
  conformity: {
    label: 'Социальное давление',
    description: 'Склонность соглашаться с группой, чтобы "не выделяться" или "быть как все".',
    advice: 'Кейс-стади → От фанатов до фанатиков',
    max: 30,
    color: '#8B5CF6', // violet-500
    gradient: 'from-violet-50 to-purple-50',
  },
  logic: {
    label: 'Логика',
    description: 'Часто попадаетесь на логические ошибки: "ложная дихотомия", "человек из соломы".',
    advice: 'Арсенал → Логические ошибки',
    max: 30,
    color: '#10B981', // emerald-500
    gradient: 'from-emerald-50 to-teal-50',
  },
};