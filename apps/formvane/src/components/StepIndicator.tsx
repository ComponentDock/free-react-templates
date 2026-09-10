export interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div
      className="absolute right-8 top-4 select-none"
      aria-label={`Step ${currentStep + 1} of ${totalSteps}`}
    >
      <span
        className="text-5xl font-medium text-surface-400"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {currentStep + 1}
      </span>
      <span
        className="ml-0.5 text-base text-surface-400"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        / {totalSteps}
      </span>
    </div>
  )
}
