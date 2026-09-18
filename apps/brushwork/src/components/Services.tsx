import { Monitor, Image, Smartphone, Gift } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Vector Illustration',
    description:
      'Professional vector illustrations crafted with precision. Our artists bring concepts to life with clean, scalable designs.',
  },
  {
    icon: Image,
    title: 'Graphics Design',
    description:
      'Comprehensive graphic design solutions for branding, marketing materials, and visual identity systems.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Design',
    description:
      'Intuitive and visually appealing mobile app interfaces that engage users and deliver seamless experiences.',
  },
  {
    icon: Gift,
    title: 'Custom Printing',
    description:
      'High-quality custom printing services for promotional materials, merchandise, and branded products.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            What We Do
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink sm:text-4xl">our services</h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
