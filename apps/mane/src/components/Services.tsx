import { ArrowRight } from 'lucide-react'

const services = [
  {
    name: 'Haircut & Styling',
    blurb: 'Precision cuts and blow-dry styling tailored to your face shape and lifestyle.',
    seed: 'mane-service-1',
    alt: 'Stylist cutting a client hair in the salon',
  },
  {
    name: 'Beard',
    blurb: 'Expert beard shaping, line-ups, and hot-towel treatment for a sharp finish.',
    seed: 'mane-service-2',
    alt: 'Barber trimming a client beard',
  },
  {
    name: 'Makeup',
    blurb: 'Professional makeup artistry for weddings, events, and photo shoots.',
    seed: 'mane-service-3',
    alt: 'Makeup brushes and cosmetics on a table',
  },
  {
    name: 'Body Treatment',
    blurb: 'Relaxing spa rituals, massages, and body care that melt the day away.',
    seed: 'mane-service-4',
    alt: 'Spa towels and candles for a body treatment',
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Services Menu
          </h2>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-brand">
            Our best services that we offering to you
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.name}
              className="overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${service.seed}/600/450`}
                alt={service.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold uppercase text-ink dark:text-white">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {service.blurb}
                </p>
                <a
                  href="#booking"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand transition-colors hover:text-brand-dark"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
