import { Sun, Droplets, Factory, Home, Trash2, Building } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="rounded border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
      <Icon className="mx-auto mb-4 text-gold-400" size={40} />
      <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
      <p className="mb-4 text-sm text-gray-500">{description}</p>
      <a href="#appointment" className="text-sm font-semibold text-gold-400 hover:underline">
        Get Started
      </a>
    </div>
  )
}

const services = [
  {
    icon: Sun,
    title: 'Skylights',
    description:
      'Bring natural light into your home with our premium skylight installation services.',
  },
  {
    icon: Droplets,
    title: 'Waterproofing',
    description: 'Protect your property from water damage with our expert waterproofing solutions.',
  },
  {
    icon: Factory,
    title: 'Industrial Roofing',
    description:
      'Heavy-duty roofing systems designed for warehouses, factories, and industrial facilities.',
  },
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete residential roofing services from repair to full installation.',
  },
  {
    icon: Trash2,
    title: 'Gutter Cleaning',
    description: 'Keep your gutters clean and flowing with our thorough maintenance service.',
  },
  {
    icon: Building,
    title: 'Commercial Roofing',
    description: 'Reliable roofing solutions for commercial buildings of all sizes.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our Best Services</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
