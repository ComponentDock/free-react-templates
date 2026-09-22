import { Users, BedDouble, UserCheck, MapPin } from 'lucide-react'

const STATS = [
  { icon: Users, value: '8,500', suffix: '+', label: 'Happy Guests' },
  { icon: BedDouble, value: '200', suffix: '+', label: 'Rooms' },
  { icon: UserCheck, value: '500', suffix: '+', label: 'Staff' },
  { icon: MapPin, value: '100', suffix: '+', label: 'Destinations' },
]

export function Counter() {
  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://picsum.photos/seed/opulux-counter/1920/600')" }}
      />
      <div className="absolute inset-0 bg-dark-brown/80" />

      <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
        {STATS.map(({ icon: Icon, value, suffix, label }) => (
          <div key={label} className="text-center text-white">
            <Icon className="mx-auto mb-3 h-8 w-8 text-gold" />
            <p className="font-heading text-4xl font-bold">
              {value}
              {suffix}
            </p>
            <p className="mt-1 text-sm text-white/70">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
