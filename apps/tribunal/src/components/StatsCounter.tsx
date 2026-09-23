import { Scale, Users, Award, Trophy } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface StatItem {
  icon: React.ElementType
  value: number
  label: string
}

const stats: StatItem[] = [
  { icon: Users, value: 1000, label: 'Qualified Lawyers' },
  { icon: Scale, value: 12000, label: 'Trusted Clients' },
  { icon: Award, value: 10000, label: 'Won Cases' },
  { icon: Trophy, value: 12921, label: 'Honors & Awards' },
]

interface StatsCounterProps {
  className?: string
}

export function StatsCounter({ className }: StatsCounterProps) {
  return (
    <section className={cn('py-16 bg-white', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 justify-center">
              <div className="flex-shrink-0">
                <stat.icon className="text-brand" size={40} aria-hidden="true" />
              </div>
              <div>
                <span className="block text-3xl font-bold text-text-heading">
                  {stat.value.toLocaleString()}
                </span>
                <span className="text-sm text-text-muted">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
