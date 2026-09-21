import { CheckCircle, Users, Building, UserCheck } from 'lucide-react'

const stats = [
  { icon: CheckCircle, number: '2100', label: 'Successful Loan Approval' },
  { icon: Users, number: '99%', label: 'Customer Satisfaction' },
  { icon: Building, number: '90+', label: 'Office National Partners' },
  { icon: UserCheck, number: '70+', label: 'Team Members' },
] as const

export function Counter() {
  return (
    <section id="counter" className="bg-navy py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="text-center">
              <Icon className="mx-auto mb-4 h-10 w-10 text-primary" aria-hidden="true" />
              <div className="mb-2 text-4xl font-bold text-white">{stat.number}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
