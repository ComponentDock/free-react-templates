import { useState, useCallback, type FormEvent } from 'react'
import { Timeline } from './components/Timeline'
import { PersonalInfoStep } from './components/PersonalInfoStep'
import { BankStep } from './components/BankStep'
import { GoalsStep } from './components/GoalsStep'
import { StepActions } from './components/StepActions'

const STEP_NAMES = ['Personal info', 'Connect Bank Account', 'Set Financial Goals'] as const

interface EmailError {
  email?: string
}

function isValidEmail(email: string): boolean {
  if (!email) return true // empty is allowed (source has no required rule)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState<EmailError>({})
  const [finished, setFinished] = useState(false)

  const canAdvance = useCallback((): boolean => {
    return isValidEmail(email)
  }, [email])

  const handleNext = () => {
    if (!canAdvance()) {
      setEmailError({ email: 'Please enter a valid email address' })
      return
    }
    setEmailError({})
    setCurrentStep((prev) => Math.min(prev + 1, STEP_NAMES.length - 1))
  }

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleFinish = () => {
    setFinished(true)
  }

  const handleTabClick = (index: number) => {
    // Gate forward navigation by email validity (source: onStepChanging → form.valid())
    if (index > currentStep && !canAdvance()) {
      setEmailError({ email: 'Please enter a valid email address' })
      return
    }
    setCurrentStep(index)
  }

  const handleEmailChange = (value: string) => {
    setEmail(value)
    // Clear error when user types (email might become valid)
    if (isValidEmail(value)) {
      setEmailError({})
    }
  }

  const handleEmailBlur = () => {
    if (!isValidEmail(email)) {
      setEmailError({ email: 'Please enter a valid email address' })
    } else {
      setEmailError({})
    }
  }

  if (finished) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-page px-5 py-[50px] transition-colors dark:bg-page-dark-mode">
        <div className="w-full max-w-[1400px] bg-container dark:bg-container-dark">
          <div className="bg-panel py-16 text-center dark:bg-panel-dark">
            <h2 className="text-[30px] font-bold text-ink dark:text-ink-dark">
              Thanks — your account setup is complete!
            </h2>
            <p className="mt-4 text-sm text-desc">
              We&apos;ll get your bank account connected shortly.
            </p>
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

  return (
    <div className="flex min-h-screen flex-col items-center bg-page px-5 py-[50px] transition-colors dark:bg-page-dark-mode">
      <div className="flex w-full max-w-[1400px] flex-col bg-container dark:bg-container-dark lg:flex-row">
        {/* Left: vertical step timeline */}
        <Timeline steps={[...STEP_NAMES]} currentStep={currentStep} onTabClick={handleTabClick} />

        {/* Right: content + actions */}
        <div className="flex flex-1 flex-col bg-panel dark:bg-panel-dark">
          <div className="min-h-[800px] max-[992px]:min-h-[900px] max-[480px]:min-h-[1050px]">
            <form
              onSubmit={(e: FormEvent) => e.preventDefault()}
              aria-label="Sign up form"
              className="px-[55px] pt-[45px] max-[768px]:px-[30px] max-[768px]:pt-[30px]"
            >
              {currentStep === 0 && (
                <PersonalInfoStep
                  email={email}
                  emailError={emailError.email}
                  onEmailChange={handleEmailChange}
                  onEmailBlur={handleEmailBlur}
                />
              )}
              {currentStep === 1 && <BankStep />}
              {currentStep === 2 && <GoalsStep />}
            </form>
          </div>

          {/* Actions bar */}
          <div className="px-[55px] pb-[90px] max-[768px]:px-[30px]">
            <StepActions
              currentStep={currentStep}
              totalSteps={STEP_NAMES.length}
              onPrev={handlePrev}
              onNext={handleNext}
              onFinish={handleFinish}
            />
          </div>
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
