import { BillingSwitch } from './components/BillingSwitch'
import { PlanCard } from './components/PlanCard'
import { PricingHead } from './components/PricingHead'
import { SiteFooter } from './components/SiteFooter'
import { HEADING_ID, PLANS } from './content'
import { readFigure } from './lib/ease'
import { useBilling } from './use-billing'

/**
 * Tallyboard — one band on a warm cream ground: a centred head, a billing
 * switch that counts the four prices up, four equal plan cards with the third
 * solid green, and the house footer strip. No header, no form, no imagery.
 */
export function App() {
  const { annual, figures, status, toggle } = useBilling()

  return (
    <>
      <main className="tb-main">
        <section className="tb-section" aria-labelledby={HEADING_ID}>
          <PricingHead />
          <BillingSwitch annual={annual} onToggle={toggle} status={status} />

          <div className="tb-grid">
            {PLANS.map((plan, index) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                figure={readFigure(figures, index, plan.monthly)}
                annual={annual}
              />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
