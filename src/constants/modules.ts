import { Target, Microscope, Shield, BookOpen } from "lucide-react";

export const modules = [
  {
    id: 'diagnostics',
    title: 'Диагностика',
    subtitle: 'Насколько вы внушаемы?',
    description: 'Интерактивный тест-симулятор с визуальными сценариями соцсетей, новостей и лидеров мнений',
    icon: Target,
    color: 'from-blue-500 to-cyan-500',
    action: 'Пройти тест',
    gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    link: '/diagnostic'
  },
  {
    id: 'lab',
    title: 'Лаборатория пропаганды',
    subtitle: 'Игра-конструктор',
    description: 'Создайте эмоциональный пост, используя инструменты манипуляции, чтобы понять их механизм',
    icon: Microscope,
    color: 'from-purple-500 to-pink-500',
    action: 'Играть',
    gradient: 'bg-gradient-to-br from-purple-50 to-pink-50',
    link: '/lab'
  },
  {
    id: 'arsenal',
    title: 'Арсенал критика',
    subtitle: 'База знаний',
    description: 'Интерактивные упражнения: логические ошибки, верификация информации, чек-листы самопроверки',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    action: 'Изучить материал',
    gradient: 'bg-gradient-to-br from-green-50 to-emerald-50',
    link: '/arsenal'
  },
  {
    id: 'case-study',
    title: 'Кейс-стади',
    subtitle: 'От фанатов до фанатиков',
    description: 'Библиотека разборов реальных и исторических примеров с интерактивными вставками',
    icon: BookOpen,
    color: 'from-orange-500 to-red-500',
    action: 'Исследовать',
    gradient: 'bg-gradient-to-br from-orange-50 to-red-50',
    link: '/case-study'
  }
];