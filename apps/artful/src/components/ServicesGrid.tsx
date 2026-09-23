import { Palette, PenTool, Monitor, Camera } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Vector Illustration',
    description:
      'Professional vector illustrations crafted with precision and creative flair for all your branding needs.',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description:
      'Eye-catching graphic designs that communicate your brand message effectively across all platforms.',
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description:
      'Modern, responsive web designs that combine aesthetics with seamless user experience.',
  },
  {
    icon: Camera,
    title: 'Photography',
    description:
      'High-quality photography services capturing the essence of your products, events, and brand story.',
  },
]

export function ServicesGrid() {
  return (
    <section id="services" className="bg-artful-section-bg py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-semibold text-artful-heading">
          Our Best Services
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="rounded-lg bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-artful-red/10 text-artful-red">
                <svc.icon size={28} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-artful-heading">{svc.title}</h3>
              <p className="text-sm leading-relaxed text-artful-body">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
