import { Building2, Home, Users, UserCheck } from 'lucide-react'

const stats = [
  { icon: Building2, number: 245, label: 'Projects Done' },
  { icon: Home, number: 535, label: 'Houses Built' },
  { icon: Users, number: 288, label: 'Staff Members' },
  { icon: UserCheck, number: 750, label: 'Happy Clients' },
] as const

export function Counter() {
  return (
    <section className="bg-dark py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <s.icon size={36} className="mx-auto mb-3 text-brand" />
            <span className="block font-heading text-4xl font-extrabold text-white md:text-5xl">
              {s.number}
            </span>
            <span className="mt-2 block text-sm uppercase tracking-wide text-light/70">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
