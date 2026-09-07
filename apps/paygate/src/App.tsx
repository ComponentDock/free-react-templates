import { useState, useCallback } from 'react'
import { StepIndicator } from './components/StepIndicator'
import { PersonalStep } from './components/PersonalStep'
import { BankStep } from './components/BankStep'
import { ConfirmStep } from './components/ConfirmStep'
import { NavigationButtons } from './components/NavigationButtons'
import { Footer } from './components/Footer'

export interface PersonalData {
  fullName: string
  email: string
  phone: string
}

export interface BankData {
  cardNumber: string
  expiryDate: string
  cvv: string
  cardholderName: string
}

export type FormData = PersonalData & BankData

const STEPS = [
  { number: 1, text: 'Personal Information' },
  { number: 2, text: 'Bank Information' },
  { number: 3, text: 'Confirmation' },
] as const

export function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [personalData, setPersonalData] = useState<PersonalData>({
    fullName: '',
    email: '',
    phone: '',
  })
  const [bankData, setBankData] = useState<BankData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handlePrevious = useCallback(() => {
    setCurrentStep((prev) => Math.max(1, prev - 1))
  }, [])

  const handleNext = useCallback(() => {
    setCurrentStep((prev) => Math.min(3, prev + 1))
  }, [])

  const handleSubmit = useCallback(() => {
    setSubmitted(true)
  }, [])

  const formData: FormData = { ...personalData, ...bankData }

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col" style={{ backgroundColor: '#f6f6f6' }}>
        <main className="flex flex-1 items-center justify-center px-4 py-16">
          <div
            className="w-full max-w-[600px] rounded-[10px] bg-white p-10 text-center"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}
          >
            <div className="mb-4 text-5xl">✓</div>
            <h2 className="mb-2 text-2xl font-bold" style={{ color: '#26282b' }}>
              Payment Account Created
            </h2>
            <p style={{ color: '#666' }}>Your payment account has been successfully created.</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: '#f6f6f6' }}>
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div
          className="w-full max-w-[600px] rounded-[10px] bg-white p-8"
          style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}
        >
          <h1 className="mb-6 text-center text-2xl font-bold" style={{ color: '#26282b' }}>
            Create Payment Account
          </h1>

          <StepIndicator steps={STEPS} currentStep={currentStep} />

          {currentStep === 1 && <PersonalStep data={personalData} onChange={setPersonalData} />}
          {currentStep === 2 && <BankStep data={bankData} onChange={setBankData} />}
          {currentStep === 3 && <ConfirmStep data={formData} />}

          <NavigationButtons
            currentStep={currentStep}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={handleSubmit}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
