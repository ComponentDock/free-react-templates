interface FormActionsProps {
  isFirstStep: boolean
  isLastStep: boolean
  onPrevious: () => void
  onNext: () => void
}

export function FormActions({ isFirstStep, isLastStep, onPrevious, onNext }: FormActionsProps) {
  return (
    <div className="absolute bottom-[31px] right-0 w-full flex justify-between">
      <div className="pl-[80px]">
        {!isFirstStep && (
          <button
            type="button"
            onClick={onPrevious}
            className="w-[140px] h-[50px] bg-brand-secondary-bg text-brand-gray font-medium uppercase text-[15px] border-none cursor-pointer transition-colors hover:bg-brand-secondary-hover"
          >
            Previous
          </button>
        )}
      </div>
      <div className="pr-[70px]">
        <button
          type="button"
          onClick={onNext}
          className="w-[140px] h-[50px] bg-brand-blue text-white font-medium uppercase text-[15px] border-none cursor-pointer transition-colors hover:bg-brand-blue-dark"
        >
          {isLastStep ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  )
}
