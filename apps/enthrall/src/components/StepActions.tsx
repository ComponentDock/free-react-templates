import { cn } from '@free-react-templates/ui'

interface StepActionsProps {
  currentStep: number
  totalSteps: number
  onPrev: () => void
  onNext: () => void
  onFinish: () => void
}

export function StepActions({
  currentStep,
  totalSteps,
  onPrev,
  onNext,
  onFinish,
}: StepActionsProps) {
  const isFirst = currentStep === 0
  const isLast = currentStep === totalSteps - 1

  return (
    <div className="flex items-center justify-between">
      {/* Previous — hidden on step 1 (source: .disabled { display: none }) */}
      {!isFirst && (
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous"
          className={cn(
            'h-[50px] w-[140px] rounded-[5px] border border-line bg-transparent text-[14px] font-medium text-muted transition-colors hover:bg-gray-100',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
          )}
        >
          Previous
        </button>
      )}
      {isFirst && <div />}

      {/* Next / Finish */}
      <button
        type="button"
        onClick={isLast ? onFinish : onNext}
        aria-label={isLast ? 'Finish' : 'Next'}
        className={cn(
          'h-[50px] w-[140px] rounded-[5px] bg-accent text-[14px] font-medium text-white transition-colors hover:bg-accent-dark',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
        )}
      >
        {isLast ? 'Finish' : 'Next'}
      </button>
    </div>
  )
}
