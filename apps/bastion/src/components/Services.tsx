import { ArrowRight, Building2, DraftingCompass, Home, Lightbulb } from 'lucide-react'
import { Card } from '@free-react-templates/ui'

const services = [
  {
    icon: DraftingCompass,
    title: 'Interior Design',
    text: 'Interiors that balance comfort, light, and function — crafted around the way you live and work.',
  },
  {
    icon: Lightbulb,
    title: 'Concept Design',
    text: 'Early-stage concepts and feasibility studies that give every project a clear, confident direction.',
  },
  {
    icon: Home,
    title: 'Residential Design',
    text: 'Homes designed around family life, with warm materials and spaces built to be lived in.',
  },
  {
    icon: Building2,
    title: 'Hospitality Design',
    text: 'Hotels, restaurants, and venues that turn first impressions into lasting experiences.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-brand">
            What we do
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
            Services
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            From first sketch to final handover, our studios cover every stage of the architectural
            process.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="group transition-shadow hover:shadow-lg">
              <Card.Header className="pb-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-charcoal">
                  <service.icon className="h-7 w-7" aria-hidden="true" />
                </span>
              </Card.Header>
              <Card.Content>
                <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {service.text}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
