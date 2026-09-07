export function SuccessState() {
  return (
    <div className="flex flex-col items-center gap-6 py-12 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold">
        <svg
          className="h-8 w-8 text-navy"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="font-heading text-3xl font-bold text-white">Booking Confirmed!</h2>
      <p className="max-w-sm text-white/70">
        Your reservation has been submitted successfully. We will send you a confirmation email
        shortly.
      </p>
    </div>
  )
}
