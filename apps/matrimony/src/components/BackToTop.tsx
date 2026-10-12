import { ArrowUp } from 'lucide-react'
import { prefersReducedMotion } from '../lib/motion'
import { useScrolledPast } from '../lib/use-scrolled'
import { backToTopClass, backToTopIconClass } from '../lib/styles'

/** The point the design's own button appears at: one screen of the page's height. */
export const SHOW_AFTER = 600

/**
 * The scarlet disc the live render pins to the bottom right once the visitor has left the hero.
 * Activating it returns them to the top — smoothly, or instantly when they have asked for reduced
 * motion.
 */
export function BackToTop() {
  const past = useScrolledPast(SHOW_AFTER)
  const instant = prefersReducedMotion()

  if (!past) {
    return null
  }

  return (
    <button
      type="button"
      className={backToTopClass}
      aria-label="Back to top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: instant ? 'instant' : 'smooth' })
      }}
    >
      <ArrowUp aria-hidden="true" className={backToTopIconClass} />
    </button>
  )
}
