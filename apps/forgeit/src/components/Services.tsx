import { Monitor, ShoppingCart, AppWindow, Palette, PenTool, Smartphone } from 'lucide-react'

interface ServiceItemProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceItem({ icon, title, description }: ServiceItemProps) {
  return (
    <div className="flex gap-4">
      <span className="mt-1 shrink-0 text-brand">{icon}</span>
      <div>
        <h3 className="mb-2 text-lg font-bold text-dark">{title}</h3>
        <p className="mb-2 text-sm text-body">{description}</p>
        <a href="#" className="text-sm font-medium text-brand hover:underline">
          Learn More
        </a>
      </div>
    </div>
  )
}

const SERVICES: ServiceItemProps[] = [
  {
    icon: <Monitor size={28} />,
    title: 'Web Design',
    description:
      'Beautiful, responsive websites that capture your brand essence and engage visitors.',
  },
  {
    icon: <ShoppingCart size={28} />,
    title: 'eCommerce',
    description: 'Full-featured online stores optimized for conversions and user experience.',
  },
  {
    icon: <AppWindow size={28} />,
    title: 'Web Applications',
    description: 'Custom web apps built with modern frameworks for maximum performance.',
  },
  {
    icon: <Palette size={28} />,
    title: 'Branding',
    description: 'Comprehensive brand identity systems that tell your unique story.',
  },
  {
    icon: <PenTool size={28} />,
    title: 'Copy Writing',
    description: 'Compelling copy that communicates your message and drives action.',
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
  },
]

export function Services() {
  return (
    <section id="services-section" className="border-b py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Our Services</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceItem key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
