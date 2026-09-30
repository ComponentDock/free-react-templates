import { ArrowUp } from 'lucide-react'

/** Fixed orange circle (bottom-right) that jumps back to the top of the
 *  page — the scroll-to-top control from the source design. */
export function ScrollToTop() {
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo(0, 0)}
      className="fixed bottom-[18px] right-[31px] z-50 inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand text-white shadow-[0_0_10px_3px_rgba(108,98,98,0.2)] transition-colors hover:bg-brand-mid"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
