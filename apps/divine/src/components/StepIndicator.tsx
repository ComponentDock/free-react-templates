interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
  stepLabels: string[]
}

export function StepIndicator({ currentStep, totalSteps, stepLabels }: StepIndicatorProps) {
  return (
    <div
      className="mb-8"
      role="progressbar"
      aria-valuenow={currentStep + 1}
      aria-valuemax={totalSteps}
    >
      <div className="flex items-center">
        {Array.from({ length: totalSteps }, (_, i) => {
          const isCompleted = i < currentStep
          const isActive = i === currentStep
          return (
            <div key={i} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-300 ${
                    isActive
                      ? 'bg-accent text-white'
                      : isCompleted
                        ? 'bg-accent text-white'
                        : 'bg-step-inactive text-text-secondary'
                  }`}
                  aria-label={`Step ${i + 1}: ${stepLabels[i]}`}
                >
                  {i + 1}
                </div>
                <span
                  className={`mt-1 text-xs transition-colors duration-300 ${
                    isActive ? 'text-text-primary font-medium' : 'text-text-secondary'
                  }`}
                >
                  {stepLabels[i]}
                </span>
              </div>
              {i < totalSteps - 1 && (
                <div
                  className={`mx-2 h-[2px] flex-1 transition-colors duration-300 ${
                    i < currentStep ? 'bg-accent' : 'bg-step-inactive'
                  }`}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
