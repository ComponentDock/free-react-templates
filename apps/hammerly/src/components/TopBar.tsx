import { Phone, MapPin, Clock } from 'lucide-react'

const contactItems = [
  { icon: Phone, text: '+1 (234) 567-8900' },
  { icon: MapPin, text: '2811 City Street, New York, NY 10001' },
  { icon: Clock, text: 'Mon – Fri: 8am – 7pm' },
] as const

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
] as const

export function TopBar() {
  return (
    <div className="bg-topbar text-sm text-light">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-2">
        <div className="flex flex-wrap items-center gap-4">
          {contactItems.map((item) => (
            <div key={item.text} className="flex items-center gap-1">
              <item.icon size={14} className="text-brand" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="transition-colors hover:text-brand"
              aria-label={s.label}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
