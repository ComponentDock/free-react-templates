import { Dumbbell, HeartPulse, Clock } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const services = [
  {
    icon: Dumbbell,
    title: 'Quality Equipment',
    description:
      'Premium-grade machines and free weights maintained to the highest standards for safe, effective training every session.',
  },
  {
    icon: HeartPulse,
    title: 'Health Caring',
    description:
      'Comprehensive wellness programs combining fitness coaching with nutritional guidance for holistic health results.',
  },
  {
    icon: Clock,
    title: 'Gym Strategies',
    description:
      'Structured training methodologies designed by certified coaches to maximize your progress and keep you motivated.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-ink-dark py-32">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/fitcore-services-bg/1600/800')",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-4 inline-block border-l-2 border-brand pl-6 font-display text-2xl font-light uppercase tracking-wider text-brand">
              Our Services For You
            </span>
            <h2 className="font-display text-4xl font-bold uppercase text-white md:text-5xl">
              Push Your Limits Forward
              <br />
              We Offer to You
            </h2>
          </div>
          <ButtonLink
            href="#services"
            className="shrink-0 border border-brand bg-transparent px-8 py-3 font-display text-sm font-light uppercase tracking-widest text-white hover:bg-brand hover:text-white"
          >
            More Services
          </ButtonLink>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden bg-white px-10 py-16 text-center transition-all"
            >
              <service.icon className="mx-auto mb-8 h-12 w-12 text-ink" aria-hidden="true" />
              <h3 className="mb-5 font-display text-2xl font-normal uppercase text-ink">
                {service.title}
              </h3>
              <p className="mb-0 text-base leading-relaxed text-gray-600">{service.description}</p>
              {/* Sliding overlay on hover */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-brand transition-transform duration-300 group-hover:translate-y-0">
                <a
                  href="#services"
                  className="block py-5 font-display text-base font-light uppercase tracking-wider text-white"
                >
                  Discover More About Us →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
