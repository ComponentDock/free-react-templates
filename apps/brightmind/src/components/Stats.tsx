import { Users, BookOpen, GraduationCap } from 'lucide-react'

const stats = [
  { icon: Users, value: '12,000+', label: 'Satisfied Students' },
  { icon: BookOpen, value: '500+', label: 'Courses Completed' },
  { icon: GraduationCap, value: '200+', label: 'Expert Advisors' },
]

export function Stats() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-3 flex justify-center">
                <stat.icon className="h-10 w-10 text-brand-500" />
              </div>
              <div className="mb-1 text-4xl font-bold text-dark">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
