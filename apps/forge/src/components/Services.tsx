import { Shield, Monitor, Smartphone, Rocket } from 'lucide-react'

const SERVICES = [
  {
    title: 'Branding',
    icon: Shield,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Web Design',
    icon: Monitor,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'App Design',
    icon: Smartphone,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Start Up',
    icon: Rocket,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
] as const

/* Services recreated from the source's "Featured Services" split section:
   eyebrow + divider + two-part heading on the left, and a 2x2 grid of
   icon cards (Branding / Web Design / App Design / Start Up) on the
   right. */

export function Services() {
  return (
    <section id="services" className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="mr-auto max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Featured Services
          </span>
          <span className="mt-4 block h-1.5 w-[70px] bg-black" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-light uppercase leading-snug text-body lg:text-5xl lg:leading-tight">
            The <strong className="font-bold">Services</strong> That We Are Providing
          </h2>
          <p className="mt-6 leading-relaxed text-secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nihil numquam aspernatur
            inventore sint eligendi nostrum, explicabo aperiam tenetur officia.
          </p>
          <p className="mt-4 leading-relaxed text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam distinctio
            voluptatibus libero officia neque magnam recusandae dolorum, esse eaque.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div key={service.title} className="flex flex-col">
              <service.icon
                className="mb-4 h-8 w-8 text-body"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="text-xl font-normal text-body">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
