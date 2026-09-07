import { useEffect, useState, useCallback } from 'react'
import { StepIndicator } from './components/StepIndicator'
import { AccountStep } from './components/AccountStep'
import { RoomTypeStep } from './components/RoomTypeStep'
import { ExtraDetailsStep } from './components/ExtraDetailsStep'
import { FormActions } from './components/FormActions'
import { Footer } from './components/Footer'
import { STEPS, INITIAL_DATA } from './types'
import type { BookingData } from './types'

export function App() {
  useEffect(() => {
    document.title = 'Reserva — Room Booking Wizard Template'
  }, [])

  const [currentStep, setCurrentStep] = useState(1)
  const [data, setData] = useState<BookingData>(INITIAL_DATA)
  const [isComplete, setIsComplete] = useState(false)

  const handleFieldChange = useCallback((field: keyof BookingData, value: string | boolean) => {
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
      <main className="w-full px-4 py-[195px]">
        <div
          className="relative mx-auto bg-white"
          style={{
            maxWidth: '840px',
            boxShadow: '0px 3px 9.5px 0.5px rgba(0,0,0,0.15)',
          }}
        >
          <div className="signup-form pb-[54px]">
            <StepIndicator steps={STEPS} currentStep={currentStep} />

            <div className="relative px-[80px] pr-[70px]" style={{ height: '410px' }}>
              {isComplete ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <h2 className="text-2xl font-bold text-brand-blue mb-4">Booking Submitted!</h2>
                  <p className="text-brand-text text-center">
                    Your room booking request has been received. We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <>
                  {currentStep === 1 && <AccountStep data={data} onChange={handleFieldChange} />}
                  {currentStep === 2 && <RoomTypeStep data={data} onChange={handleFieldChange} />}
                  {currentStep === 3 && (
                    <ExtraDetailsStep data={data} onChange={handleFieldChange} />
                  )}
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
        </div>
      </main>

      <Footer />
    </div>
  )
}
