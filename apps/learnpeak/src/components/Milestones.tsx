import { Users, BookOpen, Award, GraduationCap } from 'lucide-react'

const STATS = [
  { icon: Users, value: '4,789', label: 'Happy Students' },
  { icon: BookOpen, value: '1,599', label: 'Online Courses' },
  { icon: GraduationCap, value: '326', label: 'Expert Teachers' },
  { icon: Award, value: '1,200', label: 'Awards Won' },
]

export function Milestones() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <stat.icon size={40} className="mx-auto text-brand mb-4" />
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-muted-light text-sm uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
