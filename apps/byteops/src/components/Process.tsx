import { Lightbulb, BarChart3, Palette, Rocket } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Lightbulb,
    title: 'Discovery',
    description:
      'We start by understanding your business goals, target audience, and project requirements.',
  },
  {
    num: '02',
    icon: BarChart3,
    title: 'Planning',
    description:
      'Our team creates a detailed roadmap with timelines, milestones, and deliverables.',
  },
  {
    num: '03',
    icon: Palette,
    title: 'Execution',
    description:
      'We bring your vision to life with cutting-edge technology and creative solutions.',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Launch',
    description: 'We deploy your project and provide ongoing support to ensure continued success.',
  },
]

export function Process() {
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-ops-400">
            Our Process
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">How We Work</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-4 text-4xl font-bold text-ops-400">{s.num}</div>
                <Icon className="mx-auto mb-4 h-10 w-10 text-ops-400" />
                <h3 className="mb-2 text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
