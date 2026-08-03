export function ErrorSection() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-24">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-10 text-center sm:flex-row sm:items-center sm:gap-12 sm:text-left">
        <div className="relative h-[110px] w-[110px] shrink-0 sm:h-[140px] sm:w-[140px]">
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[264px] w-[264px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-circle dark:bg-gray-800 sm:h-[336px] sm:w-[336px]"
          />
          <svg
            role="img"
            aria-label="Confused face emoticon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative h-full w-full text-ink dark:text-white"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9.5h.01" />
            <path d="M15 9.5h.01" />
            <path d="M8 15.5c1.2 1.1 2.6 1.6 4 1.6s2.8-.5 4-1.6" />
          </svg>
        </div>

        <div className="max-w-md">
          <h1 className="text-[42px] font-bold uppercase leading-none tracking-[2.5px] text-ink dark:text-white sm:text-[65px]">
            404
          </h1>
          <h2 className="mt-2 text-lg uppercase text-ink dark:text-white sm:text-[21px]">
            Oops! Page Not Be Found
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-body dark:text-gray-400">
            Sorry but the page you are looking for does not exist, have been removed. name changed
            or is temporarily unavailable
          </p>

          <a
            href="/"
            className="mt-7 inline-block rounded-full bg-brand px-8 py-3.5 font-bold uppercase tracking-wide text-white transition-colors hover:bg-ink dark:hover:bg-white dark:hover:text-ink"
          >
            Back to homepage
          </a>
        </div>
      </div>
    </section>
  )
}
