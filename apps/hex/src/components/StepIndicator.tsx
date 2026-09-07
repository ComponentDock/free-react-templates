import { cn } from '@free-react-templates/ui'
import { User, Lock, CreditCard } from 'lucide-react'
import type { StepConfig } from '../types'

const stepIcons = {
  1: User,
  2: Lock,
  3: CreditCard,
} as const

interface StepIndicatorProps {
  steps: StepConfig[]
  currentStep: number
  completedSteps: Set<number>
  onStepClick: (step: number) => void
}

export function StepIndicator({
  steps,
  currentStep,
  completedSteps,
  onStepClick,
}: StepIndicatorProps) {
  return (
    <div className="flex flex-col items-center bg-white px-4 py-8 lg:flex-row lg:px-10 lg:py-0">
      {steps.map((step) => {
        const Icon = stepIcons[step.id as keyof typeof stepIcons]
        const isDone = completedSteps.has(step.id)
        const isCurrent = currentStep === step.id
        const isInactive = !isDone && !isCurrent

        return (
          <div key={step.id} className="flex items-center">
            <button
              type="button"
              onClick={() => onStepClick(step.id)}
              className={cn(
                'flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full transition-colors max-sm:h-10 max-sm:w-10',
                isDone && 'bg-[#24c1e8]',
                isCurrent && 'bg-[#24c1e8]',
                isInactive && 'bg-[#ccc]',
              )}
              aria-label={`Step ${step.id}: ${step.label}`}
            >
              <Icon className="h-6 w-6 text-white max-sm:h-4 max-sm:w-4" />
            </button>
            {step.id < steps.length && (
              <div className="mx-2 hidden h-[2px] w-[108px] bg-[#e5e5e5] lg:block" />
            )}
          </div>
        )
      })}
    </div>
  )
}
