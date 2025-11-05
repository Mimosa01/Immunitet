import { modules } from "../../constants/modules";
import ModuleCard from "../modules/ModuleCard";

function InteractionsModule() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Интерактивные модули
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Каждый модуль разработан для максимального вовлечения и практического обучения
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default InteractionsModule;