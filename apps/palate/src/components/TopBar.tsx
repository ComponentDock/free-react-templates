import { Phone, Send } from 'lucide-react'
import { TOP_BAR_EMAIL, TOP_BAR_HOURS, TOP_BAR_PHONE } from '../data'

/* div.py-1.bg-black.top — thin black strip above the navbar: three centered
   items (phone with Phone icon, email with Send icon, open hours). */
export function TopBar() {
  return (
    <div className="bg-ink px-4 py-1 text-[13px] text-white/80">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-1">
        <span className="inline-flex items-center gap-2">
          <Phone aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
          {TOP_BAR_PHONE}
        </span>
        <span className="inline-flex items-center gap-2">
          <Send aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
          {TOP_BAR_EMAIL}
        </span>
        <span className="inline-flex items-center gap-2">{TOP_BAR_HOURS}</span>
      </div>
    </div>
  )
}
