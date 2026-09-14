import { Users, BookOpen, Coffee, ThumbsUp } from 'lucide-react'

const stats = [
  { icon: Users, value: '12,400', label: 'Active Readers' },
  { icon: BookOpen, value: '8,750', label: 'Total Pages' },
  { icon: Coffee, value: '1,020', label: 'Cups of Coffee' },
  { icon: ThumbsUp, value: '5,320', label: 'Facebook Fans' },
] as const

export function Counter() {
  return (
    <section className="bg-surface-alt py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto mb-3 h-8 w-8 text-primary-300" aria-hidden="true" />
              <div className="font-display text-3xl font-bold text-ink">{value}</div>
              <p className="mt-1 text-sm text-smoke">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
