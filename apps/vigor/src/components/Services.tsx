import { Target, Dumbbell, TrendingUp, Award } from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Analyze Your Goal',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Dumbbell,
    title: 'Work Hard On It',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: TrendingUp,
    title: 'Improve Your Performance',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Award,
    title: 'Achieve Your Perfect Body',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export function Services() {
  return (
    <section id="programs" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-400">
            Services
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Kick your <span className="text-brand-400">feet</span> up
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-400/10 text-brand-400">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
