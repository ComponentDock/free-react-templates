import { useState, useCallback } from 'react'
import { StepIndicator } from './components/StepIndicator'
import { AccountStep } from './components/AccountStep'
import { PaymentStep } from './components/PaymentStep'
import { ConfirmStep } from './components/ConfirmStep'
import { NavigationButtons } from './components/NavigationButtons'
import { Footer } from './components/Footer'

export interface AccountData {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export interface PaymentData {
  cardType: string
  cardNumber: string
  cvc: string
  expiryMonth: string
  expiryYear: string
}

export type FormData = AccountData & PaymentData

const STEPS = [
  { number: 1, text: 'Account Information', icon: 'user' as const },
  { number: 2, text: 'Payment Information', icon: 'card' as const },
  { number: 3, text: 'Confirm Details', icon: 'receipt' as const },
] as const

export function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [accountData, setAccountData] = useState<AccountData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardType: '',
    cardNumber: '',
    cvc: '',
    expiryMonth: '',
    expiryYear: '',
  })

  const handlePrevious = useCallback(() => {
    setCurrentStep((prev) => Math.max(1, prev - 1))
  }, [])

  const handleNext = useCallback(() => {
    setCurrentStep((prev) => Math.min(3, prev + 1))
  }, [])

  const formData: FormData = { ...accountData, ...paymentData }

  return (
    <div className="flex min-h-screen flex-col font-raleway">
      <main
        className="flex flex-1 items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-16 sm:px-6"
        style={{ backgroundImage: "url('https://picsum.photos/seed/steppr-bg/1920/1080')" }}
      >
        <div className="w-full max-w-[851px] rounded-[10px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
          <div className="p-[15px_25px]">
            <StepIndicator steps={STEPS} currentStep={currentStep} />

            {currentStep === 1 && <AccountStep data={accountData} onChange={setAccountData} />}
            {currentStep === 2 && <PaymentStep data={paymentData} onChange={setPaymentData} />}
            {currentStep === 3 && <ConfirmStep data={formData} />}

            <NavigationButtons
              currentStep={currentStep}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
