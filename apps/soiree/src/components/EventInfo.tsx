import { Calendar, MapPin, Users, Tag } from 'lucide-react'

const INFO_ITEMS = [
  { icon: Calendar, label: 'Date', value: '12-14 February 2025' },
  { icon: MapPin, label: 'Location', value: 'Los Angeles, CA' },
  { icon: Users, label: 'Speakers', value: 'Natalie James + guests' },
  { icon: Tag, label: 'Tickets', value: '$65 early bird' },
]

export function EventInfo() {
  return (
    <section className="py-16 font-[family-name:var(--font-montserrat)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {INFO_ITEMS.map((item) => (
            <div key={item.label} className="text-center">
              <item.icon className="w-8 h-8 text-[var(--color-brand)] mx-auto mb-3" />
              <h5 className="text-sm font-bold uppercase tracking-wider text-[var(--color-heading)] mb-1">
                {item.label}
              </h5>
              <p className="text-sm text-[var(--color-body)]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
