import { MapPin, Mail, Phone } from 'lucide-react'

const contacts = [
  { icon: Phone, label: 'Give us a call', value: '1-999-123-4567' },
  { icon: Mail, label: 'Send us a message', value: 'info@healnova.com' },
  { icon: MapPin, label: 'Visit us', value: '2918 Medical Center Drive' },
] as const

export function QuickContact() {
  return (
    <div className="border-b border-gray-100 bg-white py-6 transition-colors dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3">
        {contacts.map((item) => (
          <a
            key={item.label}
            href="#contact"
            className="flex items-center gap-4 transition-colors hover:text-brand"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <span className="text-sm text-mist dark:text-gray-400">{item.label}</span>
              <strong className="block text-ink dark:text-white">{item.value}</strong>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
