import { STEPS } from '../types'

interface StepIndicatorProps {
  currentStep: number
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <nav
      aria-label="Wizard steps"
      className="mb-8 flex justify-center gap-4 max-md:flex-col max-md:items-stretch max-md:gap-3"
    >
      {STEPS.map((step) => {
        const isActive = step.id === currentStep
        const isDone = step.id < currentStep
        return (
          <div
            key={step.id}
            className="flex items-center gap-3 rounded-full px-3 py-2 transition-all duration-300 max-md:justify-center"
            style={{
              backgroundColor: isActive || isDone ? '#3155cc' : '#999999',
            }}
            aria-current={isActive ? 'step' : undefined}
          >
            <span
              className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full text-lg font-bold text-white"
              style={{
                backgroundColor: isActive || isDone ? '#3d6aff' : '#666666',
              }}
            >
              {step.id}
            </span>
            <span className="text-sm font-bold uppercase text-white max-md:text-base">
              {step.label}
            </span>
          </div>
        )
      })}
    </nav>
  )
}
