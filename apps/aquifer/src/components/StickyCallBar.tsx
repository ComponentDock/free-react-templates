import { Phone } from 'lucide-react'
import { CONTACT } from '../data'

/**
 * The phone-only fixed bar. `z-40`, so the cookie strip (`z-50`) paints over it
 * until it is dismissed — that is the reference's stacking order, and getting
 * it wrong makes the bar unclickable for the first 1.5 s.
 */
export function StickyCallBar() {
  return (
    <div
      data-testid="sticky-call"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white p-3 lg:hidden"
    >
      <a
        href={CONTACT.phoneHref}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 py-3 text-base font-bold text-white"
      >
        <Phone aria-hidden="true" className="h-4 w-4" />
        Water running with everything off? · {CONTACT.phoneLabel}
      </a>
    </div>
  )
}
