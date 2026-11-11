import { PlanSummary } from './components/PlanSummary'
import { SeatCalculator } from './components/SeatCalculator'
import { SiteFooter } from './components/SiteFooter'
import { HEADING_ID, SECTION_ID } from './content'

/**
 * Prorata — one band on a warm stone ground: a copy column and a calculator
 * card, and nothing else. No header, no second section, no imagery; the branded
 * footer strip is the only addition and it sits outside `main`, so the
 * section's measurements stand on their own.
 */
export function App() {
  return (
    <>
      <main className="pr-main">
        <section className="pr-section" id={SECTION_ID} aria-labelledby={HEADING_ID}>
          <PlanSummary />
          <SeatCalculator />
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
