interface StatItemProps {
  target: number
  suffix?: string
  label: string
}

function StatItem({ target, suffix = '', label }: StatItemProps) {
  return (
    <div className="text-center">
      <span className="text-4xl font-bold text-brand">
        {target}
        {suffix}
      </span>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-500">{label}</p>
    </div>
  )
}

const STATS = [
  { target: 900, suffix: '+', label: 'Hours' },
  { target: 750, suffix: '+', label: 'Venues' },
  { target: 50, suffix: '+', label: 'Country' },
  { target: 100, suffix: '+', label: 'Speakers' },
]

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="mb-6 text-center text-3xl font-bold">
          About <span className="text-brand">Event</span>
        </h3>
        <p className="mx-auto mb-12 max-w-3xl text-center text-body">
          GatherVenue brings together the brightest minds in technology, design, and business for an
          unforgettable three-day experience. Discover cutting-edge insights, build meaningful
          connections, and shape the future of your industry.
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
