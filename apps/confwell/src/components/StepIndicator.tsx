import { ChevronRight } from 'lucide-react'

interface StepIndicatorProps {
  currentStep: number
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [1, 2, 3]

  return (
    <nav aria-label="Registration steps" className="mb-8">
      <ul className="flex items-center justify-center gap-2">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold ${
                step === currentStep
                  ? 'border-white bg-white text-slate-900'
                  : step < currentStep
                    ? 'border-white bg-white/20 text-white'
                    : 'border-white/40 text-white/60'
              }`}
              aria-current={step === currentStep ? 'step' : undefined}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <ChevronRight className="mx-1 h-4 w-4 text-white/60" aria-hidden="true" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
