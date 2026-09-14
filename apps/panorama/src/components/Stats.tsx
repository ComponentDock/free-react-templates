import { Briefcase, Trophy, Users, Code } from 'lucide-react'

const stats = [
  { icon: Briefcase, value: '2393', label: 'Completed Projects' },
  { icon: Trophy, value: '54', label: 'Winners & Awards' },
  { icon: Users, value: '120', label: 'Number of Team' },
  { icon: Code, value: '550', label: 'Lines of Code' },
]

export function Stats() {
  return (
    <section className="border-t border-gray-200 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto mb-3 h-8 w-8 text-ocean-400" />
              <p className="text-3xl font-bold text-gray-900">{value}</p>
              <p className="mt-1 text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
