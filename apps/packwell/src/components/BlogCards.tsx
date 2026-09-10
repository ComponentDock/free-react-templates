import { Anchor, Plane, Truck } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const services = [
  {
    icon: Anchor,
    title: 'Ocean Freight',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    image: 'packwell-ocean',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    image: 'packwell-air',
  },
  {
    icon: Truck,
    title: 'Street Freight',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    image: 'packwell-street',
  },
] as const

export function BlogCards() {
  return (
    <section id="blog" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={`https://picsum.photos/seed/${service.image}/600/400`}
                alt={service.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{service.description}</p>
                <ButtonLink
                  href="#"
                  variant="outline"
                  className="mt-4 rounded-[3px] border-2 border-brand text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  Read More
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
