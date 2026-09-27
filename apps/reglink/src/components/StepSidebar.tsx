import { Check } from 'lucide-react'

interface Step {
  number: string
  label: string
}

const steps: Step[] = [
  { number: '01', label: 'Personal Information' },
  { number: '02', label: 'Connect Bank Account' },
  { number: '03', label: 'Set Financial Goals' },
]

interface StepSidebarProps {
  currentStep: number
}

export function StepSidebar({ currentStep }: StepSidebarProps) {
  return (
    <aside className="flex w-[280px] flex-col justify-center bg-[var(--color-sidebar-bg)] px-8 py-10 text-white max-md:w-full max-md:flex-row max-md:justify-around max-md:py-4">
      {steps.map((step, index) => {
        const stepNum = index + 1
        const isActive = stepNum <= currentStep
        const isCurrent = stepNum === currentStep
        return (
          <div
            key={step.number}
            className={`flex items-center gap-4 max-md:flex-col max-md:gap-2 ${
              index < steps.length - 1 ? 'mb-10 max-md:mb-0' : ''
            }`}
            data-active={isActive}
            data-current={isCurrent}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold transition-all ${
                isActive
                  ? 'bg-[var(--color-step-active)] text-white shadow-[0px_3px_10px_rgba(0,0,0,0.25)]'
                  : 'bg-[var(--color-step-inactive)] text-[var(--color-step-inactive)]'
              }`}
            >
              {isActive && stepNum < currentStep ? (
                <Check size={20} aria-hidden="true" />
              ) : (
                step.number
              )}
            </div>
            <div className="max-md:hidden">
              <p className="m-0 text-[15px] font-semibold">{step.label}</p>
            </div>
          </div>
        )
      })}
    </aside>
  )
}
