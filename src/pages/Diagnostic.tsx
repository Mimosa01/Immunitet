import { Target } from "lucide-react";
import Header from "../components/layouts/Header";
import DiagnosticInfo from "../components/layouts/DiagnosticInfo";

function Diagnostic() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header 
        icon={<Target className="w-8 h-8 text-white" />}
        title="Диагностика: Насколько вы внушаемы?"
        back
      />
      <DiagnosticInfo />
    </main>
  )
}

export default Diagnostic;