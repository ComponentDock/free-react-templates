import { Briefcase, Smile, Users, Award } from 'lucide-react'

const stats = [
  { icon: Briefcase, value: '1,172', label: 'Projects Complete' },
  { icon: Smile, value: '1,000', label: 'Happy Clients' },
  { icon: Users, value: '1,200', label: 'Total Clients' },
  { icon: Award, value: '1,172', label: 'Awards Won' },
]

export function Stats() {
  return (
    <section className="bg-navy-500 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto mb-3 h-8 w-8 text-primary-400" />
              <span className="text-sm font-medium text-gray-300">{label}</span>
              <h3 className="mt-1 font-heading text-3xl font-bold text-white">{value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
