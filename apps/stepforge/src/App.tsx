import { useState, useCallback } from 'react'
import { StepIndicator } from './components/StepIndicator'
import { PersonalInfoStep } from './components/PersonalInfoStep'
import { BookingStep } from './components/BookingStep'
import { ConfirmStep } from './components/ConfirmStep'
import { FormActions } from './components/FormActions'
import { Footer } from './components/Footer'
import { INITIAL_DATA } from './types'
import type { BookingData } from './types'

export function App() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<BookingData>(INITIAL_DATA)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = useCallback((field: keyof BookingData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleNext = useCallback(() => {
    setStep((s) => Math.min(s + 1, 3))
  }, [])

  const handlePrevious = useCallback(() => {
    setStep((s) => Math.max(s - 1, 1))
  }, [])

  const handleSubmit = useCallback(() => {
    setSubmitted(true)
  }, [])

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-brand-navy">
        <div className="w-full max-w-[910px] rounded-[10px] bg-brand-form p-12 text-center shadow-lg">
          <h2 className="mb-4 text-3xl font-bold text-white">Booking Confirmed!</h2>
          <p className="text-lg text-gray-400">
            Thank you, {data.firstName || 'Guest'}. Your booking has been submitted.
          </p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-navy">
      <h1 className="pb-14 pt-[85px] text-[30px] font-bold text-white">Form Booking Wizard</h1>

      <div className="mb-[90px] w-full max-w-[910px] rounded-[10px] bg-brand-form shadow-lg">
        <StepIndicator currentStep={step} />

        <div className="px-12">
          {step === 1 && <PersonalInfoStep data={data} onChange={handleChange} />}
          {step === 2 && <BookingStep data={data} onChange={handleChange} />}
          {step === 3 && <ConfirmStep data={data} />}
        </div>

        <FormActions
          currentStep={step}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </div>
  )
}
