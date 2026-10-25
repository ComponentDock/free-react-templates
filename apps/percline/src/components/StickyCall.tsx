import { Phone } from 'lucide-react'
import { EMERGENCY, PHONE_HREF, PHONE_LABEL } from '../content'

/** Fixed call bar below `lg` — one full-width green pill, 73 px tall. */
export function StickyCall() {
  return (
    <div
      data-sticky-call
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white p-3 lg:hidden"
    >
      <a
        href={PHONE_HREF}
        data-phone
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 py-3 text-base font-bold text-white"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        {EMERGENCY.stickyLabel} · {PHONE_LABEL}
      </a>
    </div>
  )
}
