import { BAND, PLANS } from '../content'
import { PlanCard } from './PlanCard'

/**
 * The whole page: one band whose head sits over a three-track grid, with the
 * violet glow painted by the band itself. Nothing else — no nav, no hero, no
 * billing toggle, no comparison table, no FAQ, no testimonial.
 */
export function PricingBand() {
  return (
    <main className="band">
      <header className="band-head">
        <p className="band-eyebrow">{BAND.eyebrow}</p>
        <h1 className="band-title">{BAND.title}</h1>
        <p className="band-sub">{BAND.sub}</p>
      </header>
      <div className="plan-grid" id={BAND.id}>
        {PLANS.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </main>
  )
}
