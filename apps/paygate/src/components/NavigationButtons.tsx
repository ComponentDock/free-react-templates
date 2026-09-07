interface NavigationButtonsProps {
  currentStep: number
  onPrevious: () => void
  onNext: () => void
  onSubmit: () => void
}

export function NavigationButtons({
  currentStep,
  onPrevious,
  onNext,
  onSubmit,
}: NavigationButtonsProps) {
  return (
    <div className="mt-6 flex items-center justify-between">
      <div>
        {currentStep > 1 && (
          <button
            type="button"
            onClick={onPrevious}
            className="rounded px-4 py-2 text-sm font-medium transition-colors"
            style={{ color: '#999' }}
          >
            ← Previous
          </button>
        )}
      </div>
      <div>
        {currentStep < 3 && (
          <button
            type="button"
            onClick={onNext}
            className="rounded px-6 py-2 text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: '#1a73e8', borderRadius: '4px' }}
          >
            Next
          </button>
        )}
        {currentStep === 3 && (
          <button
            type="button"
            onClick={onSubmit}
            className="rounded px-6 py-2 text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: '#1a73e8', borderRadius: '4px' }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  )
}
