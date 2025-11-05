import { ArrowLeft } from "lucide-react";
import Background from "../ui/Background";
import Button from "../ui/Button";
import GradientIconCircle from "../ui/GradientIconCircle";
import type { ReactNode } from "react";

interface HeaderProps {
  title: string;
  icon: ReactNode;
  description?: string;
  back?: boolean;
}

function Header({
  title,
  icon,
  description,
  back
}: HeaderProps) {
  return (
    <header className="relative overflow-hidden">
      <Background className="absolute inset-0 bg-linear-to-r from-blue-600/10 to-purple-600/10"/>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {back && 
          <Button 
            iconLeft={<ArrowLeft className="w-4 h-4" />}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8"
            variant="ghost"
            link
            linkTo="/"
          >
            Вернуться назад
          </Button>
        }
        <div className="text-center">
          <GradientIconCircle 
            icon={icon}
            gradientClass="bg-linear-to-br from-blue-500 to-purple-600"
            className="mb-6"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          {description && 
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          }
        </div>
      </div>
    </header>
  )
}

export default Header;