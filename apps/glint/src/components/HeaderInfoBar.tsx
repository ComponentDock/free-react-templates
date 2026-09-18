import { MapPin, Clock, Phone, CalendarDays } from 'lucide-react'

const infoItems = [
  { icon: MapPin, label: 'Find us', value: '123 Dental Ave, Suite 100' },
  { icon: Clock, label: 'Working hours', value: 'Mon–Fri: 8am–6pm' },
  { icon: Phone, label: 'Call us', value: '+1 (555) 123-4567' },
  { icon: CalendarDays, label: 'Appointment', value: 'Book online now' },
] as const

export function HeaderInfoBar() {
  return (
    <div className="bg-card text-sm text-smoke">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-4 py-2 sm:px-6">
        {infoItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <item.icon className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
            <span className="font-medium">{item.label}:</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
