import { useState, useCallback } from 'react'
import { StepDots } from './StepDots'
import { StepContent } from './StepContent'
import { ButtonRow } from './ButtonRow'

const STEPS = [
  { subtitle: 'Please fill with your details' },
  { subtitle: 'Please fill with additional info' },
  { subtitle: 'Send an optional message' },
] as const

export function WizardCard() {
  const [step, setStep] = useState(0)

  const goTo = useCallback((n: number) => {
    setStep(n)
  }, [])

  const next = useCallback(() => goTo(step + 1), [step, goTo])
  const prev = useCallback(() => goTo(step - 1), [step, goTo])

  const currentStep = STEPS[step]!

  return (
    <div className="relative w-full max-w-[920px] px-4">
      {/* Step dots — overlaid above the card */}
      <div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center md:-translate-y-[27.44%]">
        <StepDots current={step} total={STEPS.length} onDotClick={goTo} />
      </div>

      {/* Card */}
      <div className="overflow-hidden rounded bg-card shadow-[0_0_5px_0_rgba(0,0,0,0.2)]">
        <StepContent step={step} subtitle={currentStep.subtitle} />
      </div>

      {/* Button row — overlaid bottom-right */}
      <div className="absolute bottom-4 right-4 md:bottom-[55px] md:right-[51px]">
        <ButtonRow step={step} totalSteps={STEPS.length} onPrev={prev} onNext={next} />
      </div>
    </div>
  )
}
