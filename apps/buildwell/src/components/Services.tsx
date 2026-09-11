import { HardHat, PaintBucket, Ruler, Palette, Sparkles, MessageSquare } from 'lucide-react'

const services = [
  {
    icon: HardHat,
    title: 'Construction',
    description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
  },
  {
    icon: PaintBucket,
    title: 'Renovation',
    description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
  },
  {
    icon: Ruler,
    title: 'Architecture',
    description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
  },
  {
    icon: Palette,
    title: 'Painting',
    description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
  },
  {
    icon: Sparkles,
    title: 'Decorating',
    description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
  },
  {
    icon: MessageSquare,
    title: 'Consulting',
    description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Subtitle</p>
          <h2 className="mt-2 text-3xl font-bold text-heading">Our Services</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-lg border border-muted bg-white p-8 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-brand">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-heading">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
