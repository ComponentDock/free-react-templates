import { ChevronLeft, ChevronRight, Check } from 'lucide-react'
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
  const showBackward = !isFirst

  return (
    <ul className="flex items-center gap-5" role="list">
      {/* Backward — invisible on step 1, keeps layout slot */}
      <li role="menuitem" aria-disabled={isFirst}>
        <button
          type="button"
          onClick={onPrev}
          disabled={isFirst}
          className={cn(
            'flex h-[41px] w-[144px] items-center justify-center gap-1 rounded border-0 text-[15px] font-semibold transition-colors',
            showBackward
              ? 'bg-sand text-input hover:bg-sand-hover'
              : 'cursor-default bg-transparent text-transparent opacity-0',
          )}
          aria-label="Previous step"
          tabIndex={isFirst ? -1 : 0}
        >
          <ChevronLeft className="h-4 w-4" />
          Backward
        </button>
      </li>

      {/* Forward or Submit */}
      <li role="menuitem">
        {isLast ? (
          <button
            type="button"
            className="flex h-[41px] w-[124px] items-center justify-center gap-1 rounded border-0 bg-accent text-[15px] font-semibold text-white transition-colors hover:bg-accent-hover"
            aria-label="Submit"
          >
            Submit
            <Check className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            className={cn(
              'flex h-[41px] w-[135px] items-center justify-center gap-1 rounded border-0 text-[15px] font-semibold transition-colors',
              isFirst
                ? 'bg-sand text-input hover:bg-sand-hover'
                : 'bg-accent text-white hover:bg-accent-hover',
            )}
            aria-label="Next step"
          >
            Forward
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </li>
    </ul>
  )
}
