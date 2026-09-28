import { Phone, MapPin, Clock } from 'lucide-react'

const items = [
  { icon: Phone, label: '000 (123) 456 7890', sub: 'Call us anytime' },
  { icon: MapPin, label: '198 West 21th Street', sub: 'New York, NY' },
  { icon: Clock, label: 'Open Monday–Friday', sub: '8:00 AM – 9:00 PM' },
] as const

export function IntroBar() {
  return (
    <section className="bg-surface-light py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-3 sm:px-6">
        {items.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-4 text-center sm:justify-center">
            <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
            <div className="text-left sm:text-center">
              <h3 className="text-lg font-semibold text-white">{label}</h3>
              <p className="text-sm text-gray-400">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
