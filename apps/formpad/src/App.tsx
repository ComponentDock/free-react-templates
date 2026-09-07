import { useState, useCallback, type FormEvent } from 'react'
import { FormHeader } from './components/FormHeader'
import { WizardStep } from './components/WizardStep'
import { ProgressBar } from './components/ProgressBar'
import { NavButtons } from './components/NavButtons'
import { Footer } from './components/Footer'

export interface WizardData {
  // Step 1 — Course Info
  ufOnline: string
  preferredSystem: string
  collegeDept: string
  term: string
  instructorUsername: string
  // Step 2 — Personal Info
  dateOfBirth: string
  countryOfBirth: string
  email: string
  phoneNumber: string
  gender: string
  // Step 3 — Course Selection
  courseId: string
  courseTitle: string
  sections: string
  selectTeacher: string
  agreeTerms: boolean
}

const INITIAL_DATA: WizardData = {
  ufOnline: '',
  preferredSystem: '',
  collegeDept: '',
  term: '',
  instructorUsername: '',
  dateOfBirth: '',
  countryOfBirth: '',
  email: '',
  phoneNumber: '',
  gender: '',
  courseId: '',
  courseTitle: '',
  sections: '',
  selectTeacher: '',
  agreeTerms: false,
}

function handleFormSubmit(e: FormEvent) {
  e.preventDefault()
}

export function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState<WizardData>(INITIAL_DATA)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)

  const totalSteps = 3

  const updateField = useCallback((field: keyof WizardData, value: string | boolean) => {
    setData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: false }))
  }, [])

  const validateStep = useCallback(
    (step: number): boolean => {
      const newErrors: Record<string, boolean> = {}
      let valid = true

      if (step === 0) {
        if (!data.ufOnline) {
          newErrors.ufOnline = true
          valid = false
        }
        if (!data.preferredSystem) {
          newErrors.preferredSystem = true
          valid = false
        }
        if (!data.collegeDept) {
          newErrors.collegeDept = true
          valid = false
        }
        if (!data.term) {
          newErrors.term = true
          valid = false
        }
        if (!data.instructorUsername.trim()) {
          newErrors.instructorUsername = true
          valid = false
        }
      } else if (step === 1) {
        if (!data.dateOfBirth) {
          newErrors.dateOfBirth = true
          valid = false
        }
        if (!data.countryOfBirth) {
          newErrors.countryOfBirth = true
          valid = false
        }
        if (!data.email.trim()) {
          newErrors.email = true
          valid = false
        }
        if (!data.phoneNumber.trim()) {
          newErrors.phoneNumber = true
          valid = false
        }
        if (!data.gender) {
          newErrors.gender = true
          valid = false
        }
      } else {
        if (!data.courseId.trim()) {
          newErrors.courseId = true
          valid = false
        }
        if (!data.courseTitle.trim()) {
          newErrors.courseTitle = true
          valid = false
        }
        if (!data.sections.trim()) {
          newErrors.sections = true
          valid = false
        }
        if (!data.selectTeacher) {
          newErrors.selectTeacher = true
          valid = false
        }
        if (!data.agreeTerms) {
          newErrors.agreeTerms = true
          valid = false
        }
      }

      setErrors(newErrors)
      return valid
    },
    [data],
  )

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 px-5">
        <div className="rounded-[10px] border border-white/40 bg-white/10 p-10 text-center">
          <h2 className="mb-4 text-2xl font-semibold uppercase tracking-[3px] text-white">
            Registration Complete
          </h2>
          <p className="text-white/80">Your course registration has been submitted.</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-neutral-900 bg-[url('https://picsum.photos/seed/formpad-bg/1920/1080')] bg-cover bg-center">
      <div className="flex min-h-screen w-full max-w-[1400px] flex-1 flex-col items-center justify-center px-5 py-10 md:flex-row md:items-stretch md:py-0">
        {/* Left panel — decorative image (hidden on tablet/mobile) */}
        <div className="hidden w-[41%] items-end justify-center md:flex">
          <img
            src="https://picsum.photos/seed/formpad-hero/800/1000"
            alt="Decorative"
            className="max-h-[90vh] w-full object-cover"
          />
        </div>

        {/* Right panel — form wizard */}
        <div className="flex w-full max-w-[59%] flex-col justify-center px-[50px] py-10 md:px-[100px]">
          <FormHeader />

          <form onSubmit={handleFormSubmit} aria-label="Course registration form">
            <div className="rounded-[10px] border border-white/40 bg-white/10 p-[47px_57px_50px_50px]">
              <WizardStep step={currentStep} data={data} errors={errors} onUpdate={updateField} />

              <NavButtons
                step={currentStep}
                totalSteps={totalSteps}
                onPrev={handlePrev}
                onNext={handleNext}
                onSubmit={handleSubmit}
              />
            </div>

            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}
