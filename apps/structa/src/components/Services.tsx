import { HardHat, Ruler, PaintBucket } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const services = [
  {
    icon: HardHat,
    title: 'General Contracting',
    description:
      'We manage all aspects of your construction project, from subcontractor coordination to material procurement and quality control.',
  },
  {
    icon: Ruler,
    title: 'Project Planning',
    description:
      'Our expert team develops comprehensive project plans that optimize timelines, budgets, and resource allocation for successful outcomes.',
  },
  {
    icon: PaintBucket,
    title: 'Interior Design',
    description:
      'Transform your spaces with our interior design services that blend functionality with aesthetic excellence.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-dark py-20" aria-label="Services">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Services we provide</h2>
          <Button className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
            Get Free Quote
          </Button>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-lg bg-dark-light p-8 text-center transition-transform hover:-translate-y-1"
              >
                <Icon className="mx-auto h-12 w-12 text-brand" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-white/70">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
