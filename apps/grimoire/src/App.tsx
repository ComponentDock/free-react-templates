import { useState, useCallback } from 'react'
import { AccountStep } from './components/AccountStep'
import { PersonalStep } from './components/PersonalStep'
import { PaymentStep } from './components/PaymentStep'
import { StepFooter } from './components/StepFooter'
import { Footer } from './components/Footer'

const STEP_NAMES = ['Account Information', 'Personal Information', 'Payment Details'] as const

export function App() {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = useCallback(() => {
    setCurrentStep((s) => Math.min(s + 1, STEP_NAMES.length - 1))
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentStep((s) => Math.max(s - 1, 0))
  }, [])

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 py-12"
      style={{ backgroundImage: "url('https://picsum.photos/seed/grimoire-bg/1920/1080')" }}
    >
      <div className="w-full max-w-[700px] bg-white rounded-[10px] shadow-lg overflow-hidden">
        <h2 className="text-center text-[#222] text-xl font-bold pt-8 pb-2 px-5">
          Sign up to great new account
        </h2>

        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <div className="step-header px-5 pt-4">
            <h3 className="text-base font-semibold text-[#222]">{STEP_NAMES[currentStep]}</h3>
          </div>

          <div className="step-content px-5 py-4 min-h-[320px]">
            {currentStep === 0 && <AccountStep />}
            {currentStep === 1 && <PersonalStep />}
            {currentStep === 2 && <PaymentStep />}
          </div>

          <StepFooter
            currentStep={currentStep}
            totalSteps={STEP_NAMES.length}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </form>
      </div>

      <Footer />
    </div>
  )
}
