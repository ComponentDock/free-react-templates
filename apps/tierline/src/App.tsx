import { PageFooter } from './components/PageFooter'
import { PricingBand } from './components/PricingBand'

/**
 * Tierline — a single pricing band on a near-black ground, with the glow on the
 * band, three plans in a fixed three-track grid and the middle plan inverted to
 * white. There is no second band: the design is a section, and the page is it.
 */
export function App() {
  return (
    <div className="min-h-screen bg-night font-sans text-plate-ink">
      <PricingBand />
      <PageFooter />
    </div>
  )
}
