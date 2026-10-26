import { PageFooter } from './components/PageFooter'
import { TestimonialBand } from './components/TestimonialBand'

/**
 * Plaudit — one testimonial band on a warm paper ground and one line of small
 * print. There is no nav, no hero and no second band: the reference is a single
 * section with nothing to click, and the page is it.
 */
export function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <TestimonialBand />
      <PageFooter />
    </div>
  )
}
