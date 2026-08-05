export function Opportunity() {
  return (
    <section
      id="opportunity"
      aria-label="Opportunities"
      className="bg-white py-16 sm:py-24 dark:bg-gray-950"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="lg:order-2">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            With efficiency to unlock more opportunities
          </h2>
          <p className="mt-5 font-accent text-xl leading-relaxed text-body dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-primary-600 bg-transparent px-11 py-3 font-accent text-base font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-primary-600 hover:text-white dark:text-white"
          >
            Learn More
          </a>
        </div>
        <img
          src="https://picsum.photos/seed/ecobit-opportunity/640/480"
          alt="Ecobit analytics showing unlocked opportunities"
          className="w-full rounded-xl shadow-lg lg:order-1"
        />
      </div>
    </section>
  )
}
