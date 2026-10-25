import { TIERS } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/**
 * The page's spine: three tiers on the near-black ground, each with a
 * monospaced SLA, the condition that qualifies it and the remedy if it is
 * missed. Only the first card's border is brighter — that single difference is
 * the design's whole "featured" signal.
 */
export function ResponseTiers() {
  return (
    <section id="response" className="on-ink section scroll-mt-24 bg-ink-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHead
          eyebrow="Response"
          title="Three tiers, and what happens when we miss one"
          lede="Written into the agreement rather than into the brochure. The last row is the one worth comparing against anybody else's proposal, because almost nobody publishes it."
          tone="dark"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier, index) => (
            <Reveal key={tier.name} delay={100 * (index + 1)} className="flex">
              <article
                className={
                  tier.featured
                    ? 'flex min-w-0 flex-1 flex-col rounded-2xl border border-primary-400 bg-white/[0.07] p-6'
                    : 'flex min-w-0 flex-1 flex-col rounded-2xl border border-white/10 bg-white/5 p-6'
                }
              >
                <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                <p className="mt-4 font-mono text-3xl font-bold text-primary-300 tabular-nums">
                  {tier.sla}
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-white/60 uppercase">
                  {tier.window}
                </p>
                <dl className="mt-6 flex-1 space-y-4 border-t border-white/10 pt-5 text-sm">
                  <div>
                    <dt className="text-xs font-bold tracking-wide text-white/60 uppercase">
                      What qualifies
                    </dt>
                    <dd className="mt-1 text-white/80">{tier.qualifies}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold tracking-wide text-white/60 uppercase">
                      If we miss it
                    </dt>
                    <dd className="mt-1 text-white/80">{tier.remedy}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm text-white/60">
            Sample tiers and remedies for demonstration. Replace with your own before launch, and
            have the remedy wording reviewed before it goes into a contract.
          </p>
          <a href="#agreement" className="btn btn-primary shrink-0">
            See what an agreement covers
          </a>
        </div>
      </div>
    </section>
  )
}
