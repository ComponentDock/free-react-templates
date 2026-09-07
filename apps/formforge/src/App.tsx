import { useState, useCallback } from 'react'
import { ProgressBar } from './components/ProgressBar'
import { StepIndicator } from './components/StepIndicator'
import { PersonalInfoStep } from './components/PersonalInfoStep'
import { AddressStep } from './components/AddressStep'
import { PaymentStep } from './components/PaymentStep'
import { FormActions } from './components/FormActions'
import { Footer } from './components/Footer'
import { INITIAL_DATA } from './types'
import type { FormData } from './types'

const TOTAL_STEPS = 3

export function App() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>(INITIAL_DATA)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = useCallback((field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleNext = useCallback(() => {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  }, [])

  const handlePrevious = useCallback(() => {
    setStep((s) => Math.max(s - 1, 1))
  }, [])

  const handleSubmit = useCallback(() => {
    setSubmitted(true)
  }, [])

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[linear-gradient(316deg,#4158d0,#c850c0,#ffcc70)]">
        <div className="w-full max-w-[690px] rounded-[5px] bg-brand-card p-12 text-center shadow-[0px_8px_20px_rgba(0,0,0,0.15)]">
          <h2 className="mb-4 text-3xl font-bold text-brand-text">Form Submitted!</h2>
          <p className="text-lg text-brand-label">
            Thank you, {data.fullName || 'User'}. Your form has been submitted.
          </p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[linear-gradient(316deg,#4158d0,#c850c0,#ffcc70)]">
      <div className="relative mb-[90px] mt-[60px] w-full max-w-[690px] rounded-[5px] bg-brand-card shadow-[0px_8px_20px_rgba(0,0,0,0.15)]">
        <h1 className="absolute -top-[30px] left-[30px] select-none font-['Montserrat',sans-serif] text-[55px] font-bold uppercase text-white/60 max-sm:relative max-sm:top-0 max-sm:left-0 max-sm:text-[40px] max-sm:text-center max-sm:pt-[30px] max-sm:pb-2">
          Form Wizard
        </h1>

        <div className="px-[30px] pt-[60px] max-sm:pt-4">
          <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />
          <StepIndicator currentStep={step} totalSteps={TOTAL_STEPS} />
        </div>

        <div className="px-[30px] pb-[10px]">
          {step === 1 && <PersonalInfoStep data={data} onChange={handleChange} />}
          {step === 2 && <AddressStep data={data} onChange={handleChange} />}
          {step === 3 && <PaymentStep data={data} onChange={handleChange} />}
        </div>

        <FormActions
          currentStep={step}
          totalSteps={TOTAL_STEPS}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </div>
  )
}
