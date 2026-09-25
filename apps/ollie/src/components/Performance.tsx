import { Check } from 'lucide-react'

interface PerformanceProps {
  className?: string
}

interface PerformanceRow {
  image: string
  headline: string
  description: string
  items: string[]
}

const rows: PerformanceRow[] = [
  {
    image: 'https://picsum.photos/seed/ollie-3/800/600',
    headline: 'Street Performance',
    description:
      'From kickflips to grinds, master every aspect of street skateboarding with our proven training methods.',
    items: ['Flat ground tricks', 'Rail and ledge combos', 'Stair set mastery', 'Gap techniques'],
  },
  {
    image: 'https://picsum.photos/seed/ollie-4/800/600',
    headline: 'Park Skills',
    description: 'Dominate the skatepark with advanced transitions, bowl riding, and vert skills.',
    items: [
      'Transition fundamentals',
      'Bowl and pool riding',
      'Vert ramp mastery',
      'Flow and lines',
    ],
  },
]

export function Performance({ className = '' }: PerformanceProps) {
  return (
    <section className={`py-20 bg-bg-dark ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {rows.map((row, idx) => (
          <div
            key={row.headline}
            className={`flex flex-col items-center gap-10 ${
              idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            <div className="lg:w-1/2">
              <img
                src={row.image}
                alt={row.headline}
                className="w-full rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-4">
                {row.headline}
              </h2>
              <p className="text-muted leading-relaxed mb-6">{row.description}</p>
              <ul className="space-y-3">
                {row.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <Check size={18} className="text-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
