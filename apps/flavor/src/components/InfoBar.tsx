import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import { infoItems } from '../data'

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  MapPin,
  Clock,
  Phone,
  Mail,
}

/** 4-column info bar with contact details and lucide icons. */
export function InfoBar() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {infoItems.map((item) => {
          const Icon = iconMap[item.icon]
          return (
            <div key={item.title} className="flex items-start gap-4">
              {Icon && <Icon className="mt-1 h-6 w-6 shrink-0 text-brand" />}
              <div>
                <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed">{item.detail}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
