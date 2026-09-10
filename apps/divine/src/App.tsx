import { useState, useCallback, type FormEvent } from 'react'
import { INITIAL_DATA, type WizardData } from './components/StepBilling'
import { StepBilling } from './components/StepBilling'
import { StepShipping } from './components/StepShipping'
import { StepPayment } from './components/StepPayment'
import { StepConfirm } from './components/StepConfirm'
import { StepIndicator } from './components/StepIndicator'
import { NavButtons } from './components/NavButtons'
import { Footer } from './components/Footer'

const STEP_LABELS = ['Billing', 'Shipping', 'Payment', 'Confirm']
const TOTAL_STEPS = 4

function handleFormSubmit(e: FormEvent) {
  e.preventDefault()
}

export function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState<WizardData>(INITIAL_DATA)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)

  const updateField = useCallback((field: keyof WizardData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: false }))
  }, [])

  const validateStep = useCallback(
    (step: number): boolean => {
      const newErrors: Record<string, boolean> = {}
      let valid = true

      if (step === 0) {
        if (!data.firstName.trim()) {
          newErrors.firstName = true
          valid = false
        }
        if (!data.lastName.trim()) {
          newErrors.lastName = true
          valid = false
        }
        if (!data.country) {
          newErrors.country = true
          valid = false
        }
        if (!data.address.trim()) {
          newErrors.address = true
          valid = false
        }
        if (!data.city.trim()) {
          newErrors.city = true
          valid = false
        }
      } else if (step === 1) {
        if (!data.shippingMethod) {
          newErrors.shippingMethod = true
          valid = false
        }
        if (!data.shippingAddress.trim()) {
          newErrors.shippingAddress = true
          valid = false
        }
        if (!data.shippingCity.trim()) {
          newErrors.shippingCity = true
          valid = false
        }
        if (!data.shippingZip.trim()) {
          newErrors.shippingZip = true
          valid = false
        }
      } else {
        if (!data.cardName.trim()) {
          newErrors.cardName = true
          valid = false
        }
        if (!data.cardNumber.trim()) {
          newErrors.cardNumber = true
          valid = false
        }
        if (!data.expiry.trim()) {
          newErrors.expiry = true
          valid = false
        }
        if (!data.cvv.trim()) {
          newErrors.cvv = true
          valid = false
        }
      }

      setErrors(newErrors)
      return valid
    },
    [data],
  )

  const handleNext = useCallback(() => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1)
    }
  }, [currentStep, validateStep])

  const handlePrev = useCallback(() => {
    setCurrentStep((prev) => prev - 1)
  }, [])

  const handleSubmit = useCallback(() => {
    setSubmitted(true)
  }, [])

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-page-bg px-5">
        <div className="rounded-lg bg-card-bg p-10 text-center shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-text-primary">Order Confirmed!</h2>
          <p className="text-text-secondary">Thank you for your order.</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-page-bg">
      <div className="flex min-h-screen w-full flex-1 flex-col items-center justify-center px-5 py-10 md:flex-row md:items-stretch md:py-0">
        {/* Left panel — decorative */}
        <div className="hidden w-[40%] items-center justify-center md:flex">
          <img
            src="https://picsum.photos/seed/divine-decor/800/1000"
            alt="Decorative illustration"
            className="max-h-[80vh] w-[80%] rounded-lg object-cover"
          />
        </div>

        {/* Right panel — form wizard */}
        <div className="flex w-full max-w-[60%] flex-col justify-center px-8 py-10 md:px-[80px]">
          <form
            onSubmit={handleFormSubmit}
            aria-label="Order wizard form"
            className="w-full max-w-lg"
          >
            <StepIndicator
              currentStep={currentStep}
              totalSteps={TOTAL_STEPS}
              stepLabels={STEP_LABELS}
            />

            <div className="rounded-lg bg-card-bg p-8 shadow-md">
              {currentStep === 0 && (
                <StepBilling data={data} errors={errors} onUpdate={updateField} />
              )}
              {currentStep === 1 && (
                <StepShipping data={data} errors={errors} onUpdate={updateField} />
              )}
              {currentStep === 2 && (
                <StepPayment data={data} errors={errors} onUpdate={updateField} />
              )}
              {currentStep === 3 && <StepConfirm data={data} />}

              <NavButtons
                step={currentStep}
                totalSteps={TOTAL_STEPS}
                onPrev={handlePrev}
                onNext={handleNext}
                onSubmit={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}
