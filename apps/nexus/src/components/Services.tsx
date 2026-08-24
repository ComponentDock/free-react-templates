import { Palette, Code2, Layers, PenTool } from 'lucide-react'

const SERVICES = [
  { title: 'Graphic Design', icon: Palette },
  { title: 'Web Development', icon: Code2 },
  { title: 'Branding', icon: Layers },
  { title: 'Iconography', icon: PenTool },
]

export function Services() {
  return (
    <section id="services" className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-text">Services</h2>
        <a
          href="#contact"
          className="mb-12 inline-block bg-brand-pink px-8 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-pink-700 transition-colors"
        >
          Get in Touch
        </a>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group cursor-pointer bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:shadow-brand-pink/20"
              >
                <div className="mb-4 flex justify-center">
                  <img
                    src={`https://picsum.photos/seed/nexus-svc-${service.title.toLowerCase().replace(/\s/g, '-')}/200/200`}
                    alt={service.title}
                    className="h-32 w-32 object-cover rounded"
                  />
                </div>
                <Icon className="mx-auto mb-3 h-8 w-8 text-brand-pink" />
                <h3 className="text-lg font-semibold text-text">{service.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
