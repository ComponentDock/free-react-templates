import { Palette, Globe, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    icon: Globe,
    title: 'Web Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Service Provided
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            Build brands campaigns
            <br />
            &amp; digital projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <service.icon size={32} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-navy">{service.title}</h3>
              <p className="leading-relaxed text-body">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
