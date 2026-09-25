import { MapPin, Phone, Mail } from 'lucide-react'

const items = [
  {
    icon: MapPin,
    lines: ['3008 Sarah Drive', 'FrankinLA 70538'],
  },
  {
    icon: Phone,
    lines: ['337-4139539', 'MIN - FRI,8AM - 7PM'],
  },
  {
    icon: Mail,
    lines: ['contact@credence.com', 'REPLY IN 24 HOURS'],
  },
] as const

export function ContactBar() {
  return (
    <div className="bg-brand text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-4 sm:grid-cols-3 sm:px-6">
        {items.map((item) => (
          <div key={item.lines[0]} className="flex items-start gap-3">
            <item.icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <div>
              {item.lines.map((line) => (
                <p key={line} className="text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
