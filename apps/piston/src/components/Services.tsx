import { Target, Flame, TrendingUp, Award } from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Analyze Your Goal',
    desc: 'We help you define clear, measurable fitness targets.',
  },
  {
    icon: Flame,
    title: 'Work Hard On It',
    desc: 'Structured programs designed to push your limits.',
  },
  {
    icon: TrendingUp,
    title: 'Improve Your Performance',
    desc: 'Track progress and refine your approach over time.',
  },
  {
    icon: Award,
    title: 'Achieve Perfect Body',
    desc: 'Reach your ideal physique with expert guidance.',
  },
]

export function Services() {
  return (
    <section id="program" className="bg-dark py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-2 text-3xl font-bold text-white">Our Process</h2>
        <p className="mb-12 text-gray-400">How we help you reach your fitness goals</p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded bg-darker p-6 text-center">
              <s.icon className="mx-auto mb-4 text-brand" size={40} />
              <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
