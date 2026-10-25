import { SAMPLE_FIGURE, WHY_US } from '../data'
import { FlowPanel } from './FlowPanel'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/**
 * The four questions the sizing decision actually turns on, as a definition
 * list with a 2 px brand rule per row, beside the flow panel. Below `lg` the
 * figure moves after the copy — that is the reference's order, not a mistake.
 */
export function WhyUs() {
  return (
    <section id="why-us" className="section bg-ink-50" aria-labelledby="why-us-title">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <figure className="order-last lg:order-first">
            <FlowPanel />
            <figcaption className="mt-3 text-sm text-ink-400">{SAMPLE_FIGURE}</figcaption>
          </figure>

          <div>
            <SectionHead
              eyebrow="How we work"
              title="The sizing is the product"
              lede="Anybody can carry a tank up your stairs. What you are paying for is that it is the right one."
            />

            <Reveal>
              <dl className="mt-8 space-y-6">
                {WHY_US.map((row) => (
                  <div key={row.term} className="border-l-2 border-primary-600 pl-5">
                    <dt className="text-base font-bold text-ink-800">{row.term}</dt>
                    <dd className="mt-1 text-ink-500">{row.detail}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
