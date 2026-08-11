import { ArrowUp } from 'lucide-react'
import { backToTopLabel } from '../data'

/* Floating back-to-top button (repo standard): scrolls smoothly to the top
   of the page. */
export function BackToTop() {
  return (
    <button
      type="button"
      aria-label={backToTopLabel}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-6 bottom-6 z-[800] flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-colors hover:bg-brand/90"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
