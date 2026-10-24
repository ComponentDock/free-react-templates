import { cn } from '@free-react-templates/ui'

interface StatsProps {
  className?: string
}

const stats = [
  { value: '60+', label: 'Countries Served' },
  { value: '9,200+', label: 'Satisfied Clients' },
  { value: '5,800+', label: 'Projects Completed' },
  { value: '100%', label: 'Commitment' },
]

export function Stats({ className }: StatsProps) {
  return (
    <section
      id="pricing"
      className={cn('bg-navy py-16 sm:py-20', className)}
      aria-labelledby="stats-heading"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="mb-1 text-sm font-semibold uppercase text-accent-400">
          Great Reviews For Our Services
        </p>
        <h2 id="stats-heading" className="mb-10 text-2xl font-bold text-white sm:text-3xl">
          Technical Statistics
        </h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white sm:text-4xl">{s.value}</span>
              <span className="mt-1 text-xs text-white/70">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
