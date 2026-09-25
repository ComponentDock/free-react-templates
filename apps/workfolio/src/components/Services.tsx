import { Layers, Palette, Megaphone } from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'User experience design',
    description:
      'Crafting intuitive, user-centered experiences that delight at every touchpoint. From research to wireframes to polished interfaces.',
  },
  {
    icon: Palette,
    title: 'Digital art',
    description:
      'Creating stunning visual compositions that tell stories and evoke emotion. Illustrations, brand artwork, and creative direction.',
  },
  {
    icon: Megaphone,
    title: 'Social media marketing',
    description:
      'Strategic campaigns that amplify your brand voice and connect with audiences across every major platform.',
  },
]

export function Services() {
  return (
    <section className="bg-white pb-24 md:pb-32" id="services">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-coral">
            My services
          </p>
          <h2 className="mx-auto max-w-lg text-2xl font-normal leading-snug text-heading md:text-3xl">
            What I can do for you
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-icon-bg">
                <service.icon className="h-7 w-7 text-coral" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-heading">{service.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-muted">{service.description}</p>
              <a
                href="#"
                className="text-sm font-medium text-coral transition-colors hover:text-coral-hover"
              >
                learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
