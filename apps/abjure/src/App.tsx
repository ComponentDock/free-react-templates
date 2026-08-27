import { useState, useCallback, type FormEvent } from 'react'
import { StepField } from './components/StepField'
import { NavButtons } from './components/NavButtons'

interface Step {
  name: string
  label: string
  type: string
  required: boolean
  field: string
}

const STEPS: Step[] = [
  {
    name: 'first_name',
    label: '01 . What is your first name ?',
    type: 'text',
    required: true,
    field: 'first_name',
  },
  {
    name: 'last_name',
    label: '02 . What is your last name ?',
    type: 'text',
    required: true,
    field: 'last_name',
  },
  {
    name: 'email',
    label: '03 . What is your Email ?',
    type: 'email',
    required: true,
    field: 'email',
  },
  {
    name: 'password',
    label: '04 . Create your password',
    type: 'password',
    required: false,
    field: 'password',
  },
  {
    name: 're_password',
    label: '05 . Repeat your password',
    type: 'password',
    required: false,
    field: 're_password',
  },
]

const FOOTER_HEIGHTS = [188, 376, 564, 752]

export function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [values, setValues] = useState<Record<string, string>>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    re_password: '',
  })
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [focused, setFocused] = useState<string | null>(null)
  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>({})
  const [finished, setFinished] = useState(false)
  const [footerHeight, setFooterHeight] = useState(0)

  const validate = useCallback(
    (stepIndex: number): boolean => {
      const step = STEPS[stepIndex]!
      if (!step.required) return true
      const isValid = (values[step.name] as string).trim().length > 0
      setErrors((prev) => ({ ...prev, [step.name]: !isValid }))
      return isValid
    },
    [values],
  )

  const handleNext = () => {
    if (!validate(currentStep)) return
    setCurrentStep((prev) => prev + 1)
    setFooterHeight(FOOTER_HEIGHTS[Math.min(currentStep, FOOTER_HEIGHTS.length - 1)]!)
  }

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const handleFinish = () => {
    setFinished(true)
  }

  const handleTogglePassword = (field: string) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }))
  }

  const getGreeting = () => `Hi, ${(values.first_name as string).trim()}!`

  if (finished) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-sky-deep">
        <h1 className="text-[36px] font-bold text-white">{getGreeting()}</h1>
        <footer className="fixed bottom-0 left-0 right-0 bg-ink py-4 text-center text-sm text-gray-400">
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-sky"
          >
            Component Dock
          </a>
        </footer>
      </div>
    )
  }

  const step = STEPS[currentStep]!

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-sky px-5 py-[410px]">
      <form
        onSubmit={(e: FormEvent) => e.preventDefault()}
        aria-label="Sign up form"
        className="relative w-full max-w-[665px] rounded-[60px] bg-white shadow-[0px_3px_9.5px_0.5px_rgba(0,0,0,0.1)]"
      >
        <div className="flex items-center justify-between px-[55px] py-4">
          <div className="w-[334px] pb-[25px]">
            <StepField
              step={step}
              value={values[step.name] as string}
              error={!!errors[step.name]}
              focused={focused === step.name}
              onChange={(val) => setValues((prev) => ({ ...prev, [step.name]: val }))}
              onFocus={() => setFocused(step.name)}
              onBlur={() => {
                setFocused(null)
                if (step.required) {
                  const isValid = (values[step.name] as string).trim().length > 0
                  setErrors((prev) => ({ ...prev, [step.name]: !isValid }))
                }
              }}
              showPassword={!!showPasswords[step.name]}
              onTogglePassword={() => handleTogglePassword(step.name)}
            />
          </div>
          <NavButtons
            step={currentStep}
            totalSteps={STEPS.length}
            onPrev={handlePrev}
            onNext={handleNext}
            onFinish={handleFinish}
          />
        </div>
      </form>
      {footerHeight > 0 && (
        <div
          data-testid="wizard-footer"
          className="fixed bottom-0 left-0 right-0 z-[9] bg-sky-deep transition-all duration-300"
          style={{ height: `${footerHeight}px` }}
        />
      )}
      <footer className="fixed bottom-0 left-0 right-0 z-[10] bg-ink py-4 text-center text-sm text-gray-400">
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline hover:text-sky"
        >
          Component Dock
        </a>
      </footer>
    </div>
  )
}
