import { Palette, Code, Camera, Megaphone, Search, Layers } from 'lucide-react'

const SERVICES = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Creating intuitive and visually appealing user interfaces that delight users and drive engagement.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Building fast, responsive, and accessible websites using modern frameworks and best practices.',
  },
  {
    icon: Camera,
    title: 'Photography',
    description:
      'Professional photography services for products, portraits, and brand storytelling.',
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    description:
      'Strategic digital marketing campaigns that increase visibility and generate leads.',
  },
  {
    icon: Search,
    title: 'SEO',
    description:
      'Search engine optimization strategies that improve rankings and drive organic traffic.',
  },
  {
    icon: Layers,
    title: 'Branding',
    description:
      'Comprehensive brand identity design including logos, guidelines, and visual systems.',
  },
]

export function Services() {
  return (
    <section id="services-section" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-gold">
            Services
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">What I Do</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded bg-white p-8 shadow-md transition-all duration-300 hover:bg-gold hover:shadow-xl"
            >
              <div className="mb-4">
                <service.icon
                  size={48}
                  className="text-gold transition-colors group-hover:text-white"
                />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-ink group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-muted transition-colors group-hover:text-white/90">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
