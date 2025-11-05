import { Target } from 'lucide-react';
import Header from '../components/layouts/Header';
import { useDiagnosticStore } from '../store/useDiagnosticStore';
import DiagnosticInterpretation from '../components/layouts/DiagnosticInterpretation';

export default function DiagnosticResultPage() {
  const { weights } = useDiagnosticStore();

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header 
        icon={<Target className="w-8 h-8 text-white" />}
        title="Ваш профиль восприимчивости"
        back
      />
      <DiagnosticInterpretation weights={weights}/>
    </main>
  );
}