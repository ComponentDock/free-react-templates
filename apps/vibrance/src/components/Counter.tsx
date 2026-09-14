import { Award, Users, Heart, Briefcase } from 'lucide-react'

const stats = [
  { icon: <Award size={28} />, value: '14', label: 'Years of Experience' },
  { icon: <Users size={28} />, value: '+1000', label: 'Happy Clients' },
  { icon: <Heart size={28} />, value: '14K', label: 'Followers on FB' },
  { icon: <Briefcase size={28} />, value: '732', label: 'Finished Projects' },
]

export function Counter() {
  return (
    <section className="bg-mist py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="mb-3 text-brand-pink">{s.icon}</div>
              <h2 className="text-3xl font-bold text-ink md:text-4xl">{s.value}</h2>
              <h6 className="mt-2 text-sm font-semibold uppercase tracking-wider text-smoke">
                {s.label}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
