export function Impress() {
  return (
    <section aria-label="Impress band" className="bg-primary-600 py-16 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Got Impressed to our features?
        </h2>
        <a
          href="#pricing"
          className="shrink-0 inline-flex items-center justify-center rounded-full bg-white px-10 py-3.5 font-semibold text-primary-600 transition-colors hover:bg-gray-100"
        >
          Start Free Trial
        </a>
      </div>
    </section>
  )
}
