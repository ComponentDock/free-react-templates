import { useEffect, useState, useCallback } from 'react'
import { StepIndicator } from './components/StepIndicator'
import { AccountStep } from './components/AccountStep'
import { SocialStep } from './components/SocialStep'
import { PersonalStep } from './components/PersonalStep'
import { FormActions } from './components/FormActions'
import { Footer } from './components/Footer'
import { STEPS, INITIAL_DATA } from './types'
import type { WizardData } from './types'

export function App() {
  useEffect(() => {
    document.title = 'Onboardly — Account Setup Wizard'
  }, [])

  const [currentStep, setCurrentStep] = useState(1)
  const [data, setData] = useState<WizardData>(INITIAL_DATA)
  const [isComplete, setIsComplete] = useState(false)

  const handleFieldChange = useCallback((field: keyof WizardData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleNext = useCallback(() => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsComplete(true)
    }
  }, [currentStep])

  const handlePrevious = useCallback(() => {
    setCurrentStep((prev) => Math.max(1, prev - 1))
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-0 font-['Poppins',sans-serif]">
      <main className="w-full px-4 py-[270px]">
        <div
          className="relative mx-auto bg-white rounded-[10px] overflow-hidden"
          style={{
            maxWidth: '373px',
            boxShadow: '0px 5px 9.5px 0.5px rgba(0,0,0,0.1)',
          }}
        >
          <StepIndicator steps={STEPS} currentStep={currentStep} />

          <div className="relative px-10 pb-10" style={{ minHeight: '300px' }}>
            {isComplete ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[250px]">
                <h2 className="text-xl font-bold text-brand-purple mb-4">Account Created!</h2>
                <p className="text-brand-text text-center text-[13px]">
                  Your account has been set up successfully. Welcome aboard!
                </p>
              </div>
            ) : (
              <>
                {currentStep === 1 && <AccountStep data={data} onChange={handleFieldChange} />}
                {currentStep === 2 && <SocialStep data={data} onChange={handleFieldChange} />}
                {currentStep === 3 && <PersonalStep data={data} onChange={handleFieldChange} />}
              </>
            )}

            {!isComplete && (
              <FormActions
                isFirstStep={currentStep === 1}
                isLastStep={currentStep === STEPS.length}
                onPrevious={handlePrevious}
                onNext={handleNext}
              />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
