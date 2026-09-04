import type { StepConfig } from '../types'
import { Check } from 'lucide-react'

interface StepIndicatorProps {
  steps: StepConfig[]
  currentStep: number
  completedSteps: Set<number>
}

export function StepIndicator({ steps, currentStep, completedSteps }: StepIndicatorProps) {
  return (
    <nav className="w-full lg:w-[260px] flex-shrink-0" aria-label="Wizard steps">
      <ul className="list-none p-0 m-0">
        {steps.map((step) => {
          const isCurrent = step.id === currentStep
          const isDone = completedSteps.has(step.id)
          const isActive = isCurrent || isDone

          return (
            <li
              key={step.id}
              className={`relative flex items-center p-4 pr-8 transition-colors duration-200 ${
                step.id === 1 ? 'mt-9' : ''
              } ${isActive ? 'bg-brand-sky text-white' : 'bg-gray-400 text-white'}`}
              aria-current={isCurrent ? 'step' : undefined}
              style={{
                marginRight: '50px',
                marginLeft: '40px',
                marginBottom: '15px',
              }}
            >
              {/* Arrow connector */}
              <span
                className="absolute top-0"
                style={{
                  left: '100%',
                  width: 0,
                  height: 0,
                  borderTop: '30px solid transparent',
                  borderBottom: '30px solid transparent',
                  borderLeft: `45px solid ${isActive ? '#33a7d7' : '#b2b2b2'}`,
                }}
                aria-hidden="true"
              />

              {/* Step number or check icon */}
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold flex-shrink-0"
                aria-hidden="true"
              >
                {isDone ? <Check className="w-6 h-6" /> : <span>{step.id}</span>}
              </div>

              {/* Vertical separator line */}
              <span
                className="absolute bg-white/30"
                style={{
                  left: '100%',
                  top: 0,
                  width: '1px',
                  height: '60px',
                }}
                aria-hidden="true"
              />

              {/* Step text */}
              <div className="ml-3">
                <span className="block text-base font-semibold">{step.label}</span>
                <span className="block text-sm italic text-white/70">{step.sublabel}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
