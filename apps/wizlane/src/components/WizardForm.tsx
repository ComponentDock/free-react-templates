import { useState, useCallback } from 'react'
import { Stepper } from './Stepper'
import { StepBasicDetails, type BasicDetailsData } from './StepBasicDetails'
import { StepAccount, type AccountData } from './StepAccount'
import { StepShipping, type ShippingData } from './StepShipping'
import { StepPayment, type PaymentData } from './StepPayment'
import { Confirmation } from './Confirmation'

const TOTAL_STEPS = 4

const emptyBasic: BasicDetailsData = {
  firstName: '',
  lastName: '',
  email: '',
  userId: '',
  country: '',
  state: '',
  city: '',
}

const emptyAccount: AccountData = {
  currentPassword: '',
  confirmPassword: '',
  newPassword: '',
  verifyPassword: '',
}

const emptyShipping: ShippingData = {
  fullName: '',
  address: '',
  city: '',
  postalCode: '',
  phone: '',
  country: '',
}

const emptyPayment: PaymentData = {
  cardNumber: '',
  cardName: '',
  expiry: '',
  cvv: '',
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateBasic(d: BasicDetailsData) {
  const e: Partial<Record<keyof BasicDetailsData, string>> = {}
  if (!d.firstName.trim()) e.firstName = 'Required'
  if (!d.lastName.trim()) e.lastName = 'Required'
  if (!d.email.trim()) e.email = 'Required'
  else if (!EMAIL_RE.test(d.email)) e.email = 'Invalid email'
  if (!d.userId.trim()) e.userId = 'Required'
  if (!d.country.trim()) e.country = 'Required'
  if (!d.state.trim()) e.state = 'Required'
  if (!d.city.trim()) e.city = 'Required'
  return e
}

function validateAccount(d: AccountData) {
  const e: Partial<Record<keyof AccountData, string>> = {}
  if (!d.currentPassword) e.currentPassword = 'Required'
  if (!d.confirmPassword) e.confirmPassword = 'Required'
  if (!d.newPassword) e.newPassword = 'Required'
  if (!d.verifyPassword) e.verifyPassword = 'Required'
  if (d.newPassword && d.verifyPassword && d.newPassword !== d.verifyPassword)
    e.verifyPassword = 'Passwords do not match'
  return e
}

function validateShipping(d: ShippingData) {
  const e: Partial<Record<keyof ShippingData, string>> = {}
  if (!d.fullName.trim()) e.fullName = 'Required'
  if (!d.address.trim()) e.address = 'Required'
  if (!d.city.trim()) e.city = 'Required'
  if (!d.postalCode.trim()) e.postalCode = 'Required'
  if (!d.phone.trim()) e.phone = 'Required'
  if (!d.country.trim()) e.country = 'Required'
  return e
}

function validatePayment(d: PaymentData) {
  const e: Partial<Record<keyof PaymentData, string>> = {}
  if (!d.cardNumber.trim()) e.cardNumber = 'Required'
  if (!d.cardName.trim()) e.cardName = 'Required'
  if (!d.expiry.trim()) e.expiry = 'Required'
  if (!d.cvv.trim()) e.cvv = 'Required'
  return e
}

export function WizardForm() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [basic, setBasic] = useState<BasicDetailsData>(emptyBasic)
  const [account, setAccount] = useState<AccountData>(emptyAccount)
  const [shipping, setShipping] = useState<ShippingData>(emptyShipping)
  const [payment, setPayment] = useState<PaymentData>(emptyPayment)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = useCallback(() => {
    if (step === 0) {
      const e = validateBasic(basic)
      setErrors(e)
      return Object.keys(e).length === 0
    }
    if (step === 1) {
      const e = validateAccount(account)
      setErrors(e)
      return Object.keys(e).length === 0
    }
    if (step === 2) {
      const e = validateShipping(shipping)
      setErrors(e)
      return Object.keys(e).length === 0
    }
    const e = validatePayment(payment)
    setErrors(e)
    return Object.keys(e).length === 0
  }, [step, basic, account, shipping, payment])

  const handleNext = () => {
    if (!validate()) return
    if (step < TOTAL_STEPS - 1) setStep(step + 1)
    else setSubmitted(true)
  }

  const handleBack = () => {
    setErrors({})
    setStep(step - 1)
  }

  const handleReset = () => {
    setStep(0)
    setSubmitted(false)
    setBasic(emptyBasic)
    setAccount(emptyAccount)
    setShipping(emptyShipping)
    setPayment(emptyPayment)
    setErrors({})
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-10 shadow-lg">
        <Confirmation onReset={handleReset} />
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg sm:p-10">
      <Stepper currentStep={step} totalSteps={TOTAL_STEPS} />

      <div className="min-h-[320px]">
        {step === 0 && <StepBasicDetails data={basic} onChange={setBasic} errors={errors} />}
        {step === 1 && <StepAccount data={account} onChange={setAccount} errors={errors} />}
        {step === 2 && <StepShipping data={shipping} onChange={setShipping} errors={errors} />}
        {step === 3 && <StepPayment data={payment} onChange={setPayment} errors={errors} />}
      </div>

      <div className="mt-8 flex items-center justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex h-11 items-center justify-center rounded-full bg-surface-200 px-8 text-sm font-bold uppercase tracking-wider text-surface-700 transition-colors hover:bg-surface-300"
          >
            Back
          </button>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={handleNext}
          className="inline-flex h-11 items-center justify-center rounded-full bg-brand-400 px-10 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-500"
        >
          {step === TOTAL_STEPS - 1 ? 'Place Order' : 'Continue'}
        </button>
      </div>
    </div>
  )
}
