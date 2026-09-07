interface SuccessScreenProps {
  onStartOver: () => void
}

export function SuccessScreen({ onStartOver }: SuccessScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-accent">
        <svg className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h2 className="mb-2 text-2xl font-bold text-brand-text">Booking Confirmed!</h2>
      <p className="mb-8 max-w-sm text-gray-500">
        Your appointment has been successfully booked. We&apos;ll send you a confirmation email
        shortly.
      </p>
      <button
        type="button"
        onClick={onStartOver}
        className="rounded-lg bg-brand-primary px-8 py-3 font-medium text-white transition-colors hover:bg-brand-primary-hover"
      >
        Start Over
      </button>
    </div>
  )
}
