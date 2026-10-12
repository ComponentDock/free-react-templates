import { ArrowUp } from 'lucide-react'
import { prefersReducedMotion } from '../lib/prefers-reduced-motion'
import { useScrolled } from '../lib/use-scrolled'

/**
 * The brand-pink circle that appears in the bottom-right corner once the page
 * has scrolled and returns the visitor to the top. It honours the reduce-motion
 * query by jumping instead of scrolling smoothly.
 */
function toTop() {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}

export function BackToTop() {
  const visible = useScrolled(320)

  if (!visible) return null

  return (
    <button
      type="button"
      aria-label="Back to the top of the page"
      onClick={toTop}
      className="fixed right-[31px] bottom-[18px] z-[120] grid h-[50px] w-[50px] place-items-center rounded-full border-2 border-transparent bg-brand text-white shadow-backtop transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  )
}
