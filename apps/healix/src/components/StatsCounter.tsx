import { cn } from '@free-react-templates/ui'

interface StatsCounterProps {
  className?: string
}

const stats = [
  { value: '18+', label: 'Years of Experience' },
  { value: '450+', label: 'Happy Patients' },
  { value: '15+', label: 'Qualified Doctors' },
  { value: '45+', label: 'Awards Won' },
]

export function StatsCounter({ className }: StatsCounterProps) {
  return (
    <section className={cn('bg-brand-blue text-white py-12', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
