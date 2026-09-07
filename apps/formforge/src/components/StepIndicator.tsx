interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 px-[30px] pb-4">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div
          key={step}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
            step === currentStep
              ? 'bg-brand-green text-white'
              : step < currentStep
                ? 'bg-brand-green/80 text-white'
                : 'bg-brand-progress-bg text-brand-muted'
          }`}
          aria-label={`Step ${step}${step === currentStep ? ' (current)' : ''}`}
        >
          {step}
        </div>
      ))}
    </div>
  )
}
