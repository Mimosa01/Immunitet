import { Shield } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Shield className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold">Иммунитет</span>
        </div>
        <p className="text-gray-400 mb-4">
          Платформа для развития критического мышления и медиаграмотности
        </p>
        <p className="text-gray-500 text-sm">
          «Не будь вирусом. Включи критическое мышление.»
        </p>
      </div>
    </footer>
  )
}

export default Footer;