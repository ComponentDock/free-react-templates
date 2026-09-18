import { Phone, Mail, Clock } from 'lucide-react'

export function TopBar() {
  return (
    <aside className="bg-navy text-white text-sm py-2" aria-label="Contact information">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Phone size={14} />
            +880166 253 232
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} />
            info@domain.com
          </span>
        </div>
        <span className="flex items-center gap-2">
          <Clock size={14} />
          Mon - Fri: 9:00 - 19:00 / Closed on Weekends
        </span>
      </div>
    </aside>
  )
}
