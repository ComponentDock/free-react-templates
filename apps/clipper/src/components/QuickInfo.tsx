import { Clock, MapPin, Phone } from 'lucide-react'

const items = [
  {
    icon: Phone,
    title: '+1 234 5633 342',
    subtitle: 'Call us 24/7 we will get back to you ASAP',
  },
  {
    icon: MapPin,
    title: '249 Division Rad',
    subtitle: 'Fake st. New York, New York City, PO 2923 USA',
  },
  {
    icon: Clock,
    title: 'Daily: 8 am - 10 pm',
    subtitle: 'Mon-Fri, Sunday · Saturday: Closed',
  },
] as const

export function QuickInfo() {
  return (
    <section aria-label="Quick info" className="bg-brand">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-bold text-white">{item.title}</p>
              <p className="mt-1 text-sm text-white/85">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
