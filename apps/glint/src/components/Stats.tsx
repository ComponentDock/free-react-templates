import { Activity, Brush, Scissors, Smile } from 'lucide-react'

const stats = [
  { icon: Activity, number: '531', label: 'X-rays' },
  { icon: Brush, number: '14K', label: 'Tooth Brushes' },
  { icon: Scissors, number: '678', label: 'Extractions' },
  { icon: Smile, number: '2134', label: 'Happy Patients' },
] as const

export function Stats() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <stat.icon className="mx-auto mb-4 h-10 w-10 text-brand" aria-hidden="true" />
            <h2 className="mb-1 text-3xl font-bold text-white">{stat.number}</h2>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
