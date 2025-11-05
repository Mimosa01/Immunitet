import { features } from "../../constants/features";
import FeatureCard from "../modules/FeatureCard";

function Hero() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Как работает иммунитет к пропаганде?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Наша платформа работает по аналогии с вакциной: сначала вы изучаете теорию, 
            затем анализируете примеры, практикуетесь и вырабатываете устойчивый иммунитет.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              IconComponent={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero;