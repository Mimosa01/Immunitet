import { Shield } from "lucide-react";
import CTA from "../components/layouts/CTA";
import ForPlatform from "../components/layouts/ForPlatform";
import Header from "../components/layouts/Header";
import Hero from "../components/layouts/Hero";
import InteractionsModule from "../components/layouts/InteractionModule";

function Home () {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header 
        icon={<Shield className="text-white w-10 h-10"/>}
        title="Иммунитет"
        description="«Не будь вирусом. Включи критическое мышление.»"
      />
      <Hero />
      <InteractionsModule />
      <ForPlatform />
      <CTA />
    </main>
  )
}

export default Home;