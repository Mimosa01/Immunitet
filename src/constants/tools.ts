import { AlertTriangle, Repeat, Shield, Zap } from "lucide-react";

export const tools = [
  {
    id: "enemy",
    name: "Образ Врага",
    icon: AlertTriangle,
    description: "Объедините разнородную группу людей в единый, обезличенный образ, несущий угрозу.",
    examples: ["очередная партия", "чужаки", "орда", "неконтролируемый поток"],
    color: "text-red-600",
    bgColor: "bg-red-50",
    transform: (text: string) => {
      return text
        .replace(/группа из 200 трудовых мигрантов/g, "очередная партия мигрантов")
        .replace(/В страну Е прибыла/g, "В страну Е хлынула");
    }
  },
  {
    id: "emotion",
    name: "Эмоции",
    icon: Zap,
    description: "Апеллируйте к базовым инстинктам. Используйте эмоционально заряженную лексику.",
    examples: ["нашествие", "угроза", "мы в опасности"],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    transform: (text: string) => {
      return `На наших глазах начинается тихое нашествие!\n\n${text}`;
    }
  },
  {
    id: "labels",
    name: "Ярлыки",
    icon: Shield,
    description: "Добавьте непроверенную информацию для усиления нужной картины.",
    examples: ["по данным источников", "сомнительное прошлое"],
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    transform: (text: string) => {
      return `${text}\n\nПо данным источников в правоохранительных органах, среди прибывших есть лица с сомнительным прошлым.`;
    }
  },
  {
    id: "mantra",
    name: "Мантра",
    icon: Repeat,
    description: "Сформулируйте простой ложный тезис и повторяйте его.",
    examples: ["Они отнимают наши рабочие места!"],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    transform: (text: string) => {
      const mantra = "Они отнимают наши рабочие места!";
      return `${mantra}\n\n${text}\n\nПомните, ${mantra.toLowerCase()}`;
    }
  }
];