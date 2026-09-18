import { HardHat, Ruler, Truck, Users } from 'lucide-react'

const services = [
  {
    icon: HardHat,
    title: 'Construction Management',
    description:
      'Expert oversight of your construction projects from planning through completion, ensuring quality and timeline adherence.',
  },
  {
    icon: Ruler,
    title: 'Pre-Construction Services',
    description:
      'Comprehensive planning and design services to set your project up for success before ground is broken.',
  },
  {
    icon: Truck,
    title: 'Construction Services',
    description:
      'Full-service construction capabilities including general contracting, design-build, and project management.',
  },
  {
    icon: Users,
    title: 'General Constructing',
    description:
      'End-to-end construction solutions tailored to your specific needs, delivered by our experienced team.',
  },
]

interface ServicesProps {
  className?: string
}

export function Services({ className }: ServicesProps) {
  return (
    <section id="services" className={`py-20 ${className ?? ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Your Main Features &amp; Benefits</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-50 text-brand-500 rounded-full mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
