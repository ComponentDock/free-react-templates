interface TimelineProps {
  steps: string[]
  currentStep: number
  onTabClick: (index: number) => void
}

export function Timeline({ steps, currentStep, onTabClick }: TimelineProps) {
  return (
    <nav
      role="tablist"
      aria-label="Wizard steps"
      className="relative flex w-full flex-col py-[60px] pl-[40px] lg:w-[310px]"
    >
      {/* Vertical connector line behind the circles */}
      <div
        className="absolute bottom-0 left-[64px] top-0 z-[9] w-[2px] bg-line"
        aria-hidden="true"
      />

      {steps.map((step, index) => {
        const isCurrent = index === currentStep
        const isFinished = index < currentStep

        return (
          <button
            key={step}
            role="tab"
            aria-selected={isCurrent}
            aria-controls={`panel-${index}`}
            id={`tab-${index}`}
            onClick={() => onTabClick(index)}
            className="relative z-[99] mb-[40px] flex items-center text-left focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            <span
              className={`mr-[15px] flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-full border-[5px] border-container text-[16px] font-bold dark:border-container-dark ${
                isCurrent
                  ? 'bg-accent text-white'
                  : isFinished
                    ? 'bg-accent text-white'
                    : 'bg-line text-muted'
              }`}
            >
              {index + 1}
            </span>
            <span
              className={`text-[14px] font-bold ${
                isCurrent ? 'text-accent' : isFinished ? 'text-accent' : 'text-muted'
              }`}
            >
              {step}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
