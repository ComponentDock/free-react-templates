import { useState, useCallback } from 'react'
import { WizardHeader } from './components/WizardHeader'
import { StepIndicator } from './components/StepIndicator'
import { Step1About } from './components/Step1About'
import { Step2Account } from './components/Step2Account'
import { Step3Ownership } from './components/Step3Ownership'
import { Step4Financing } from './components/Step4Financing'
import { NavigationActions } from './components/NavigationActions'
import { Footer } from './components/Footer'

export interface FormData {
  // Step 1 — About
  firstName: string
  lastName: string
  address: string
  zipCode: string
  phone: string
  // Step 2 — Account
  accountType: 'individual' | 'business'
  email: string
  password: string
  confirmPassword: string
  // Step 3 — Ownership
  ownerFirstName: string
  ownerLastName: string
  position: string
  businessArea: string
  dobDay: string
  dobMonth: string
  dobYear: string
  // Step 4 — Financing
  inventoryType: string
  existingFinancing: boolean
  businessName: string
  currentBalance: string
}

const INITIAL_FORM: FormData = {
  firstName: '',
  lastName: '',
  address: '',
  zipCode: '',
  phone: '',
  accountType: 'individual',
  email: '',
  password: '',
  confirmPassword: '',
  ownerFirstName: '',
  ownerLastName: '',
  position: '',
  businessArea: '',
  dobDay: '',
  dobMonth: '',
  dobYear: '',
  inventoryType: '',
  existingFinancing: false,
  businessName: '',
  currentBalance: '',
}

function validateStep(step: number, data: FormData): string[] {
  const errors: string[] = []
  if (step === 1) {
    if (!data.firstName.trim()) errors.push('First Name is required')
    if (!data.lastName.trim()) errors.push('Last Name is required')
    if (!data.address.trim()) errors.push('Address is required')
    if (!data.zipCode.trim()) errors.push('Zip Code is required')
    if (!data.phone.trim()) errors.push('Phone Number is required')
  } else if (step === 2) {
    if (!data.email.trim()) errors.push('Email is required')
    if (!data.password.trim()) errors.push('Password is required')
    if (!data.confirmPassword.trim()) errors.push('Confirm Password is required')
    if (data.password && data.confirmPassword && data.password !== data.confirmPassword) {
      errors.push('Passwords do not match')
    }
  } else if (step === 3) {
    if (!data.ownerFirstName.trim()) errors.push('First Name is required')
    if (!data.ownerLastName.trim()) errors.push('Last Name is required')
    if (!data.position) errors.push('Position is required')
    if (!data.businessArea) errors.push('Business Area is required')
    if (!data.dobDay) errors.push('DOB Day is required')
    if (!data.dobMonth) errors.push('DOB Month is required')
    if (!data.dobYear) errors.push('DOB Year is required')
  } else {
    if (!data.inventoryType) errors.push('Buy Inventory is required')
  }
  return errors
}

export function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<string[]>([])

  const handleNext = useCallback(() => {
    const validationErrors = validateStep(currentStep, formData)
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors([])
    if (currentStep < 4) setCurrentStep((s) => s + 1)
  }, [currentStep, formData])

  const handlePrevious = useCallback(() => {
    setErrors([])
    setCurrentStep((s) => s - 1)
  }, [])

  const updateFormData = useCallback((updates: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }))
    setErrors([])
  }, [])

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/finstep-bg/1920/1080')" }}
    >
      <div className="my-8 w-full max-w-[780px] rounded-[10px] bg-white px-12 py-10 shadow-2xl">
        <WizardHeader />
        <StepIndicator currentStep={currentStep} />
        <div className="mt-8">
          {currentStep === 1 && <Step1About data={formData} onChange={updateFormData} />}
          {currentStep === 2 && <Step2Account data={formData} onChange={updateFormData} />}
          {currentStep === 3 && <Step3Ownership data={formData} onChange={updateFormData} />}
          {currentStep === 4 && <Step4Financing data={formData} onChange={updateFormData} />}
        </div>
        {errors.length > 0 && (
          <div className="mb-4 rounded border border-red-300 bg-red-50 p-3">
            <ul className="list-disc pl-4 text-sm text-red-600">
              {errors.map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          </div>
        )}
        <NavigationActions
          currentStep={currentStep}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
      <Footer />
    </div>
  )
}
