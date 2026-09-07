import { cn } from '@free-react-templates/ui'

interface ButtonRowProps {
  step: number
  totalSteps: number
  onPrev: () => void
  onNext: () => void
}

export function ButtonRow({ step, totalSteps, onPrev, onNext }: ButtonRowProps) {
  const isFirst = step === 0
  const isLast = step === totalSteps - 1

  return (
    <div className="flex items-center justify-between">
      {/* Back — invisible on step 1, keeps layout slot */}
      <button
        type="button"
        onClick={onPrev}
        disabled={isFirst}
        aria-hidden={isFirst}
        aria-label="Back"
        tabIndex={isFirst ? -1 : 0}
        className={cn(
          'flex h-[51px] w-[118px] items-center justify-center border bg-transparent text-[15px] transition-colors',
          isFirst
            ? 'cursor-default border-transparent text-transparent opacity-0'
            : 'border-ink text-ink hover:border-ink-hover hover:bg-ink-hover hover:text-white',
        )}
      >
        <span className="mr-2">←</span>
        Back
      </button>

      {/* Next / Finish */}
      <button
        type="button"
        onClick={isLast ? undefined : onNext}
        aria-label={isLast ? 'Finish' : 'Next'}
        className="flex h-[51px] w-[118px] items-center justify-center border border-ink bg-ink text-[15px] text-white transition-colors hover:bg-ink-hover"
      >
        {isLast ? 'Finish' : 'Next'}
        <span className="ml-2">→</span>
      </button>
    </div>
  )
}
