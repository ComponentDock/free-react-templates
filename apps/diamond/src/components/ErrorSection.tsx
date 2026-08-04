export function ErrorSection() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-4">
      <div className="w-full max-w-[460px] py-24 text-center">
        <div className="relative mx-auto mb-12 h-[180px] w-[180px]">
          <div
            role="img"
            aria-label="Amber diamond badge"
            className="absolute inset-0 rotate-45 rounded-[5px] border-4 border-dashed border-black bg-brand shadow-[inset_0_0_0_5px_rgba(0,0,0,0.1)]"
          />
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[90px] font-bold leading-10 text-black">
            404
          </h1>
        </div>
        <h2 className="text-[33px] font-bold uppercase tracking-[7px] text-black">
          Page not found
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-black">
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable.
        </p>
        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-smoke px-6 py-2.5 text-sm font-bold uppercase text-white transition-colors hover:bg-charcoal"
        >
          Go to homepage
        </a>
      </div>
    </section>
  )
}
