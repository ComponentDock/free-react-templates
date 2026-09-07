import type { StepConfig } from '../types'

interface StepIndicatorProps {
  steps: StepConfig[]
  currentStep: number
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <nav className="border-b border-brand-border" aria-label="Wizard steps">
      <ul className="flex list-none justify-between p-0 m-0">
        {steps.map((step) => {
          const isCurrent = step.id === currentStep

          return (
            <li
              key={step.id}
              className={`relative mx-[75px] w-[330px] ${isCurrent ? 'current' : ''}`}
              aria-current={isCurrent ? 'step' : undefined}
            >
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="block bg-transparent text-brand-gray text-center pb-[7px] pt-1 font-bold no-underline hover:text-brand-blue"
              >
                <h3 className="m-0 text-[18px] font-bold text-inherit">{step.label}</h3>
              </a>
              {/* Active underline */}
              <span
                className={`absolute bottom-[-2px] left-0 w-full ${
                  isCurrent ? 'h-[3px]' : 'h-0'
                } bg-brand-blue`}
                aria-hidden="true"
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
