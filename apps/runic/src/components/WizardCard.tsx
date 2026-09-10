import { useState, useCallback } from 'react'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { StepIndicator } from './StepIndicator'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { SuccessState } from './SuccessState'

const TOTAL_STEPS = 3

export function WizardCard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [completed, setCompleted] = useState(false)
  const [activeField, setActiveField] = useState<string | null>(null)

  // Step 1 fields
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [teamName, setTeamName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Step 2 fields
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Step 3 fields
  const [streetName, setStreetName] = useState('')
  const [streetNumber, setStreetNumber] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateStep1 = useCallback(() => {
    const newErrors: Record<string, string> = {}
    if (!firstName.trim()) newErrors.firstName = 'Required'
    if (!lastName.trim()) newErrors.lastName = 'Required'
    if (!email.trim()) newErrors.email = 'Required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [firstName, lastName, email])

  const handleContinue = useCallback(() => {
    if (currentStep === 1 && !validateStep1()) return

    setCurrentStep((s) => s + 1)
    setActiveField(null)
    setErrors({})
  }, [currentStep, validateStep1])

  const handleBack = useCallback(() => {
    setCurrentStep((s) => s - 1)
    setActiveField(null)
    setErrors({})
  }, [])

  const handleFinish = useCallback(() => {
    setCompleted(true)
  }, [])

  const handleFocusField = useCallback((field: string) => {
    setActiveField(field)
  }, [])

  return (
    <div className="relative w-full max-w-[738px]">
      {/* Decorative header */}
      <div
        className="pointer-events-none absolute -top-16 left-0 right-0 select-none text-center"
        aria-hidden="true"
      >
        <span className="font-display text-4xl font-normal uppercase tracking-wide text-white/30 sm:text-5xl md:text-6xl">
          Tell us about yours
        </span>
      </div>

      {/* White card */}
      <div className="rounded-[10px] bg-card px-[40px] pb-8 pt-[60px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.1)] sm:px-[93px] sm:pt-[71px]">
        {completed ? (
          <SuccessState />
        ) : (
          <>
            {currentStep === 1 && (
              <Step1
                activeField={activeField}
                onFocusField={handleFocusField}
                firstName={firstName}
                lastName={lastName}
                teamName={teamName}
                email={email}
                password={password}
                onFirstNameChange={setFirstName}
                onLastNameChange={setLastName}
                onTeamNameChange={setTeamName}
                onEmailChange={setEmail}
                onPasswordChange={setPassword}
              />
            )}
            {currentStep === 2 && (
              <Step2 selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
            )}
            {currentStep === 3 && (
              <Step3
                activeField={activeField}
                onFocusField={handleFocusField}
                streetName={streetName}
                streetNumber={streetNumber}
                city={city}
                country={country}
                onStreetNameChange={setStreetName}
                onStreetNumberChange={setStreetNumber}
                onCityChange={setCity}
                onCountryChange={setCountry}
              />
            )}

            {/* Validation errors */}
            {Object.keys(errors).length > 0 && (
              <div className="mt-2 text-xs text-red-500" role="alert">
                Please fill in all required fields.
              </div>
            )}

            {/* Action buttons */}
            <div className="mt-2 flex items-center gap-4">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-pink px-8 text-[13px] font-normal uppercase text-white transition-colors hover:bg-pink-hover"
                  aria-label="Previous step"
                >
                  <ArrowLeft size={13} />
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={currentStep === TOTAL_STEPS ? handleFinish : handleContinue}
                className={cn(
                  'inline-flex h-11 items-center gap-2 rounded-full bg-accent px-8 text-[13px] font-normal uppercase text-white transition-colors hover:bg-accent-hover',
                  currentStep === 1 && 'ml-auto',
                )}
                aria-label={currentStep === TOTAL_STEPS ? 'Finish' : 'Next step'}
              >
                {currentStep === TOTAL_STEPS ? (
                  <>
                    Finish
                    <Check size={13} />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight size={13} />
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Step indicators below card */}
      {!completed && <StepIndicator totalSteps={TOTAL_STEPS} currentStep={currentStep - 1} />}
    </div>
  )
}
