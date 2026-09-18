import { Monitor, Layers, PenTool } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Web Design',
    description:
      'Modern, responsive websites that capture your brand identity and deliver exceptional user experiences across all devices.',
  },
  {
    icon: Layers,
    title: 'App Development',
    description:
      'Custom mobile and web applications built with cutting-edge technology to streamline your business operations.',
  },
  {
    icon: PenTool,
    title: 'Brand Strategy',
    description:
      'Comprehensive brand identities that resonate with your audience and set you apart from the competition.',
  },
]

export function About() {
  return (
    <section className="bg-gray-bg py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-dark">About Our Digital Agency</h2>
        <p className="mx-auto mb-12 max-w-2xl text-text-muted">
          We are a passionate team of designers, developers, and strategists dedicated to crafting
          exceptional digital experiences that drive results.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.title} className="rounded-lg bg-white p-8 shadow-sm">
              <svc.icon className="mx-auto mb-4 text-brand" size={40} />
              <h3 className="mb-3 text-lg font-semibold text-dark">{svc.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{svc.description}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand transition hover:text-brand-dark"
              >
                Explore <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
