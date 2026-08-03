export function ErrorSection() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-white dark:bg-gray-950">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[276px] font-black leading-none text-[#ececec] max-[480px]:text-[162px] dark:text-gray-800"
      >
        404
      </span>

      <div className="relative mx-auto max-w-[920px] px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-[26px] font-black uppercase text-black sm:text-[46px] dark:text-white">
          We are sorry, Page not found!
        </h1>
        <p className="font-display mx-auto mt-6 max-w-xl text-base font-normal uppercase text-black dark:text-gray-200">
          The page you are looking for might have been removed had its name changed or is
          temporarily unavailable.
        </p>
        <div className="mt-10">
          <a
            href="/"
            className="inline-block rounded-full border-2 border-transparent bg-brand px-[38px] py-4 text-sm font-normal text-white transition-colors hover:border-brand hover:bg-white hover:text-brand dark:hover:bg-gray-950"
          >
            Back To Homepage
          </a>
        </div>
      </div>
    </section>
  )
}
