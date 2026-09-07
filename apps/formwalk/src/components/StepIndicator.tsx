interface StepIndicatorProps {
  currentStep: number
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [1, 2, 3]

  return (
    <nav aria-label="Form steps" className="flex items-center justify-center">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <span
            className={`flex h-[60px] w-[60px] items-center justify-center rounded-full text-lg font-bold ${
              step <= currentStep ? 'bg-brand text-white' : 'bg-step-inactive text-white'
            }`}
            aria-current={step === currentStep ? 'step' : undefined}
          >
            {step}
          </span>
          {index < steps.length - 1 && <div className="mx-2 h-[2px] w-[143px] bg-border" />}
        </div>
      ))}
    </nav>
  )
}
