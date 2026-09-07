import { cn } from '@free-react-templates/ui'

interface StepTabsProps {
  steps: readonly string[]
  currentStep: number
  onTabClick: (index: number) => void
}

export function StepTabs({ steps, currentStep, onTabClick }: StepTabsProps) {
  return (
    <div role="tablist" className="flex border-b border-line">
      {steps.map((name, index) => {
        const isCurrent = index === currentStep
        return (
          <button
            key={name}
            role="tab"
            aria-selected={isCurrent}
            aria-controls={`step-panel-${index}`}
            id={`tab-${index}`}
            onClick={() => onTabClick(index)}
            className={cn(
              'flex-1 py-2 text-center text-[18px] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
              isCurrent
                ? 'bg-accent text-white'
                : 'bg-tab-idle text-muted hover:bg-accent hover:text-white',
            )}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}
