import { BookOpen } from "lucide-react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import CaseCard from "../components/modules/CaseCard";
import { caseStudies } from "../constants/caseStudies";

export default function Cases() {
  return (
    <>
      <main className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header
          icon={<BookOpen className="w-8 h-8 text-white" />}
          title="Кейс-стади: От фанатов до фанатиков"
          description="Аналитические разборы реальных явлений"
          back
        />
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Изучите, как механизмы внушения и группового давления работают в реальной истории и современности.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseItem) => (
                <CaseCard
                  key={caseItem.id}
                  case={caseItem}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}