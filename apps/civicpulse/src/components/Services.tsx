import { Megaphone, Users, Leaf } from 'lucide-react'

const services = [
  {
    title: 'Conduct Campaign',
    description:
      'We organize and execute effective political campaigns that reach voters and communicate our vision for the future.',
    icon: Megaphone,
    image: 'https://picsum.photos/seed/civicpulse-service1/400/300',
  },
  {
    title: 'Generate Member',
    description:
      'Growing our party membership through community engagement, outreach programs, and grassroots mobilization efforts.',
    icon: Users,
    image: 'https://picsum.photos/seed/civicpulse-service2/400/300',
  },
  {
    title: 'Energy Saving Policy',
    description:
      'Advocating for sustainable energy solutions and environmental policies that protect our planet for future generations.',
    icon: Leaf,
    image: 'https://picsum.photos/seed/civicpulse-service3/400/300',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            What we Offer to our Supporters
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand/80 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
                  <service.icon className="h-10 w-10 text-white" aria-hidden="true" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
