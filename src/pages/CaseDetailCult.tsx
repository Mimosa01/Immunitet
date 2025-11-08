import { useState, useEffect } from "react";
import { BookOpen } from "lucide-react";
import Header from "../components/layouts/Header";
import Button from "../components/ui/Button";
import CultMeter from "../components/modules/CultMeter";

export default function CaseDetailCult() {
  const [cultLevel, setCultLevel] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(100, Math.max(0, (scrollY / height) * 100));
      let level = 0;
      if (progress > 20) level = 30;
      if (progress > 45) level = 60;
      if (progress > 70) level = 100;
      setCultLevel(level);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className="min-h-screen bg-linear-to-br from-slate-50 via-indigo-50 to-purple-600/10 relative">
        <Header
          icon={<BookOpen className="w-8 h-8 text-white" />}
          title="Небесное воплощение"
          description="Деконструкция культа личности в Северной Корее"
          back
        />

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Вступление */}
            <div className="prose prose-lg mb-12 text-gray-800">
              <p>
                Культ личности — это не просто портреты на стенах. Это система, где лидер наделяется сверхъестественными качествами, его слово становится законом, а его образ — объектом поклонения. Северная Корея представляет собой один из самых изолированных и ярких примеров такого культа в современном мире.
              </p>
            </div>

            {/* Столпы культа */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Столпы культа</h2>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Божественное происхождение:</strong> Основатель Ким Ир Сен представлен как «Солнце нации». Его рождение сопровождалось, согласно мифологии, чудесными знамениями. Его сын и внук унаследовали этот «сакральный» статус.
                </li>
                <li>
                  <strong>Непогрешимость:</strong> Политика, идеология и даже бытовые советы лидеров (семья Ким) считаются абсолютно верными по определению. Ошибки невозможны в принципе.
                </li>
                <li>
                  <strong>Контроль над языком:</strong> Создан особый язык, насыщенный ритуальными формулами. Например, имя лидера должно писаться с новой строки и особым шрифтом. Существуют специальные слова для выражения верности.
                </li>
                <li>
                  <strong>Изоляция и контроль информации:</strong> Страна максимально закрыта от внешнего мира. Внутренняя пропаганда создает образ внешнего мира как враждебного, полного опасностей, тем самым укрепляя необходимость сплочения вокруг лидера.
                </li>
              </ul>
            </div>

            {/* Сравнительная таблица */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Сравнительная таблица</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50/80">
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Признак</th>
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Здоровое уважение к лидеру</th>
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Политический культ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-gray-800 border-b">Критика</td>
                      <td className="p-4 text-gray-700 border-b">Допускается и является частью дискуссии</td>
                      <td className="p-4 text-gray-700 border-b">Запрещена и карается, лидер непогрешим</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-gray-800 border-b">Происхождение</td>
                      <td className="p-4 text-gray-700 border-b">Лидер — человек, добившийся успеха</td>
                      <td className="p-4 text-gray-700 border-b">Лидер — фигура полубожественная, мифическая</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-gray-800 border-b">Смена власти</td>
                      <td className="p-4 text-gray-700 border-b">Регулярная и предсказуемая процедура</td>
                      <td className="p-4 text-gray-700 border-b">Власть передается по наследству или силой</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-gray-800">Инфополе</td>
                      <td className="p-4 text-gray-700">Открытое, плюралистическое</td>
                      <td className="p-4 text-gray-700">Закрытое, монополизированное государством</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Механизм врага */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Механизм «Врага»</h2>
              <p className="text-gray-700">
                Как и в нацистской Германии, здесь есть свой «образ врага» — США, Южная Корея, «империалисты». Этот образ используется для сплочения населения, оправдания экономических трудностей («осажденная крепость») и милитаризации.
              </p>
            </div>

            {/* Выводы */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Выводы и уроки</h2>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Культ личности не возникает за один день.</strong> Он выстраивается десятилетиями через систему образования, СМИ и искусства.
                </li>
                <li>
                  <strong>Изоляция — лучший друг пропаганды.</strong> Без доступа к альтернативным точкам зрения очень сложно подвергнуть сомнению навязанную картину мира.
                </li>
                <li>
                  <strong>Язык — это инструмент власти.</strong> Контроль над словарем и риторикой — это контроль над мышлением.
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
                    href="https://www.nknews.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-700 hover:underline"
                  >
                    NK News
                  </a>{" "}
                  и{" "}
                  <a
                    href="https://www.dailynk.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-700 hover:underline"
                  >
                    Daily NK
                  </a>
                </li>
                <li>
                  📚{" "}
                  <span className="text-gray-800">
                    «Побег из лагеря 14» Син Дон Хёка — история человека, родившегося в северокорейском трудовом лагере.
                  </span>
                </li>
                <li>
                  🕊️{" "}
                  <a
                    href="https://www.hrw.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-700 hover:underline"
                  >
                    HRW
                  </a>{" "}
                  и{" "}
                  <a
                    href="https://www.amnesty.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-700 hover:underline"
                  >
                    Amnesty International
                  </a>
                </li>
              </ul>
            </div>

            {/* Кнопка возврата */}
            <div className="text-center">
              <Button
                linkTo="/case-study"
                variant="outline"
                className="py-3 px-8"
              >
                Вернуться к библиотеке кейсов
              </Button>
            </div>
          </div>
        </section>

        {/* Культ-Метр */}
        <CultMeter level={cultLevel} />
      </main>
    </>
  );
}