interface NavigationButtonsProps {
  currentStep: number
  totalSteps: number
  onPrevious: () => void
  onNext: () => void
}

export function NavigationButtons({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
}: NavigationButtonsProps) {
  const isFirst = currentStep === 1
  const isLast = currentStep === totalSteps

  return (
    <div className="flex items-center justify-between">
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirst}
        className="inline-flex h-[42px] w-[96px] items-center justify-center border border-white bg-transparent font-serif text-white transition-colors hover:border-transparent hover:bg-white hover:text-[#333] disabled:invisible disabled:opacity-0 disabled:transition-opacity disabled:duration-1000"
        aria-label="Previous step"
      >
        Previous
      </button>
      {!isLast && (
        <button
          type="button"
          onClick={onNext}
          className="inline-flex h-[42px] w-[96px] items-center justify-center border border-white bg-transparent font-serif text-white transition-colors hover:border-transparent hover:bg-white hover:text-[#333]"
          aria-label="Next step"
        >
          Next
        </button>
      )}
    </div>
  )
}
