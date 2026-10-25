import { Phone } from 'lucide-react'
import { BRAND } from '../data'

/**
 * The phone-only call bar. Hidden from `lg` up, where the header pill and the
 * emergency band are already in reach; the cookie strip paints over it until it
 * is dismissed, which is the reference's own stacking order.
 */
export function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white p-3 lg:hidden">
      <a
        href={BRAND.phoneHref}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 py-3 text-base font-bold text-white"
      >
        <Phone aria-hidden="true" className="h-4 w-4" />
        No hot water, or a leaking tank? · {BRAND.phone}
      </a>
    </div>
  )
}
