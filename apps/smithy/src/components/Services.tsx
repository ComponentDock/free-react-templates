import { Code, Palette, Layout, Search } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'WP Developing',
    description:
      'Custom WordPress development tailored to your business needs with clean, maintainable code.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive and engaging digital experiences.',
  },
  {
    icon: Layout,
    title: 'Web Design',
    description: 'Modern, responsive web designs that look great on every device and screen size.',
  },
  {
    icon: Search,
    title: 'SEO Optimize',
    description:
      'Search engine optimization strategies to boost your visibility and organic traffic.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-[var(--color-heading)]">service offers</h2>
          <p className="text-[var(--color-body)]">
            Providing the best services to help grow your business
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="rounded-lg border border-[var(--color-line)] bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-purple-deep)] text-white">
                <svc.icon size={28} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--color-heading)]">
                {svc.title}
              </h3>
              <p className="text-sm text-[var(--color-body)]">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
