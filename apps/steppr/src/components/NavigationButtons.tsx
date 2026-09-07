interface NavigationButtonsProps {
  currentStep: number
  onPrevious: () => void
  onNext: () => void
}

export function NavigationButtons({ currentStep, onPrevious, onNext }: NavigationButtonsProps) {
  return (
    <div className="mt-4 flex items-center justify-between">
      <div>
        {currentStep > 1 && (
          <button
            type="button"
            onClick={onPrevious}
            className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-700"
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
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-accent-400 text-white shadow-[0_3px_15px_rgba(0,0,0,0.19)] transition-colors hover:bg-accent-500"
            aria-label="Next step"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
        {currentStep === 3 && (
          <button
            type="button"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-accent-400 text-white shadow-[0_3px_15px_rgba(0,0,0,0.19)] transition-colors hover:bg-accent-500"
            aria-label="Submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
