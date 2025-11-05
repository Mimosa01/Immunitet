import { GraduationCap, Lightbulb, Users } from "lucide-react";
import AudienceCard from "../modules/AudienceCard";
import GradientIconCircle from "../ui/GradientIconCircle";

function ForPlatform() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Для кого эта платформа?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AudienceCard 
            icon={
              <GradientIconCircle 
              icon={
                <GraduationCap className="w-8 h-8 text-white" />
              }
              gradientClass="bg-linear-to-br from-blue-500 to-cyan-500"
              />
            }
            title="Старшеклассники и студенты"
            description="Развивайте критическое мышление в возрасте формирования мировоззрения"
          />
          
          <AudienceCard 
            icon={
              <GradientIconCircle 
              icon={
                <Users className="w-8 h-8 text-white" />
              }
              gradientClass="bg-linear-to-br from-purple-500 to-pink-500"
              />
            }
            bgGradientClass="bg-linear-to-br from-purple-50 to-pink-50"
            borderClass="border-purple-200"
            title="Педагоги"
            description="Инструменты для преподавания медиаграмотности и критического мышления"
          />

          <AudienceCard 
            icon={
              <GradientIconCircle 
              icon={
                <Lightbulb className="w-8 h-8 text-white" />
              }
              gradientClass="bg-linear-to-br from-green-500 to-emerald-500"
              />
            }
            bgGradientClass="bg-linear-to-br from-green-50 to-emerald-50"
            borderClass="border-green-200"
            title="Все заинтересованные"
            description="Защитите себя и своих близких от манипуляций и дезинформации"
          />
        </div>
      </div>
    </section>
  )
}

export default ForPlatform;