import type { IconComponent } from "../../types/types";

interface DiagnosticInfoCardProps {
  icon: IconComponent;
  listIcon: IconComponent;
  title: string;
  whatWeGet: string[];
}

function DiagnosticInfoCard({
  icon,
  listIcon,
  title,
  whatWeGet
}: DiagnosticInfoCardProps) {
  const Icon = icon;
  const ListIcon = listIcon;

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-white"/>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{ title }</h3>
      </div>
      <ul className="space-y-4">
        {whatWeGet.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <ListIcon className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DiagnosticInfoCard;