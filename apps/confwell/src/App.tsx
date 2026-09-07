import { useEffect, useState } from 'react'
import { Wizard } from './components/Wizard'
import { Footer } from './components/Footer'

export function App() {
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    document.title = 'ConfWell — Event Registration Wizard'
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-white">
      <Wizard currentStep={currentStep} onStepChange={setCurrentStep} />
      <Footer />
    </div>
  )
}
