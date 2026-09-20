import { MapPin, Clock, Mail } from 'lucide-react'

const items = [
  { icon: MapPin, label: 'Where', value: 'Vancouver, Canada' },
  { icon: Clock, label: 'When', value: 'April 17 – 21, 2025' },
  { icon: Mail, label: 'Email', value: 'info@huddle.com' },
]

export interface QuickContactProps {
  className?: string
}

export function QuickContact({ className }: QuickContactProps) {
  return (
    <section id="contact" className={`bg-dark py-12 text-white ${className ?? ''}`}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 text-center md:grid-cols-3">
        {items.map((item) => (
          <div key={item.label}>
            <item.icon className="mx-auto mb-3 h-8 w-8 text-white" strokeWidth={1.5} />
            <h3 className="mb-1 text-lg font-bold">{item.label}</h3>
            <p className="text-sm text-gray-400">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
