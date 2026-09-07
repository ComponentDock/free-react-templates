import { useState, useCallback, useRef, type FormEvent } from 'react'
import { StepTabs } from './components/StepTabs'
import { AboutStep } from './components/AboutStep'
import { AccountStep } from './components/AccountStep'
import { AddressStep } from './components/AddressStep'
import { StepActions } from './components/StepActions'

const STEP_NAMES = ['About', 'Account', 'Address'] as const

interface FormData {
  firstName: string
  lastName: string
  email: string
  job: string
  streetName: string
  streetNumber: string
  city: string
  country: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
}

const INITIAL_FORM: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  job: 'coder',
  streetName: '',
  streetNumber: '',
  city: '',
  country: '',
}

function validateAbout(form: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!form.firstName.trim()) {
    errors.firstName = 'Please enter your first name'
  }
  if (!form.lastName.trim()) {
    errors.lastName = 'Please enter your last name'
  }
  if (!form.email.trim()) {
    errors.email = 'Please enter your email'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address!'
  }
  return errors
}

export function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [finished, setFinished] = useState(false)
  const avatarUrlRef = useRef<string | null>(null)

  const validateAndSetErrors = useCallback(() => {
    const errs = validateAbout(form)
    setErrors(errs)
    return Object.keys(errs).length === 0
  }, [form])

  const handleNext = () => {
    if (currentStep === 0 && !validateAndSetErrors()) return
    setCurrentStep((prev) => Math.min(prev + 1, STEP_NAMES.length - 1))
  }

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleFinish = () => {
    setFinished(true)
  }

  const handleTabClick = (index: number) => {
    // Tabs validate the leaving step before switching (matching source onStepChanging → form.valid())
    if (index > currentStep && currentStep === 0) {
      if (!validateAndSetErrors()) return
    }
    setCurrentStep(index)
  }

  const handleFieldChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    // Always clear error for this field when user types
    setErrors((prev) => {
      const next = { ...prev }
      delete next[field as keyof FormErrors]
      return next
    })
  }

  const handleBlur = (field: string) => {
    const fieldErrors = validateAbout(form)
    const errorForField = fieldErrors[field as keyof FormErrors]
    setErrors((prev) => {
      if (errorForField) {
        return { ...prev, [field]: errorForField }
      }
      const next = { ...prev }
      delete next[field as keyof FormErrors]
      return next
    })
  }

  const handleAvatarChange = (url: string) => {
    avatarUrlRef.current = url
  }

  if (finished) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-page transition-colors dark:bg-page-dark-mode">
        <div className="mx-auto max-w-[990px] rounded-[10px] bg-white px-8 py-16 text-center shadow-[0px_3px_9.5px_0.5px_rgba(0,0,0,0.15)] dark:bg-card-dark">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-ink dark:text-ink-dark">
            Thanks — your profile was submitted!
          </h2>
          <p className="mt-4 text-sm text-muted">We&apos;ll be in touch soon.</p>
        </div>
        <footer className="mt-8 text-center text-sm text-muted">
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-accent-dark"
          >
            More templates at Component Dock
          </a>
        </footer>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-page px-5 py-40 transition-colors dark:bg-page-dark-mode">
      <div className="w-full max-w-[990px] rounded-[10px] bg-white shadow-[0px_3px_9.5px_0.5px_rgba(0,0,0,0.15)] dark:bg-card-dark">
        <h2 className="pt-[30px] text-center text-2xl font-bold uppercase text-ink dark:text-ink-dark">
          Build your profile
        </h2>
        <StepTabs steps={[...STEP_NAMES]} currentStep={currentStep} onTabClick={handleTabClick} />
        <form
          onSubmit={(e: FormEvent) => e.preventDefault()}
          aria-label="Sign up form"
          className="min-h-[335px] px-[81px] pb-[52px] pt-0 max-[768px]:min-h-[550px] max-[768px]:px-[30px]"
        >
          {currentStep === 0 && (
            <AboutStep
              firstName={form.firstName}
              lastName={form.lastName}
              email={form.email}
              errors={errors as Record<string, string | undefined>}
              onFieldChange={handleFieldChange}
              onBlur={handleBlur}
              onAvatarChange={handleAvatarChange}
            />
          )}
          {currentStep === 1 && (
            <AccountStep
              selectedJob={form.job}
              onJobChange={(job) => handleFieldChange('job', job)}
            />
          )}
          {currentStep === 2 && (
            <AddressStep
              streetName={form.streetName}
              streetNumber={form.streetNumber}
              city={form.city}
              country={form.country}
              onFieldChange={handleFieldChange}
            />
          )}
        </form>
        <div className="px-[81px] pb-[30px] max-[768px]:px-[30px]">
          <StepActions
            currentStep={currentStep}
            totalSteps={STEP_NAMES.length}
            onPrev={handlePrev}
            onNext={handleNext}
            onFinish={handleFinish}
          />
        </div>
      </div>
      <footer className="mt-8 text-center text-sm text-muted">
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline hover:text-accent-dark"
        >
          More templates at Component Dock
        </a>
      </footer>
    </div>
  )
}
