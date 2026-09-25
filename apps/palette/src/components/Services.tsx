import { Palette, Smartphone, Code, Image, Gem, Hexagon, PenTool, Search } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Web Design',
    desc: 'Creating beautiful, responsive websites that engage visitors and drive conversions.',
  },
  {
    icon: Smartphone,
    title: 'Web Application',
    desc: 'Building modern web applications with cutting-edge technology and intuitive interfaces.',
  },
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Full-stack development services from concept to deployment with clean, scalable code.',
  },
  {
    icon: Image,
    title: 'Banner Design',
    desc: 'Eye-catching banner designs that capture attention and communicate your message.',
  },
  {
    icon: Gem,
    title: 'Branding',
    desc: 'Comprehensive branding solutions that create a memorable identity for your business.',
  },
  {
    icon: Hexagon,
    title: 'Icon Design',
    desc: 'Custom icon sets designed to enhance your digital products and user interfaces.',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    desc: 'Creative graphic design for marketing materials, social media, and print collateral.',
  },
  {
    icon: Search,
    title: 'SEO',
    desc: 'Search engine optimization strategies to boost your visibility and organic traffic.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">My Services</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg"
            >
              <service.icon className="mx-auto mb-4 h-10 w-10 text-primary" aria-hidden="true" />
              <h3 className="mb-2 text-lg font-semibold text-ink">{service.title}</h3>
              <p className="text-sm text-smoke">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
