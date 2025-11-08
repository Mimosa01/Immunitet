import { Brain } from "lucide-react";
import GradientIconCircle from "../ui/GradientIconCircle";
import Button from "../ui/Button";

function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <GradientIconCircle
          icon={<Brain className="w-8 h-8 text-white" />}
          className="mb-6"
        />
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Готовы развить иммунитет к пропаганде?
        </h3>
        <p className="text-xl text-gray-600 mb-8">
          Начните с любого модуля и сделайте первый шаг к критическому мышлению
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button linkTo="arsenal" variant="primary" className="w-fit">Начать обучение</Button>
          {/* <Button disabled variant="secondary">Узнать больше</Button> */}
        </div>
      </div>
    </section>
  )
}

export default CTA;