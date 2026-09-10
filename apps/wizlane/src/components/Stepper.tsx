import { ShoppingCart, Lock, Truck, CreditCard } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface StepperProps {
  currentStep: number
  totalSteps: number
}

const STEP_CONFIG = [
  { label: 'Basic Details', Icon: ShoppingCart },
  { label: 'Account', Icon: Lock },
  { label: 'Shipping', Icon: Truck },
  { label: 'Payment', Icon: CreditCard },
]

export function Stepper({ currentStep, totalSteps }: StepperProps) {
  return (
    <nav aria-label="Checkout progress" className="mb-8">
      <ol className="flex items-center justify-center gap-0">
        {STEP_CONFIG.map((step, i) => {
          const isCompleted = i < currentStep
          const isCurrent = i === currentStep
          const isLast = i === totalSteps - 1

          return (
            <li key={step.label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'flex h-11 w-11 items-center justify-center rounded-full border-2 transition-colors',
                    isCompleted || isCurrent
                      ? 'border-brand-400 bg-brand-400 text-white'
                      : 'border-brand-300 bg-transparent text-brand-400',
                  )}
                  aria-current={isCurrent ? 'step' : undefined}
                >
                  <step.Icon className="h-5 w-5" />
                </div>
                <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-surface-600">
                  {step.label}
                </span>
              </div>
              {!isLast && (
                <div
                  className="relative mx-2 mb-6 h-0.5 w-10 bg-surface-300 sm:w-14"
                  aria-hidden="true"
                />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
