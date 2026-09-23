import { Lightbulb, Compass, Layers } from 'lucide-react'

const services = [
  {
    title: 'Perfectly Design',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: Lightbulb,
  },
  {
    title: 'Carefully Planned',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: Compass,
  },
  {
    title: 'Smartly Execute',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: Layers,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <s.icon className="h-8 w-8 text-brand" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-ink">{s.title}</h3>
              <p className="text-[#6c757d]">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
