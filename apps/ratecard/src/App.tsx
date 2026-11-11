import { PricingFootnote } from './components/PricingFootnote'
import { PricingHead } from './components/PricingHead'
import { PlanCard } from './components/PlanCard'
import { SiteFooter } from './components/SiteFooter'
import { HEADING_ID, PLANS, SECTION_ID } from './data/site'

/**
 * Ratecard — one band and nothing else: a centred head, three plan cards and a
 * one-line footnote on a cool grey ground. No header, no form, no imagery and no
 * JavaScript beyond React itself; the retail footer is the only addition and it
 * sits outside `main`, so the section's measurements stand on their own.
 */
export function App() {
  return (
    <>
      <main className="rc-main">
        <section className="rc-section" id={SECTION_ID} aria-labelledby={HEADING_ID}>
          <PricingHead />

          <div className="rc-grid">
            {PLANS.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>

          <PricingFootnote />
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
