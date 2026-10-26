import { MetricBand } from './components/MetricBand'
import { PageFooter } from './components/PageFooter'

/**
 * Statline — one band of four store metrics on a cool grey ground and one line
 * of small print. There is no nav, no filter bar, no CTA and no second band:
 * the reference is a single static section, and the page is it.
 */
export function App() {
  return (
    <div className="min-h-screen bg-ground font-sans text-ink">
      <MetricBand />
      <PageFooter />
    </div>
  )
}
