import { cn } from '@free-react-templates/ui'

interface Step {
  number: number
  text: string
  icon: 'user' | 'card' | 'receipt'
}

interface StepIndicatorProps {
  steps: readonly Step[]
  currentStep: number
}

const stepIcons: Record<Step['icon'], string> = {
  user: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ) as unknown as string,
  card: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  ) as unknown as string,
  receipt: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M14 8h-4" />
      <path d="M16 12h-6" />
    </svg>
  ) as unknown as string,
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <nav className="mb-8" aria-label="Form steps">
      <ol className="flex items-center justify-center gap-0">
        {steps.map((step, index) => {
          const isActive = step.number === currentStep
          const isDone = step.number < currentStep

          return (
            <li
              key={step.number}
              className="relative flex flex-col items-center"
              aria-current={isActive ? 'step' : undefined}
            >
              {/* Step icon circle */}
              <div
                className={cn(
                  'relative z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full text-white transition-all',
                  isDone && 'bg-accent-400',
                  isActive && 'bg-accent-400 shadow-[0_5px_18px_rgba(0,0,0,0.2)]',
                  !isDone && !isActive && 'bg-gray-300',
                )}
              >
                <span className="sr-only">Step {step.number}</span>
                {stepIcons[step.icon]}
              </div>

              {/* Step number */}
              <span className="mt-2 text-sm text-gray-500">Step {step.number}</span>

              {/* Step text */}
              <span
                className={cn(
                  'text-sm font-semibold',
                  isActive || isDone ? 'text-gray-900' : 'text-gray-600',
                )}
              >
                {step.text}
              </span>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+25px)] top-[25px] h-[6px] w-[100px] bg-gray-200" />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
