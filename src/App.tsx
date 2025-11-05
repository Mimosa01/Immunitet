import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Diagnostic from "./pages/Diagnostic"
import Lab from "./pages/Lab"
import Arsenal from "./pages/Arsenal"
import Cases from "./pages/Cases"
import Footer from "./components/layouts/Footer"
import DiagnosticLayout from "./layouts/DiagnosticLayout"
import QuestionPage from "./pages/QuestionPage"
import DiagnosticResultPage from "./pages/DiagnosticResult"
import CaseDetailFan from "./pages/CaseDetailFan"
import CaseDetailPropaganda from "./pages/CaseDetailPropaganda"
import CaseDetailCult from "./pages/CaseDetailCult"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route element={<DiagnosticLayout />}>
          <Route path='/diagnostic' element={ <Diagnostic /> }/>
          <Route path='/questions/:id' element={ <QuestionPage /> }/>
          <Route path='/diagnostic/result' element={ <DiagnosticResultPage /> }/>
        </Route>
        <Route path='/lab' element={ <Lab /> }/>
        <Route path='/arsenal' element={ <Arsenal /> }/>
        <Route path="/case-study" element={<Cases />} />
        <Route path="/case-study/fan-to-cult" element={<CaseDetailFan />} />
        <Route path="/case-study/nazi-propaganda" element={<CaseDetailPropaganda />} />
        <Route path="/case-study/political-cult" element={<CaseDetailCult />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App