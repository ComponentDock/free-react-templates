export function Estimate() {
  return (
    <section aria-label="Project estimate" className="bg-brand py-20 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold uppercase text-ink lg:text-4xl">
            Get to Know Project Estimate?
          </h2>
          <p className="mt-4 leading-relaxed text-ink/70">
            There is a moment in the life of any aspiring builder when it is time to plan that first
            project — exciting to think about setting up your own space, whether on the deck or in
            the city.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-lg bg-ink px-10 py-4 text-sm font-medium uppercase tracking-[2px] text-white transition-colors hover:bg-ink/80"
        >
          Get Estimate
        </a>
      </div>
    </section>
  )
}
