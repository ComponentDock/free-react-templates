import { Palette, Code, Briefcase, Search, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'UX/UI Design',
    description:
      'We create intuitive and visually stunning interfaces that elevate user experience and drive engagement across all platforms.',
  },
  {
    icon: Code,
    title: 'Development',
    description:
      'Our expert developers build robust, scalable web and mobile applications using the latest technologies and frameworks.',
  },
  {
    icon: Briefcase,
    title: 'Branding',
    description:
      'We craft compelling brand identities that resonate with your audience and set you apart from the competition.',
  },
  {
    icon: Search,
    title: 'Search Optimization',
    description:
      'Our SEO strategies boost your online visibility and drive organic traffic to grow your business effectively.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-light-bg py-20 transition-colors lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl font-bold text-dark-bg sm:text-4xl">
            We Provide Effective for Business Solutions
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded bg-brand/10 text-brand">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-dark-bg">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-mist">{service.description}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand/80"
                aria-label={`Learn more about ${service.title}`}
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
