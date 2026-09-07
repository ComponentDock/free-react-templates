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
  return (
    <div className="flex justify-center gap-4">
      {currentStep > 1 && (
        <button
          type="button"
          onClick={onPrevious}
          className="h-[50px] w-[160px] rounded-[25px] border-2 border-brand bg-transparent text-[15px] font-semibold text-brand transition-colors hover:bg-brand/10"
        >
          Back
        </button>
      )}
      <button
        type="button"
        onClick={onNext}
        className="h-[50px] w-[160px] rounded-[25px] bg-brand text-[15px] font-semibold text-white transition-colors hover:bg-brand-hover"
      >
        {currentStep === totalSteps ? 'Submit' : 'Next'}
      </button>
    </div>
  )
}
