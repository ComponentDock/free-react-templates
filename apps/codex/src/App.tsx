import { useState, useCallback } from 'react'
import { StepIndicator } from './components/StepIndicator'
import { StepInput } from './components/StepInput'
import { Footer } from './components/Footer'
import { STEPS, INITIAL_DATA } from './types'
import type { WizardData } from './types'

export function App() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<WizardData>(INITIAL_DATA)
  const [submitted, setSubmitted] = useState(false)

  const stepConfig = STEPS[step - 1]!

  const handleChange = useCallback((field: keyof WizardData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleNext = useCallback(() => {
    setStep((s) => Math.min(s + 1, 4))
  }, [])

  const handleSubmit = useCallback(() => {
    setSubmitted(true)
  }, [])

  if (submitted) {
    return (
      <div
        className="flex min-h-screen flex-col items-center justify-center px-4"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/codex-bg/1920/1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="mb-10 pt-[275px] text-[30px] font-bold uppercase text-white max-md:pt-[120px]">
          Register Wizard
        </h1>
        <div className="w-full max-w-[650px] rounded-[5px] bg-white p-10 text-center shadow-[0px_8px_20px_0px_rgba(0,0,0,0.15)]">
          <div className="mb-4 text-5xl">✓</div>
          <h2 className="mb-2 text-2xl font-bold text-[#333]">Registration Complete</h2>
          <p className="text-[#666]">
            Welcome, {data.username || 'User'}! Your account has been created.
          </p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div
      className="flex min-h-screen flex-col items-center px-4"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/codex-bg/1920/1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="mb-10 pt-[275px] text-[30px] font-bold uppercase text-white max-md:pt-[120px]">
        Register Wizard
      </h1>

      <div className="mb-[90px] w-full max-w-[650px] rounded-[5px] bg-white p-10 shadow-[0px_8px_20px_0px_rgba(0,0,0,0.15)]">
        <StepIndicator currentStep={step} />

        <div className="px-4">
          <StepInput
            placeholder={stepConfig.placeholder}
            type={
              stepConfig.label.includes('password')
                ? 'password'
                : stepConfig.label === 'email'
                  ? 'email'
                  : 'text'
            }
            value={data[stepConfig.label as keyof WizardData]}
            onChange={(v) => handleChange(stepConfig.label as keyof WizardData, v)}
            isLastStep={step === 4}
            onSubmit={step === 4 ? handleSubmit : handleNext}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}
