import { CheckCircle } from 'lucide-react'

const stats = [
  { value: 3000, label: 'Trusted Clients' },
  { value: 1000, label: "Honor's & Awards" },
  { value: 2000, label: 'Expert Lawyers' },
  { value: 10540, label: 'Successful Cases' },
]

export function CounterStats() {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage:
          'linear-gradient(rgba(29,34,39,0.7),rgba(29,34,39,0.7)), url(https://picsum.photos/seed/statutory-counter/1920/600)',
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center text-white">
            <CheckCircle className="mx-auto mb-3 h-10 w-10 text-gold" />
            <div className="text-4xl font-bold">{stat.value.toLocaleString()}</div>
            <div className="mt-2 text-sm text-white/80">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
