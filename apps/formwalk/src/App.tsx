import { useEffect, useState } from 'react'
import { Wizard } from './components/Wizard'
import { Footer } from './components/Footer'

export function App() {
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    document.title = 'FormWalk — Multi-step Form Wizard'
  }, [])

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat font-sans"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/formwalk-bg/1920/1080')`,
      }}
    >
      <div className="w-full max-w-[600px] px-4 py-10">
        <Wizard currentStep={currentStep} onStepChange={setCurrentStep} />
        <Footer />
      </div>
    </div>
  )
}
