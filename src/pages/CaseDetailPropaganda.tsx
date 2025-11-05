import { useState, useEffect } from "react";
import { BookOpen } from "lucide-react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Button from "../components/ui/Button";
import CultMeter from "../components/modules/CultMeter";
import PropagandaTool from "../components/modules/PropagandaTool";

// Инструменты пропаганды
const propagandaTools = [
  {
    id: "enemy-image",
    title: "Создание «Образа врага»",
    example:
      "Евреи, коммунисты, цыгане — все они были объединены в образ «внутреннего врага», ответственного за все беды Германии после Первой мировой войны.",
  },
  {
    id: "simplicity",
    title: "Апелляция к простоте («Одномерное сообщение»)",
    example:
      "Сложные экономические и политические проблемы сводились к простым лозунгам: «Евреи — наше несчастье».",
  },
  {
    id: "big-lie",
    title: "Большая ложь (Big Lie)",
    example:
      "Чем чудовищнее ложь, тем охотнее в нее поверят. Например, обвинения евреев в ритуальных убийствах.",
  },
  {
    id: "info-control",
    title: "Контроль над информацией",
    example:
      "Сожжение «неправильных» книг, унификация прессы, цензура. У населения не было альтернативных источников информации.",
  },
];

export default function CaseDetailPropaganda() {
  const [propagandaLevel, setPropagandaLevel] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(100, Math.max(0, (scrollY / height) * 100));
      let level = 0;
      if (progress > 15) level = 30;
      if (progress > 40) level = 60;
      if (progress > 65) level = 100;
      setPropagandaLevel(level);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className="min-h-screen bg-linear-to-br from-slate-50 via-amber-50 to-red-50/20 relative">
        <Header
          icon={<BookOpen className="w-8 h-8 text-white" />}
          title="Инженерия ненависти"
          description="Как нацистская пропаганда создала «образ врага»"
          back
        />

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Вступление */}
            <div className="prose prose-lg mb-12 text-gray-800">
              <p>
                Пропаганда Третьего Рейха — это не история о глупых людях. Это история о блестяще отлаженной машине по манипуляции сознанием миллионов. Министр пропаганды Йозеф Геббельс считал: «Ложь, повторенная тысячу раз, становится правдой». Давайте разберем её инструменты.
              </p>
            </div>

            {/* Интерактив: Инструментарий пропагандиста */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                🎯 Инструментарий пропагандиста
              </h2>
              <p className="text-gray-700 mb-6">
                Кликните на инструмент, чтобы увидеть исторические примеры.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {propagandaTools.map((tool) => (
                  <PropagandaTool key={tool.id} tool={tool} />
                ))}
              </div>
            </div>

            {/* Ключевой пример */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ключевой пример: Фильм «Вечный жид» (1940)
              </h2>
              <p className="text-gray-700">
                Этот псевдодокументальный фильм был снят для обоснования преследования евреев. Он представлял их как паразитическую, нецивилизованную расу, несущую угрозу «арийской» культуре.
              </p>
            </div>

            {/* Цитата с вопросом */}
            <div className="mb-12 bg-white/60 rounded-2xl p-6 border border-amber-200">
              <blockquote className="text-lg italic text-gray-800 mb-4">
                «Задача пропаганды не в том, чтобы быть объективной, а в том, чтобы привести к успеху собственную сторону».
              </blockquote>
              <p className="font-medium text-amber-800 mb-3">— Йозеф Геббельс</p>
              <p className="text-gray-700">
                💭 <strong>Подумайте:</strong> Какие современные медиа могут выполнять схожую роль «необъективной, но успешной» пропаганды?
              </p>
            </div>

            {/* Выводы */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Выводы и уроки</h2>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Пропаганда всегда упрощает сложное.</strong> Бойтесь простых ответов на сложные вопросы.
                </li>
                <li>
                  <strong>Образ «врага» — это проектор.</strong> Он проецирует внутренние страхи и проблемы общества на внешнюю группу.
                </li>
                <li>
                  <strong>Монополия на истину — первый шаг к тоталитаризму.</strong> Здоровое общество существует в условиях информационного плюрализма.
                </li>
              </ol>
            </div>

            {/* Ресурсы */}
            <div className="bg-white/60 rounded-2xl p-6 border border-gray-200 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Рекомендуемые ресурсы для углублённого изучения
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  🌐{" "}
                  <a
                    href="https://www.dhm.de/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline"
                  >
                    Немецкий исторический музей (Deutsches Historisches Museum)
                  </a>
                </li>
                <li>
                  📚{" "}
                  <span className="text-gray-800">
                    «Майн Кампф» Адольфа Гитлера — читать как учебник по манипуляции.
                  </span>
                </li>
                <li>
                  🎥{" "}
                  <a
                    href="https://www.youtube.com/watch?v=4nlJX3dGj5U"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline"
                  >
                    «Триумф воли» Лени Рифеншталь
                  </a>
                </li>
              </ul>
            </div>

            {/* Кнопка возврата */}
            <div className="text-center">
              <Button
                link
                linkTo="/case-study"
                variant="outline"
                className="py-3 px-8"
              >
                Вернуться к библиотеке кейсов
              </Button>
            </div>
          </div>
        </section>

        {/* Пропаганда-Метр (используем тот же CultMeter, но фон подобран под тему) */}
        <CultMeter level={propagandaLevel} />
      </main>
      <Footer />
    </>
  );
}