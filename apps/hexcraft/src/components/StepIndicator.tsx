interface StepIndicatorProps {
  currentStep: number
}

const steps = ['Choose Date', 'Choose Room', 'Make a Reservation', 'Confirmation']

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <nav aria-label="Booking steps" className="flex flex-row gap-4 lg:flex-col lg:gap-0">
      {steps.map((label, i) => {
        const num = i + 1
        const isActive = num === currentStep
        const isCompleted = num < currentStep
        return (
          <div
            key={label}
            className={`flex items-center gap-3 lg:items-start ${
              i < steps.length - 1 ? 'lg:mb-2' : ''
            }`}
          >
            {/* Step circle */}
            <div className="flex flex-col items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-medium ${
                  isActive
                    ? 'border-gold bg-gold text-navy'
                    : isCompleted
                      ? 'border-gold bg-gold/20 text-gold'
                      : 'border-muted-blue text-muted-blue'
                }`}
              >
                {num}
              </div>
              {/* Connecting line (hidden on mobile, shown on desktop) */}
              {i < steps.length - 1 && (
                <div
                  className={`hidden h-6 w-0.5 lg:block ${
                    isCompleted ? 'bg-gold' : 'bg-muted-blue/30'
                  }`}
                />
              )}
            </div>
            {/* Label */}
            <span
              className={`mt-1 hidden text-sm lg:block ${
                isActive
                  ? 'font-medium text-gold'
                  : isCompleted
                    ? 'text-gold/70'
                    : 'text-muted-blue'
              }`}
            >
              {label}
            </span>
          </div>
        )
      })}
    </nav>
  )
}
