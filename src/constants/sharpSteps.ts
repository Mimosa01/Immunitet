import { Globe, Eye, Search, Target, Lock } from "lucide-react";

export const steps = [
  {
    letter: "S",
    title: "Source (Источник)",
    icon: Lock,
    description: "Кто это опубликовал?",
    actions: [
      "Проверьте домен сайта. Выглядит ли он подозрительно?",
      "Есть ли раздел «О нас» или «Контакты»?"
    ]
  },
  {
    letter: "H",
    title: "History (История)",
    icon: Globe,
    description: "Какова репутация источника?",
    actions: [
      "Вбейте название + «фейк» в поиск.",
      "Что пишут о нём сайты-фактчекеры?"
    ]
  },
  {
    letter: "A",
    title: "Analyze (Анализ)",
    icon: Eye,
    description: "Что говорится в самом сообщении?",
    actions: [
      "Эмоциональный ли текст?",
      "Указаны ли даты и источники данных?"
    ]
  },
  {
    letter: "R",
    title: "Reverse (Обратный поиск)",
    icon: Search,
    description: "Публиковали ли это другие?",
    actions: [
      "Копируйте фразу и ищите в Google.",
      "Для картинок — используйте обратный поиск изображений."
    ]
  },
  {
    letter: "P",
    title: "Purpose (Цель)",
    icon: Target,
    description: "Зачем это опубликовано?",
    actions: [
      "Это реклама, кликбейт или пропаганда?",
      "Какие эмоции вызывает у вас этот контент?"
    ]
  }
];