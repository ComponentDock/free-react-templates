import { MapPin, Calendar, Camera, Users } from 'lucide-react'

export interface CounterStatsProps {
  className?: string
}

const stats = [
  { icon: MapPin, value: 301, label: 'Places' },
  { icon: Calendar, value: 102, label: 'Events' },
  { icon: Camera, value: 1050, label: 'Photos' },
  { icon: Users, value: 61, label: 'Speakers' },
]

export function CounterStats({ className }: CounterStatsProps) {
  return (
    <section
      className={`relative bg-cover bg-center bg-no-repeat py-20 ${className ?? ''}`}
      style={{
        backgroundImage:
          'linear-gradient(rgba(13,13,26,0.9), rgba(13,13,26,0.9)), url(https://picsum.photos/seed/convention-stats/1920/600)',
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="text-center">
            <Icon size={36} className="mx-auto mb-4 text-[#ff2d9b]" />
            <span
              className="mb-1 block text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {value}
            </span>
            <span className="text-sm uppercase tracking-wider text-gray-400">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
