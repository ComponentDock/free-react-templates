interface FormActionsProps {
  isFirstStep: boolean
  isLastStep: boolean
  onBack: () => void
  onNext: () => void
}

export function FormActions({ isFirstStep, isLastStep, onBack, onNext }: FormActionsProps) {
  return (
    <div className="flex justify-between px-10 pb-10 pt-2">
      {!isFirstStep && (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center justify-center rounded h-[42px] w-[120px] bg-brand-indigo text-white font-normal text-base hover:bg-brand-indigo-dark transition-colors duration-200 cursor-pointer"
        >
          Back
        </button>
      )}
      <button
        type="button"
        onClick={onNext}
        className="inline-flex items-center justify-center rounded h-[42px] w-[120px] bg-brand-indigo text-white font-normal text-base hover:bg-brand-indigo-dark transition-colors duration-200 cursor-pointer ml-auto"
      >
        {isLastStep ? 'Submit' : 'Next'}
      </button>
    </div>
  )
}
