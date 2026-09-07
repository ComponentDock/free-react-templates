import { useEffect, useState, useCallback } from 'react'
import { cn } from '@free-react-templates/ui'
import { Check } from 'lucide-react'
import { StepIndicator } from './components/StepIndicator'
import { AboutStep } from './components/AboutStep'
import { PersonalStep } from './components/PersonalStep'
import { PaymentStep } from './components/PaymentStep'
import { Footer } from './components/Footer'
import { STEPS, INITIAL_DATA } from './types'
import type { HexData } from './types'
import { validateStep, type StepErrors } from './validation'

export function App() {
  useEffect(() => {
    document.title = 'Hex — Account Registration Wizard'
  }, [])

  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())
  const [data, setData] = useState<HexData>(INITIAL_DATA)
  const [errors, setErrors] = useState<StepErrors>({})
  const [isComplete, setIsComplete] = useState(false)

  const handleFieldChange = useCallback((field: keyof HexData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next[field]
      return next
    })
  }, [])

  const handleNext = useCallback(() => {
    const stepErrors = validateStep(currentStep, data as unknown as Record<string, string>)
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      return
    }
    setCompletedSteps((prev) => new Set([...prev, currentStep]))
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
      setErrors({})
    } else {
      setCompletedSteps((prev) => new Set([...prev, currentStep]))
      setIsComplete(true)
    }
  }, [currentStep, data])

  const handlePrev = useCallback(() => {
    setCurrentStep((prev) => Math.max(1, prev - 1))
    setErrors({})
  }, [])

  const handleStepClick = useCallback((step: number) => {
    setCurrentStep(step)
    setErrors({})
  }, [])

  return (
    <div
      className="min-h-screen font-['Roboto',sans-serif]"
      style={{
        background: 'linear-gradient(135deg, #fc8fa2, #edaaf1 35%, #54f5e6 70%, #00f3dd)',
      }}
    >
      <div
        className="mx-auto w-[780px] max-w-[90%] rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
        style={{ margin: '110px auto' }}
      >
        {/* Header */}
        <div className="pt-8 text-center">
          <h3 className="text-[32px] font-bold text-[#333]">Sign Up Your User Account</h3>
          <p className="text-lg text-[#666]">Fill all form fields to go to the next step</p>
        </div>

        {/* Step indicators */}
        <StepIndicator
          steps={STEPS}
          currentStep={currentStep}
          completedSteps={completedSteps}
          onStepClick={handleStepClick}
        />

        {/* Step labels */}
        <div className="flex justify-center gap-8 px-4">
          {STEPS.map((step) => (
            <span
              key={step.id}
              className={cn(
                'text-sm font-normal',
                currentStep === step.id ? 'text-[#24c1e8]' : 'text-[#999]',
              )}
            >
              {step.label}
            </span>
          ))}
        </div>

        {/* Content panel */}
        <div className="mx-5 my-4 rounded-[5px] px-[55px] py-[35px] pb-[55px] shadow-[0_3px_10px_rgba(0,0,0,0.15)] max-sm:mx-4 max-sm:px-5">
          {isComplete ? (
            <div className="rounded-md bg-green-50 p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h4 className="mb-2 text-xl font-bold text-green-700">Success!</h4>
              <p className="text-green-600">Your account has been created successfully.</p>
            </div>
          ) : (
            <>
              {currentStep === 1 && (
                <AboutStep data={data} errors={errors} onChange={handleFieldChange} />
              )}
              {currentStep === 2 && (
                <PersonalStep data={data} errors={errors} onChange={handleFieldChange} />
              )}
              {currentStep === 3 && (
                <PaymentStep data={data} errors={errors} onChange={handleFieldChange} />
              )}
            </>
          )}
        </div>

        {/* Action buttons */}
        {!isComplete && (
          <div className="flex justify-end gap-3 px-5 pb-8 max-sm:justify-center">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={cn(
                'h-[45px] w-[140px] rounded-[3px] border-none text-sm font-normal text-[#999] transition-colors hover:text-[#666]',
                'disabled:cursor-not-allowed disabled:opacity-50',
                'max-sm:w-[120px]',
              )}
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              className={cn(
                'h-[45px] w-[140px] rounded-[3px] border-none bg-[#24c1e8] text-sm font-normal text-white transition-colors hover:bg-[#1d97b5]',
                'max-sm:w-[120px]',
              )}
            >
              {currentStep === STEPS.length ? 'Submit' : 'Next Step'}
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
