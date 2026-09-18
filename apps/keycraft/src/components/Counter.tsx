import { Users, Globe, FolderCheck, Award, ShoppingBag } from 'lucide-react'

const stats = [
  { value: '25k+', label: 'Happy Customers', icon: Users },
  { value: '16', label: 'World Wide Branch', icon: Globe },
  { value: '28k+', label: 'Project Complete', icon: FolderCheck },
  { value: '36', label: 'Award Winner', icon: Award },
  { value: '74k+', label: 'Products sold', icon: ShoppingBag },
] as const

export function Counter() {
  return (
    <section aria-label="Statistics" className="bg-navy py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary-400" aria-hidden="true" />
              <p className="font-display text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
