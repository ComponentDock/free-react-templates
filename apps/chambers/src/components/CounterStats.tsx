import { Users, Award, Scale, FileCheck } from 'lucide-react'

const stats = [
  { icon: Users, number: '3000', label: 'Trusted Clients' },
  { icon: Award, number: '1000', label: 'Honors & Awards' },
  { icon: Scale, number: '2000', label: 'Expert Lawyers' },
  { icon: FileCheck, number: '10540', label: 'Successful Cases' },
]

export function CounterStats() {
  return (
    <section className="py-12" data-testid="counter-stats">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.label} className="text-center p-6 border border-gray-100 rounded">
                <Icon size={32} className="text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-text-dark mb-1">{s.number}+</div>
                <div className="text-text-muted text-sm">{s.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
