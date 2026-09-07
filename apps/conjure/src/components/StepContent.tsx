import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'

interface StepContentProps {
  step: number
  subtitle: string
}

const STEP_COMPONENTS = [Step1, Step2, Step3]

export function StepContent({ step, subtitle }: StepContentProps) {
  const StepComponent = STEP_COMPONENTS[step]!

  return (
    <div className="flex min-h-[521px] flex-col md:flex-row">
      {/* Image column — 40% */}
      <div className="flex items-center justify-center bg-page md:w-[40%]">
        <img
          src={`https://picsum.photos/seed/conjure-${step + 1}/368/521`}
          alt={`Step ${step + 1} illustration`}
          className="h-[300px] w-full object-cover md:h-[521px]"
        />
      </div>

      {/* Form column — 60% */}
      <div className="flex flex-1 flex-col px-5 py-10 md:w-[60%] md:px-[51px] md:pt-[65px]">
        {/* Heading */}
        <div className="mb-[75px] text-center">
          <h3 className="mb-0 inline-block border border-title-border px-[15px] py-[5px] font-semibold uppercase tracking-[7px] text-title">
            Registration
          </h3>
        </div>

        {/* Subtitle */}
        <p className="mb-[26px] text-center text-[20px] font-semibold text-accent">{subtitle}</p>

        {/* Step panel */}
        <div id={`step-panel-${step}`} role="tabpanel" aria-labelledby={`step-tab-${step}`}>
          <StepComponent />
        </div>
      </div>
    </div>
  )
}
