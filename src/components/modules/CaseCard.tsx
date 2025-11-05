import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import Button from "../ui/Button";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  color: string;
}

interface CaseCardProps {
  case: CaseStudy;
}

export default function CaseCard({ case: caseItem }: CaseCardProps) {
  return (
    <Link
      to={caseItem.id}
      className={`block rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-linear-to-r ${caseItem.bgColor} border border-white/30`}
    >
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{caseItem.title}</h3>
        <p className="text-sm font-medium text-gray-700 mb-3">{caseItem.subtitle}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{caseItem.description}</p>

        <Button
          iconLeft={<Play className="w-4 h-4" />}
          className={`w-full py-3 px-6 rounded-xl font-semibold text-white bg-linear-to-r ${caseItem.color} hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2`}
        >
          Изучить кейс
        </Button>
      </div>
    </Link>
  );
}