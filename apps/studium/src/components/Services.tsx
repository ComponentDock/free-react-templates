import { BookOpen, GraduationCap, Trophy, CheckCircle } from 'lucide-react'

const services = [
  {
    title: 'Top Quality Content',
    desc: 'Courses crafted by industry experts with hands-on projects.',
    Icon: BookOpen,
  },
  {
    title: 'Highly Skilled Instructor',
    desc: 'Learn from professionals who are leaders in their fields.',
    Icon: GraduationCap,
  },
  {
    title: 'World Class Quiz',
    desc: 'Test your knowledge with comprehensive assessments.',
    Icon: Trophy,
  },
  {
    title: 'Get Certified',
    desc: 'Earn certificates recognized by top employers worldwide.',
    Icon: CheckCircle,
  },
]

export function Services() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="mb-12 text-3xl font-bold text-brand-text md:text-4xl">Why Choose Studium</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl bg-white p-8 shadow-md text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <s.Icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-brand-text">{s.title}</h3>
              <p className="text-sm text-brand-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
