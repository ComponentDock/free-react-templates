import { cn } from '@free-react-templates/ui'

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <nav className="mb-8" aria-label="Booking progress">
      <ol className="flex items-center justify-center">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
          const isActive = step === currentStep
          const isDone = step < currentStep

          return (
            <li
              key={step}
              className="flex items-center"
              aria-current={isActive ? 'step' : undefined}
            >
              <div
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors',
                  isDone && 'bg-brand-accent text-white',
                  isActive && 'bg-brand-accent text-white shadow-lg',
                  !isDone && !isActive && 'border-2 border-gray-300 text-gray-400',
                )}
                aria-hidden="true"
              >
                {isDone ? (
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <span>{step}</span>
                )}
              </div>
              <span className="sr-only">Step {step}</span>
              {step < totalSteps && (
                <div
                  className={cn(
                    'mx-2 h-0.5 w-16 sm:w-24',
                    step < currentStep ? 'bg-brand-accent' : 'bg-gray-200',
                  )}
                />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
