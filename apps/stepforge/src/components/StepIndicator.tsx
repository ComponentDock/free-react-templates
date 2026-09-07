import { STEPS } from '../types'

interface StepIndicatorProps {
  currentStep: number
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <nav aria-label="Wizard steps" className="flex justify-between px-12 pt-9 pb-5">
      {STEPS.map((step) => {
        const isActive = step.id === currentStep
        const isDone = step.id < currentStep
        return (
          <div
            key={step.id}
            className="flex items-center gap-5"
            aria-current={isActive ? 'step' : undefined}
          >
            <span
              className={`flex h-[60px] w-[60px] items-center justify-center rounded-md text-2xl font-bold text-white shadow-md ${
                isActive || isDone ? 'bg-brand-accent' : 'bg-brand-step-inactive'
              }`}
            >
              {step.id}
            </span>
            <span className="text-base font-normal text-gray-800">{step.label}</span>
          </div>
        )
      })}
    </nav>
  )
}
