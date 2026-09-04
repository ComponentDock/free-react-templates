interface SuccessScreenProps {
  onReset: () => void
}

export function SuccessScreen({ onReset }: SuccessScreenProps) {
  return (
    <div className="text-center py-10">
      <div className="bg-brand-sky rounded-md px-8 py-2.5 -mx-8 mb-6">
        <h3 className="text-white text-xl font-bold m-0">Complete!</h3>
      </div>

      <div className="mb-8">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-gray-800 text-lg font-bold mb-2">Registration Complete</h4>
        <p className="text-gray-600 text-sm">
          Your account has been successfully created. Thank you for completing the registration
          process.
        </p>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center justify-center rounded px-5 py-2.5 bg-brand-indigo text-white font-normal text-base hover:bg-brand-indigo-dark transition-colors duration-200"
      >
        Start Over
      </button>
    </div>
  )
}
