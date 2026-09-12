import { TreePine, Sprout, Wrench, Users } from 'lucide-react'

const stats = [
  { icon: TreePine, value: '4,800', label: 'Projects Completed' },
  { icon: Sprout, value: '14,000', label: 'Total Products' },
  { icon: Wrench, value: '200', label: 'Services Provide' },
  { icon: Users, value: '71,650', label: 'Satisfied Customers' },
]

export function Stats() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://picsum.photos/seed/verdure-stats/1920/600')" }}
    >
      <div className="absolute inset-0 bg-gray-900/80" />

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center text-white">
              <Icon className="mx-auto mb-4 h-12 w-12 text-verdure-400" />
              <p className="text-3xl font-bold sm:text-4xl">{value}</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-gray-300">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
