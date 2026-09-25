import { Palette, Globe, Code, Image, Gem, PenTool, Paintbrush, Search } from 'lucide-react'

const SERVICES = [
  { icon: Palette, title: 'Web Design' },
  { icon: Globe, title: 'Web Application' },
  { icon: Code, title: 'Web Development' },
  { icon: Image, title: 'Banner Design' },
  { icon: Gem, title: 'Branding' },
  { icon: PenTool, title: 'Icon Design' },
  { icon: Paintbrush, title: 'Graphic Design' },
  { icon: Search, title: 'SEO' },
]

export function Services() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-light uppercase tracking-widest text-brand-500">
            Services
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            We do awesome services for our clients
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-gray-100 p-6 text-center transition-all hover:border-brand-500 hover:shadow-lg"
            >
              <service.icon className="mx-auto mb-4 h-12 w-12 text-brand-500 transition-transform group-hover:scale-110" />
              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
