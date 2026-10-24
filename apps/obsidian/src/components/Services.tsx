import { Palette, Globe, Printer, Code } from 'lucide-react'

const services = [
  {
    title: 'Graphic Design',
    description: 'Creative visual solutions that communicate your brand message effectively.',
    icon: Palette,
  },
  {
    title: 'Web Design',
    description: 'Beautiful, responsive websites that engage visitors and drive conversions.',
    icon: Globe,
  },
  {
    title: 'Branding & Printing',
    description: 'Comprehensive brand identity and high-quality print materials.',
    icon: Printer,
  },
  {
    title: 'Web Development',
    description: 'Robust, scalable web applications built with modern technologies.',
    icon: Code,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-dark-base px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          We Provide the Perfect Solution
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-white/10 bg-dark-card p-6 text-center transition-colors hover:border-accent"
            >
              <service.icon className="mx-auto h-12 w-12 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
