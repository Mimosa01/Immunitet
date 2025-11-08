import { AlertTriangle, Clock, Play } from "lucide-react";
import { testIntroContent } from "../../constants/testIntroContent";
import DiagnosticInfoCard from "../modules/DiagnosticInfoCard";
import Button from "../ui/Button";

function DiagnosticInfo() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {testIntroContent.map((item, index) => (
            <DiagnosticInfoCard key={index} icon={item.icon} listIcon={item.listIcon} title={item.title} whatWeGet={item.whatWeGet} />
          ))}
        </div>

        <div className="mt-12 bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Важная информация</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-4">
              <AlertTriangle className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Конфиденциальность</h4>
              <p className="text-gray-600">Ваши ответы анонимны и используются только для персональной диагностики</p>
            </div>
            <div className="text-center p-4">
              <Clock className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Время прохождения</h4>
              <p className="text-gray-600">Тест займет примерно 15-20 минут вашего времени</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-12">
          <Button
            linkTo="/questions/0"
            className="flex py-4 px-12 w-fit"
            variant="primary"
            iconLeft={<Play className="w-5 h-5" />}
          >
            Начать диагностику
          </Button>
          <p className="text-gray-600 mt-4">Готовы проверить свой иммунитет к пропаганде?</p>
        </div>
      </div>
    </section>
  )
}

export default DiagnosticInfo;