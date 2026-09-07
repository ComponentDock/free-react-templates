interface StepFooterProps {
  currentStep: number
  totalSteps: number
  onNext: () => void
  onPrev: () => void
  onFinish: () => void
}

export function StepFooter({ currentStep, totalSteps, onNext, onPrev, onFinish }: StepFooterProps) {
  const isFirst = currentStep === 0
  const isLast = currentStep === totalSteps - 1

  return (
    <div className="flex justify-end gap-[10px] mt-8">
      {!isFirst && (
        <button
          type="button"
          onClick={onPrev}
          className="w-[140px] h-[50px] bg-page text-muted font-button text-[13px] font-bold flex items-center justify-center rounded-[5px] hover:bg-[#dfdfdf] transition-colors"
        >
          Previous
        </button>
      )}
      {isLast ? (
        <button
          type="button"
          onClick={onFinish}
          className="w-[140px] h-[50px] bg-accent text-white font-button text-[13px] font-black flex items-center justify-center rounded-[5px] hover:bg-accent-dark transition-colors"
        >
          Finish
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="w-[140px] h-[50px] bg-accent text-white font-button text-[13px] font-black flex items-center justify-center rounded-[5px] hover:bg-accent-dark transition-colors"
        >
          Next
        </button>
      )}
    </div>
  )
}
