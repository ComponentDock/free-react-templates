interface StatItemProps {
  number: string
  label: string
}

function StatItem({ number, label }: StatItemProps) {
  return (
    <div className="text-center py-8">
      <div className="text-4xl font-bold text-brand-500 mb-2">{number}</div>
      <div className="text-sm text-gray-500 uppercase tracking-wider">{label}</div>
    </div>
  )
}

interface StatsCounterProps {
  className?: string
}

const stats = [
  { number: '1,000', label: 'Years on the market' },
  { number: '12,000', label: 'Operational Brigades' },
  { number: '10,000', label: 'Units of Engineering' },
  { number: '12,921', label: 'Employees of the company' },
]

export function StatsCounter({ className }: StatsCounterProps) {
  return (
    <section className={`bg-gray-50 py-12 ${className ?? ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
