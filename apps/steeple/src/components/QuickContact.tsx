import { Clock, MapPin, MessageCircle, type LucideIcon } from 'lucide-react'
import { QUICK_CONTACT } from '../data'

const ICONS = {
  'map-pin': MapPin,
  clock: Clock,
  'message-circle': MessageCircle,
} as const satisfies Record<string, LucideIcon>

export function QuickContact() {
  return (
    <section aria-label="Quick contact" className="bg-primary-600 py-10 md:py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 text-center md:grid-cols-3 md:text-left">
        {QUICK_CONTACT.map((column) => {
          const Icon = ICONS[column.icon]
          return (
            <div key={column.title}>
              <h2 className="mb-3 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-white md:justify-start">
                <Icon aria-hidden="true" className="h-5 w-5" />
                {column.title}
              </h2>
              {column.lines.map((line) => (
                <p key={line} className="text-sm leading-relaxed text-white/60">
                  {line}
                </p>
              ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}
