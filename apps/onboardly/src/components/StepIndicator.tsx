import type { StepConfig } from '../types'

interface StepIndicatorProps {
  steps: StepConfig[]
  currentStep: number
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <nav className="px-6 pt-6 pb-5" aria-label="Wizard steps">
      <ul className="flex list-none justify-between items-center p-0 m-0 relative">
        {/* Connector bar */}
        <span
          className="absolute top-1/2 left-0 w-full h-2 bg-white -translate-y-1/2 z-0"
          aria-hidden="true"
        />
        {steps.map((step) => {
          const isCurrent = step.id === currentStep
          return (
            <li
              key={step.id}
              className="relative z-10 flex flex-col items-center"
              aria-current={isCurrent ? 'step' : undefined}
            >
              <span
                className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold border-3 border-white shadow-md ${
                  isCurrent ? 'text-white' : 'bg-brand-step-bg text-brand-step-inactive'
                }`}
                style={
                  isCurrent
                    ? {
                        background: 'linear-gradient(0deg, #a1c4fd, #884d80, #2b5876, #4e4376)',
                      }
                    : undefined
                }
              >
                {step.id}
              </span>
              <span className="mt-2 text-xs font-bold text-white text-center drop-shadow-sm">
                {step.label}
              </span>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
