import { PenTool, Code2, ShoppingCart } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center px-8 py-10 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center border border-brand text-brand">
        {icon}
      </div>
      <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
      <p className="leading-relaxed text-white/70">{description}</p>
    </div>
  )
}

const services = [
  {
    icon: <PenTool className="h-7 w-7" />,
    title: 'Web & Mobile Design',
    description:
      'Crafting intuitive and visually stunning interfaces for web and mobile platforms that users love.',
  },
  {
    icon: <Code2 className="h-7 w-7" />,
    title: 'Web Development',
    description:
      'Building performant, accessible, and scalable web applications using modern technologies.',
  },
  {
    icon: <ShoppingCart className="h-7 w-7" />,
    title: 'E-commerce',
    description:
      'Creating seamless online shopping experiences that convert visitors into loyal customers.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-dark-brown py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">My Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
