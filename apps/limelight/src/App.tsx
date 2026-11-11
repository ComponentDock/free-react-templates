import { PlanCard } from './components/PlanCard'
import { PricingHead } from './components/PricingHead'
import { SiteFooter } from './components/SiteFooter'
import { FOOTNOTE, HEADING_ID, PLANS, SECTION_ID } from './content'

/**
 * Limelight — one band on a neon ground and nothing else: a centred head, three
 * plan cards and a one-line closing note. There is no header, no form, no
 * imagery and no JavaScript beyond React itself; the retail footer is the only
 * addition and it sits outside `main`, so the section's measurements stand on
 * their own.
 */
export function App() {
  return (
    <>
      <main className="lm-main">
        <section className="lm-section" id={SECTION_ID} aria-labelledby={HEADING_ID}>
          <PricingHead />

          <div className="lm-grid">
            {PLANS.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>

          <p className="lm-foot">{FOOTNOTE}</p>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
