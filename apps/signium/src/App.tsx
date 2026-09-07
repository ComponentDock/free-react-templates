import { useState, useCallback } from 'react'
import { NameStep } from './components/NameStep'
import { EmailStep } from './components/EmailStep'
import { PasswordStep } from './components/PasswordStep'
import { ConfirmStep } from './components/ConfirmStep'
import { StepFooter } from './components/StepFooter'
import { Footer } from './components/Footer'

export function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [completed, setCompleted] = useState(false)

  const handleNext = useCallback(() => {
    setCurrentStep((s) => Math.min(s + 1, 3))
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentStep((s) => Math.max(s - 1, 0))
  }, [])

  const handleFinish = useCallback(() => {
    setCompleted(true)
  }, [])

  return (
    <div className="min-h-screen bg-page flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-[1400px] bg-panel rounded shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left panel — branding and illustration */}
        <div className="bg-left-panel w-full md:w-[495px] shrink-0 p-[45px_55px]">
          <h2 className="text-ink font-heading text-[27px] font-extrabold m-0 pb-[65px]">
            <span className="text-accent">Au</span>Creative
          </h2>
          <p className="font-bold m-0 pb-[7px] text-ink">
            Sign up now to try undraw 30 days for free
          </p>
          <p className="text-muted leading-[1.92] m-0 pb-[30px]">
            MIT licensed illustrations for every project you can imagine and create
          </p>
          <img
            src="https://picsum.photos/seed/signium-illustration/380/260"
            alt="Signup illustration"
            className="w-full pb-[43px]"
          />
        </div>

        {/* Right panel — multi-step form */}
        <div className="w-full md:flex-1 p-[55px_110px]">
          {completed ? (
            <div className="flex flex-col items-center justify-center min-h-[320px]">
              <p className="text-accent text-xl font-bold font-button mb-4">
                Registration Complete!
              </p>
              <p className="text-muted text-sm">
                Thank you for signing up. Your account has been created.
              </p>
            </div>
          ) : (
            <form className="relative">
              <div className="min-h-[320px]">
                {currentStep === 0 && <NameStep />}
                {currentStep === 1 && <EmailStep />}
                {currentStep === 2 && <PasswordStep />}
                {currentStep === 3 && <ConfirmStep />}
              </div>

              <StepFooter
                currentStep={currentStep}
                totalSteps={4}
                onNext={handleNext}
                onPrev={handlePrev}
                onFinish={handleFinish}
              />
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
