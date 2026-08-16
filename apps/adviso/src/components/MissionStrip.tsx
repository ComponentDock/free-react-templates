/** Light mission strip directly below the hero: 12px green top border,
 *  "Our Mission" label, headline, supporting paragraph and a green
 *  Learn More link. */
export function MissionStrip() {
  return (
    <section
      aria-labelledby="mission-heading"
      className="border-t-[12px] border-brand-dark bg-mist"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div className="max-w-2xl">
          <span className="text-sm uppercase tracking-wide text-body">Our Mission</span>
          <h3
            id="mission-heading"
            className="mt-3 font-display text-3xl font-medium leading-tight text-ink lg:text-4xl"
          >
            The Foremost &amp; Premier Source For Everything Business.
          </h3>
          <p className="mt-4 text-base leading-relaxed">
            We exist to make world-class business advice accessible — combining strategy, data and
            execution support under one roof.
          </p>
        </div>
        <div>
          <a href="#about" className="link-underline-green">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
