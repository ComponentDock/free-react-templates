import { cn } from '@free-react-templates/ui'
import { User, Lock, FileText, DollarSign } from 'lucide-react'

interface StepIndicatorProps {
  currentStep: number
}

const STEPS = [
  { label: 'About', Icon: User },
  { label: 'Account', Icon: Lock },
  { label: 'Ownership', Icon: FileText },
  { label: 'Financing', Icon: DollarSign },
]

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center">
      {STEPS.map((step, index) => {
        const stepNumber = index + 1
        const isDone = stepNumber < currentStep
        const isActive = stepNumber === currentStep

        return (
          <div key={step.label} className="flex items-center">
            {/* Circle */}
            <div
              className={cn(
                'flex h-[60px] w-[60px] items-center justify-center rounded-full text-white transition-all',
                isDone || isActive
                  ? 'bg-[linear-gradient(136deg,#f27121,#e94057,#8a2387)]'
                  : 'bg-step-inactive',
              )}
            >
              {isDone ? <span className="text-lg font-bold">✓</span> : <step.Icon size={24} />}
            </div>

            {/* Connector line */}
            {index < STEPS.length - 1 && (
              <div
                className={cn(
                  'h-[2px] w-[108px]',
                  stepNumber < currentStep
                    ? 'bg-[linear-gradient(136deg,#f27121,#e94057,#8a2387)]'
                    : 'bg-connector',
                )}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
