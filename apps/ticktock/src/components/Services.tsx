import { User, Briefcase, Headphones, Rocket, Diamond, MessageCircle } from 'lucide-react'
import type { ReactNode } from 'react'

interface ServiceProps {
  icon: ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-primary-500">{icon}</span>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}

const services = [
  {
    icon: <User className="h-5 w-5" />,
    title: 'Expert Technicians',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: 'Professional Service',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: 'Great Support',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: 'Technical Skills',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
  },
  {
    icon: <Diamond className="h-5 w-5" />,
    title: 'Highly Recommended',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: 'Positive Reviews',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            Some Features That Made Us Unique
          </h2>
          <p className="text-gray-500">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
