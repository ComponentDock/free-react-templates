export function LeftPanel() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[var(--color-brand)] px-8 py-12 text-center text-white md:w-1/2 md:py-16">
      <div className="mb-4">
        <svg
          className="mx-auto h-20 w-20 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      </div>
      <h2 className="mb-3 text-[28px] font-bold text-white">Soccer Ball</h2>
      <p className="mb-6 text-[15px] text-white/90">Already have an account?</p>
      <a
        href="#signin"
        className="inline-block rounded border border-white px-6 py-2 text-[14px] font-medium text-white transition-colors hover:bg-white hover:text-[var(--color-brand)]"
      >
        Sign In
      </a>
    </div>
  )
}
