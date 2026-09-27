import { Code, Palette, Globe, Search } from 'lucide-react'

const SERVICES = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Custom web applications built with modern frameworks, optimized for performance and scalability.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'User-centered design that combines aesthetics with functionality to create delightful experiences.',
  },
  {
    icon: Globe,
    title: 'Web Design',
    description:
      'Visually stunning websites that capture your brand essence and engage your audience effectively.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description:
      'Data-driven SEO strategies to improve visibility, drive organic traffic, and boost rankings.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold uppercase text-ink md:text-4xl">
            Service Offers
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-smoke">
            Delivering comprehensive digital solutions tailored to elevate your business presence
            and drive meaningful results.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((svc) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.title}
                className="rounded-xl bg-white p-8 text-center shadow-sm transition hover:shadow-md dark:bg-gray-900"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-display text-lg font-bold text-ink">{svc.title}</h3>
                <p className="text-sm leading-relaxed text-smoke">{svc.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
