interface FormActionsProps {
  isFirstStep: boolean
  isLastStep: boolean
  onPrevious: () => void
  onNext: () => void
}

export function FormActions({ isFirstStep, isLastStep, onPrevious, onNext }: FormActionsProps) {
  return (
    <div className="absolute bottom-10 right-0 w-full flex justify-center">
      <div className="flex gap-2.5">
        {!isFirstStep && (
          <button
            type="button"
            onClick={onPrevious}
            className="w-[120px] h-10 text-white font-medium text-[13px] border-none cursor-pointer rounded-[5px] transition-colors"
            style={{
              background: 'linear-gradient(0deg, #a1c4fd, #884d80, #2b5876, #4e4376)',
            }}
          >
            Previous
          </button>
        )}
        <button
          type="button"
          onClick={onNext}
          className="w-[120px] h-10 text-white font-medium text-[13px] border-none cursor-pointer rounded-[5px] transition-colors hover:bg-brand-indigo"
          style={{
            background: 'linear-gradient(0deg, #a1c4fd, #884d80, #2b5876, #4e4376)',
          }}
        >
          {isLastStep ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  )
}
