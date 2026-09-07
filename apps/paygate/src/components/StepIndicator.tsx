import { cn } from '@free-react-templates/ui'

interface Step {
  number: number
  text: string
}

interface StepIndicatorProps {
  steps: readonly Step[]
  currentStep: number
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <nav className="mb-8" aria-label="Form steps">
      <ol className="flex items-center justify-center">
        {steps.map((step, index) => {
          const isActive = step.number === currentStep
          const isDone = step.number < currentStep

          return (
            <li
              key={step.number}
              className="relative flex flex-col items-center"
              aria-current={isActive ? 'step' : undefined}
            >
              <div
                className={cn(
                  'relative z-10 flex h-[48px] w-[48px] items-center justify-center rounded-full text-sm font-bold transition-all',
                  isDone && 'bg-[#1a73e8] text-white',
                  isActive && 'bg-[#1a73e8] text-white shadow-[0_2px_8px_rgba(26,115,232,0.4)]',
                  !isDone && !isActive && 'bg-[#ccc] text-white',
                )}
              >
                {isDone ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  <span>{step.number}</span>
                )}
              </div>
              <span className="mt-2 text-xs" style={{ color: '#999' }}>
                Step {step.number}
              </span>
              <span
                className="text-xs font-medium"
                style={{ color: isActive || isDone ? '#26282b' : '#999' }}
              >
                {step.text}
              </span>

              {index < steps.length - 1 && (
                <div
                  className="absolute left-[calc(50%+24px)] top-[24px] h-[3px] w-[80px]"
                  style={{ backgroundColor: isDone ? '#1a73e8' : '#ccc' }}
                />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
