import { Heart, MessageSquare, Repeat2, Users2 } from "lucide-react";
import type { Option } from "../../types/types";
import Answer from "./Answer";

interface QuestionCardProps {
  title: string;
  postText: string;
  options: Option[];
}

function QuestionCard({
  title,
  postText,
  options
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h2>
      
      <div className="border-2 border-gray-200 rounded-xl p-6 mb-8 bg-linear-to-br from-gray-50 to-white">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <Users2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Популярный блогер</div>
            <div className="text-sm text-gray-500">@influencer_official • 2 часа назад</div>
          </div>
        </div>
        <div className="text-gray-800 leading-relaxed whitespace-pre-line">
          {postText}
        </div>
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
          <Heart className="w-4 h-4" /> 12.5K
          <MessageSquare className="w-4 h-4" /> 342
          <Repeat2 className="w-4 h-4"/> 8.2K
        </div>
      </div>

      <div className="space-y-4">
        {options.map((option) => (
          <Answer id={option.id} text={option.text} weights={option.weights} />
        ))}
      </div>
    </div>
  )
}

export default QuestionCard;