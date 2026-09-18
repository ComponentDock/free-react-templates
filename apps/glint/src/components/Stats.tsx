import { Camera, Brush, Scissors, Users } from 'lucide-react'

const stats = [
  { icon: Camera, value: '531', label: 'Digital X-rays Taken' },
  { icon: Brush, value: '14,000', label: 'Tooth Brushes Distributed' },
  { icon: Scissors, value: '678', label: 'Successful Extractions' },
  { icon: Users, value: '2,134', label: 'Happy Patients' },
] as const

export function Stats() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://picsum.photos/seed/glint-stats/1600/600)',
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center text-white">
            <stat.icon className="mx-auto mb-3 h-10 w-10 text-primary-400" aria-hidden="true" />
            <p className="mb-1 text-3xl font-bold">{stat.value}</p>
            <p className="text-sm text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
