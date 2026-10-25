import { WHY_US } from '../content'
import { FieldPanel } from './FieldPanel'
import { Reveal } from './Reveal'

/**
 * Why-us: the redrawn panel first on `lg`, then the four causes. The heading
 * says three and four rows follow — that is the reference's own wording and it
 * is kept deliberately.
 */
export function WhyUs() {
  return (
    <section id="why-us" className="section bg-ink-50">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="order-last lg:order-first">
          <figure>
            <FieldPanel />
            <figcaption className="mt-3 text-sm text-ink-400">{WHY_US.caption}</figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <p className="text-sm font-bold uppercase tracking-wide text-primary-700">
            {WHY_US.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            {WHY_US.heading}
          </h2>
          <p className="mt-4 text-lg text-ink-500">{WHY_US.lede}</p>
          <dl className="mt-8 space-y-6">
            {WHY_US.rows.map((row) => (
              <div key={row.term} className="border-l-2 border-primary-600 pl-5">
                <dt className="text-base font-bold text-ink-800">{row.term}</dt>
                <dd className="mt-1 text-ink-500">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
