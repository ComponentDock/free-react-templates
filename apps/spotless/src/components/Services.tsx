import { Building2, HardHat, Home, Sofa, Truck, Briefcase } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    text: 'Regular home cleaning tailored to your routine.',
  },
  {
    icon: Building2,
    title: 'Commercial Cleaning',
    text: 'Offices and retail spaces that shine every day.',
  },
  {
    icon: Briefcase,
    title: 'Office & Deep Cleaning',
    text: 'Intensive top-to-bottom care for busy workplaces.',
  },
  {
    icon: Truck,
    title: 'Move-In/Out Cleaning',
    text: 'A fresh start for your new place — or a spotless exit.',
  },
  {
    icon: Sofa,
    title: 'Carpet & Upholstery',
    text: 'Deep steam care that revives fabrics and carpets.',
  },
  {
    icon: HardHat,
    title: 'Post-Construction',
    text: 'Dust and debris removal after renovation works.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-light py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="font-accent text-base font-semibold uppercase tracking-[4px] text-brand">
            Our services
          </p>
          <h2 className="mt-4 text-4xl font-medium text-heading">Better life for everyone</h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative z-10">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-light text-brand">
                  <service.icon className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-medium text-heading">{service.title}</h3>
                <p className="mt-3 text-sm text-body">{service.text}</p>
                <p className="mt-4 font-accent text-sm font-semibold text-soft">
                  Starting from $50.00
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-block text-sm font-semibold uppercase tracking-widest text-brand"
                >
                  Book now
                </a>
              </div>

              {/* Hover overlay slides up */}
              <div className="absolute inset-0 z-0 translate-y-full bg-brand transition-transform duration-300 group-hover:translate-y-0" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
