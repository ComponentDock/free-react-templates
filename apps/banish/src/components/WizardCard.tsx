import { useState, useCallback } from 'react'
import { ProgressBar } from './ProgressBar'
import { ButtonRow } from './ButtonRow'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'

const STEPS = [Step1, Step2, Step3]

export function WizardCard() {
  const [step, setStep] = useState(0)

  const goTo = useCallback((n: number) => {
    setStep(n)
  }, [])

  const next = useCallback(() => goTo(step + 1), [step, goTo])
  const prev = useCallback(() => goTo(step - 1), [step, goTo])

  const StepComponent = STEPS[step]!

  return (
    <div className="relative mx-auto w-full max-w-[451px] px-4 md:ml-[14.7%]">
      {/* Card */}
      <div className="relative h-[656px] w-full bg-card p-[50px_58px] max-md:h-auto max-md:p-[30px_20px]">
        <StepComponent />
      </div>

      {/* Progress bar — below card */}
      <ProgressBar step={step} total={3} />

      {/* Button row — inset at card bottom */}
      <div className="absolute bottom-[50px] left-[58px] right-[58px] max-md:static max-md:mx-5 max-md:mt-4">
        <ButtonRow step={step} totalSteps={3} onPrev={prev} onNext={next} />
      </div>
    </div>
  )
}
