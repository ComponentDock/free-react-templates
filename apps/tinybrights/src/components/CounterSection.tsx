import { Users, GraduationCap, BookOpen, Trophy } from 'lucide-react'

const stats = [
  { icon: Users, number: '1,250', label: 'Happy Students' },
  { icon: GraduationCap, number: '50', label: 'Expert Teachers' },
  { icon: BookOpen, number: '120', label: 'Courses Offered' },
  { icon: Trophy, number: '15', label: 'Awards Won' },
]

export function CounterSection() {
  return (
    <section
      className="parallax-bg relative py-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/tinybrights-counter/1920/600)',
      }}
    >
      <div className="absolute inset-0 bg-brand-blue/85" />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="text-center text-white">
              <Icon className="mx-auto mb-4 h-10 w-10 text-brand-orange" aria-hidden="true" />
              <p className="text-4xl font-bold">{stat.number}</p>
              <p className="mt-2 text-sm font-medium text-white/80">{stat.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
