import {
  reasons,
  reasonsCaption,
  reasonsEyebrow,
  reasonsHeading,
  reasonsLead,
} from '../data'

/**
 * Two columns on the `ink-50` ground: a 4:3 photograph placeholder and its
 * caption on the left, four rationale items as a definition list on the right.
 * The `<dl>` is what exposes the pairing — the 2 px brand rule is only the
 * visual echo of it.
 */
export function WhyUs() {
  return (
    <section id="why-us" className="section-band scroll-mt-24 bg-ink-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <figure className="order-last lg:order-first">
            <img
              src="https://picsum.photos/seed/flowcert-1/800/600"
              alt="A certified tester with gauges beside an open valve pit"
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
              {reasonsEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              {reasonsHeading}
            </h2>
            <p className="mt-4 text-lg text-ink-500">{reasonsLead}</p>
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
