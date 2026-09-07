interface FormActionsProps {
  currentStep: number
  onPrevious: () => void
  onNext: () => void
  onSubmit: () => void
}

export function FormActions({ currentStep, onPrevious, onNext, onSubmit }: FormActionsProps) {
  const isFirst = currentStep === 1
  const isLast = currentStep === 3

  return (
    <div className="flex justify-center gap-4 px-12 pt-4 pb-12">
      {!isFirst && (
        <button
          type="button"
          onClick={onPrevious}
          className="h-[45px] w-[150px] rounded-md bg-brand-button text-base font-semibold text-white transition-colors hover:bg-brand-button-hover"
        >
          Previous
        </button>
      )}
      {!isLast && (
        <button
          type="button"
          onClick={onNext}
          className="h-[45px] w-[150px] rounded-md bg-brand-button text-base font-semibold text-white transition-colors hover:bg-brand-button-hover"
        >
          Next
        </button>
      )}
      {isLast && (
        <button
          type="button"
          onClick={onSubmit}
          className="h-[45px] w-[150px] rounded-md bg-brand-button text-base font-semibold text-white transition-colors hover:bg-brand-button-hover"
        >
          Submit
        </button>
      )}
    </div>
  )
}
