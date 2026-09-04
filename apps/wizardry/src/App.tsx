import { useEffect, useState, useCallback } from 'react'
import { StepIndicator } from './components/StepIndicator'
import { AccountStep } from './components/AccountStep'
import { BillingStep } from './components/BillingStep'
import { AgreementStep } from './components/AgreementStep'
import { SuccessScreen } from './components/SuccessScreen'
import { FormActions } from './components/FormActions'
import { Footer } from './components/Footer'
import { STEPS, INITIAL_DATA } from './types'
import type { WizardData } from './types'

type WizardErrors = Partial<Record<keyof WizardData, string>>

function validateStep(step: number, data: WizardData): WizardErrors {
  const errors: WizardErrors = {}

  if (step === 1) {
    if (!data.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Please enter a valid email'
    }
    if (!data.password) {
      errors.password = 'Password is required'
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password'
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match'
    }
  }

  if (step === 2) {
    if (!data.cardName.trim()) {
      errors.cardName = 'Card holder name is required'
    }
    if (!data.cardNumber.trim()) {
      errors.cardNumber = 'Card number is required'
    }
    if (!data.cvc) {
      errors.cvc = 'CVC is required'
    }
    if (!data.expiration.trim()) {
      errors.expiration = 'Expiration date is required'
    }
  }

  if (step === 3 && !data.agreementAccepted) {
    errors.agreementAccepted = 'You must accept the agreement'
  }

  return errors
}

export function App() {
  useEffect(() => {
    document.title = 'Wizardry — Multi-Step Form Wizard Template'
  }, [])

  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())
  const [data, setData] = useState<WizardData>(INITIAL_DATA)
  const [errors, setErrors] = useState<WizardErrors>({})
  const [isComplete, setIsComplete] = useState(false)

  const handleFieldChange = useCallback((field: keyof WizardData, value: string | boolean) => {
    setData((prev) => ({ ...prev, [field]: value }))
    // Clear error for this field when user starts typing
    setErrors((prev) => {
      const next = { ...prev }
      delete next[field]
      return next
    })
  }, [])

  const handleNext = useCallback(() => {
    const stepErrors = validateStep(currentStep, data)
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      return
    }
    setCompletedSteps((prev) => new Set([...prev, currentStep]))
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsComplete(true)
    }
  }, [currentStep, data])

  const handleBack = useCallback(() => {
    setCurrentStep((prev) => Math.max(1, prev - 1))
  }, [])

  const handleReset = useCallback(() => {
    setCurrentStep(1)
    setCompletedSteps(new Set())
    setData(INITIAL_DATA)
    setErrors({})
    setIsComplete(false)
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-brand-blue via-brand-pink to-brand-gold font-['Open_Sans',sans-serif]">
      {/* Title */}
      <h1
        className="font-['Montserrat',sans-serif] text-5xl font-bold text-white/60 mb-2 text-center"
        style={{ marginTop: '160px' }}
      >
        FORM WIZARD
      </h1>

      {/* Wizard card */}
      <div
        className="bg-white rounded-[10px] flex flex-col lg:flex-row overflow-hidden mx-4 mb-48"
        style={{ maxWidth: '790px', width: '100%' }}
      >
        {/* Sidebar steps */}
        <StepIndicator steps={STEPS} currentStep={currentStep} completedSteps={completedSteps} />

        {/* Content area */}
        <div className="flex-1 bg-white p-0 min-w-0">
          <div className="mx-auto max-w-[530px]">
            {/* Inner card with shadow */}
            <div
              className="rounded-md p-0 px-8 pt-0 pb-6"
              style={{ margin: '35px 40px 25px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}
            >
              {isComplete ? (
                <SuccessScreen onReset={handleReset} />
              ) : (
                <>
                  {currentStep === 1 && (
                    <AccountStep data={data} errors={errors} onChange={handleFieldChange} />
                  )}
                  {currentStep === 2 && (
                    <BillingStep data={data} errors={errors} onChange={handleFieldChange} />
                  )}
                  {currentStep === 3 && (
                    <AgreementStep
                      data={data}
                      error={errors.agreementAccepted}
                      onChange={handleFieldChange}
                    />
                  )}
                </>
              )}
            </div>

            {/* Action buttons */}
            {!isComplete && (
              <FormActions
                isFirstStep={currentStep === 1}
                isLastStep={currentStep === STEPS.length}
                onBack={handleBack}
                onNext={handleNext}
              />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
