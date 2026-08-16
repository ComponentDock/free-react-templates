import { stats } from '../data'

/** Partner section: "Partner for your business" heading, paragraph, Learn
 *  More link and three counters (2500+ / 350+ / 20+) in the secondary green. */
export function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="border-b border-body/15 py-25">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2
              id="stats-heading"
              className="font-display text-3xl font-medium leading-tight text-ink lg:text-4xl"
            >
              Partner for your business
            </h2>
            <p className="mt-4 text-base leading-relaxed">
              We understand the complexities of modern markets. Our team combines strategy, data and
              hands-on execution to keep your business moving forward.
            </p>
          </div>
          <a href="#contact" className="link-underline-green w-fit">
            Learn More
          </a>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <p className="font-display text-4xl font-bold text-brand-dark">
                {stat.value}
                <span aria-hidden="true">{stat.suffix}</span>
              </p>
              <p className="mt-3 text-sm uppercase tracking-wide text-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
