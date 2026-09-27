import { Code, Palette, Megaphone } from 'lucide-react'
import type { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
        {icon}
      </div>
      <h4 className="mb-3 text-lg font-bold text-brand-dark">{title}</h4>
      <p className="text-sm leading-relaxed text-paragraph">{description}</p>
    </div>
  )
}

export function ServicesPanel() {
  const services = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Web Design',
      description:
        'Creating visually stunning and user-friendly interfaces that captivate audiences and drive engagement.',
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Development',
      description:
        'Building robust, scalable web applications with modern frameworks and clean, maintainable code.',
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: 'Branding',
      description:
        'Developing cohesive brand identities that communicate your values and resonate with your target market.',
    },
  ]

  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-brand-dark">My Services</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  )
}
