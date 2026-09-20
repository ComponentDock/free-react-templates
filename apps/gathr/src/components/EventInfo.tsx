import { Calendar, MapPin, Users, Ticket } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const items = [
  {
    icon: Calendar,
    label: 'Date',
    detail: 'March 15-17, 2026',
  },
  {
    icon: MapPin,
    label: 'Location',
    detail: 'San Francisco, CA',
  },
  {
    icon: Users,
    label: 'Speakers',
    detail: '8+ Industry Leaders',
  },
  {
    icon: Ticket,
    label: 'Tickets',
    detail: 'From $65',
  },
]

export function EventInfo() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className={cn(
              'flex flex-col items-center text-center',
              'rounded-lg bg-gray-50 p-8 transition hover:shadow-md',
            )}
          >
            <item.icon size={40} className="mb-4 text-[#f50136]" aria-hidden="true" />
            <h3 className="mb-2 text-lg font-semibold text-[#18181c]">{item.label}</h3>
            <p className="text-sm text-[#838383]">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
