export function ErrorSection() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-24">
      <div className="mx-auto flex w-full max-w-[710px] flex-col items-center gap-10 text-center sm:flex-row sm:items-center sm:gap-12 sm:text-left">
        <div
          role="img"
          aria-label="Sad face emoticon"
          className="flex h-[150px] w-[150px] shrink-0 items-center justify-center text-brand"
        >
          <span
            aria-hidden="true"
            className="font-display text-[150px] font-black leading-none tracking-[15.5px]"
          >
            :(
          </span>
        </div>

        <div className="max-w-md">
          <h1 className="font-sans text-[28px] font-bold uppercase tracking-[2.5px] text-ink dark:text-white">
            404 - Page not found
          </h1>
          <p className="mt-4 font-sans text-sm leading-relaxed text-body dark:text-gray-400">
            The page you are looking for might have been removed had its name changed or is
            temporarily unavailable.
          </p>

          <a
            href="/"
            className="mt-7 inline-block rounded-full bg-white px-8 py-3.5 font-sans text-sm font-bold uppercase tracking-wide text-ink shadow-[0_4px_15px_-5px_rgba(0,0,0,0.3)] transition-colors hover:bg-brand hover:text-white dark:bg-gray-900 dark:text-white dark:hover:bg-brand"
          >
            Home page
          </a>
        </div>
      </div>
    </section>
  )
}
