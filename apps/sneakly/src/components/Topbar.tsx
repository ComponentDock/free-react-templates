import { Phone, Send } from 'lucide-react'
import { topbarItems, topbarPromo } from '../data'

const icons = {
  phone: Phone,
  email: Send,
} as const

/** Black top strip above the navbar: phone + email on the left, the
 *  delivery/returns promo right-aligned — 11px uppercase white text with
 *  1px letter-spacing (reference .topper). */
export function Topbar() {
  return (
    <div
      data-testid="topbar"
      className="bg-ink px-4 py-1.5 text-[11px] uppercase tracking-[1px] text-white"
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-6 gap-y-1 md:justify-between">
        <div className="flex items-center gap-6">
          {topbarItems.map((item) => {
            const Icon = icons[item.id]
            return (
              <span key={item.id} className="flex items-center gap-2">
                <Icon className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                {item.text}
              </span>
            )
          })}
        </div>
        <span className="text-center md:text-right">{topbarPromo}</span>
      </div>
    </div>
  )
}
