import { MapPin, Clock, Phone, Calendar } from 'lucide-react'

const infoItems = [
  { icon: MapPin, label: 'Dental Street 20199', detail: 'Denver, USA' },
  { icon: Clock, label: 'Opening Hours', detail: 'Mon - Sat: 8:00 - 19:00' },
  { icon: Phone, label: '+885 332 1568', detail: 'Call us now!' },
  { icon: Calendar, label: 'Book Appointment', detail: 'Schedule online' },
] as const

export function HeaderInfoBar() {
  return (
    <div className="bg-paper text-mist">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-3 sm:grid-cols-4 sm:px-6">
        {infoItems.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <item.icon className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-ink">{item.label}</p>
              <p className="text-xs text-mist">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
