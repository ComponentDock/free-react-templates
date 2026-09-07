interface FormActionsProps {
  currentStep: number
  totalSteps: number
  onPrevious: () => void
  onNext: () => void
  onSubmit: () => void
}

export function FormActions({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onSubmit,
}: FormActionsProps) {
  const isFirst = currentStep === 1
  const isLast = currentStep === totalSteps

  return (
    <div className="flex items-center justify-between px-[30px] py-[30px]">
      {!isFirst && (
        <button
          type="button"
          onClick={onPrevious}
          className="rounded-[22.5px] bg-brand-btn-back px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-btn-back-hover"
        >
          Back
        </button>
      )}
      {isFirst && <div />}
      {isLast ? (
        <button
          type="button"
          onClick={onSubmit}
          className="rounded-[22.5px] bg-brand-green px-6 py-2 text-sm font-medium text-white shadow-[0px_3px_14px_rgba(0,0,0,0.15)] transition-colors hover:bg-brand-green-hover"
        >
          Submit
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="rounded-[22.5px] bg-brand-green px-6 py-2 text-sm font-medium text-white shadow-[0px_3px_14px_rgba(0,0,0,0.15)] transition-colors hover:bg-brand-green-hover"
        >
          Next
        </button>
      )}
    </div>
  )
}
