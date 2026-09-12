import { Sprout, Leaf, TreePine, CheckCircle } from 'lucide-react'

const stats = [
  { icon: Sprout, value: '4,800', label: 'Project Completed' },
  { icon: Leaf, value: '14,000', label: 'Total Products' },
  { icon: TreePine, value: '200', label: 'Services Provided' },
  { icon: CheckCircle, value: '71,650', label: 'Satisfied Customers' },
] as const

export function Counter() {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/farmcounter/1920/400')`,
      }}
    >
      <div className="absolute inset-0 bg-brand/85" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center text-white">
              <s.icon size={36} className="mx-auto mb-3 text-accent" />
              <p className="mb-1 text-3xl font-bold">{s.value}</p>
              <p className="text-sm text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
