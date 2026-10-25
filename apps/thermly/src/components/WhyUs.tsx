import { reasons, reasonsCaption } from '../data'

/**
 * Two columns: the technician photograph (a deterministic placeholder) and the
 * four reasons a fixed window beats "we will call you". The reasons are a
 * definition list with a brand rule, not cards.
 */
export function WhyUs() {
  return (
    <section id="why-us" className="section-band scroll-mt-24 bg-ink-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <figure className="order-last lg:order-first">
            <img
              src="https://picsum.photos/seed/thermly-1/800/600"
              alt="A technician working on site in a hard hat and gloves"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-3 text-sm text-ink-400">{reasonsCaption}</figcaption>
          </figure>

          <div>
            <p className="text-sm font-bold tracking-wide text-primary-700 uppercase">
              Why the window matters
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              The appointment is the product
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Everyone in this trade fixes furnaces. Very few of them turn up when they said they
              would.
            </p>
            <dl className="mt-8 space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="border-l-2 border-primary-600 pl-5">
                  <dt className="text-base font-bold text-ink-800">{reason.title}</dt>
                  <dd className="mt-1 text-ink-500">{reason.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
