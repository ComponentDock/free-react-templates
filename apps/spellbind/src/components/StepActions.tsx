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
    <ul className="flex items-center justify-between pl-[45px] pr-[55px] max-[768px]:pl-[30px] max-[768px]:pr-[30px]">
      {/* Previous */}
      <li className={isFirst ? 'invisible' : ''}>
        <button
          type="button"
          onClick={onPrev}
          className="flex h-[50px] w-[140px] items-center justify-center bg-btn-prev text-[14px] text-muted hover:bg-line focus-visible:outline-2 focus-visible:outline-accent max-[480px]:w-[100px]"
        >
          Previous
        </button>
      </li>

      {/* Next / Finish */}
      <li>
        {isLast ? (
          <button
            type="button"
            onClick={onFinish}
            className="flex h-[50px] w-[140px] items-center justify-center bg-accent text-[14px] text-white hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-white max-[480px]:w-[100px]"
          >
            Finish
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            className="flex h-[50px] w-[140px] items-center justify-center bg-accent text-[14px] text-white hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-white max-[480px]:w-[100px]"
          >
            Next
          </button>
        )}
      </li>
    </ul>
  )
}
