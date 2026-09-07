import { cn } from '@free-react-templates/ui'

interface StepDotsProps {
  current: number
  total: number
  onDotClick: (index: number) => void
}

export function StepDots({ current, total, onDotClick }: StepDotsProps) {
  return (
    <ul role="tablist" aria-label="Wizard steps" className="flex items-center">
      {Array.from({ length: total }, (_, i) => {
        const isActive = i <= current
        return (
          <li key={i} role="presentation" className="flex items-center">
            {i > 0 && (
              <span
                className={cn(
                  'h-[2px] w-[58px] transition-colors duration-500',
                  isActive ? 'bg-accent' : 'bg-sand',
                )}
                aria-hidden="true"
              />
            )}
            <button
              role="tab"
              aria-selected={i === current}
              aria-controls={`step-panel-${i}`}
              onClick={() => onDotClick(i)}
              className={cn(
                'h-3 w-3 rounded-full border-0 p-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                isActive ? 'bg-accent' : 'bg-sand',
              )}
              aria-label={`Go to step ${i + 1}`}
            />
          </li>
        )
      })}
    </ul>
  )
}
