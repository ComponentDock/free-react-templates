import { Heart, BookOpen, Users } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface ServicesProps {
  className?: string
}

const services = [
  {
    icon: Heart,
    title: 'Donation',
    description: 'We help collect and distribute donations to those in need across the globe.',
  },
  {
    icon: BookOpen,
    title: 'Education',
    description:
      'Providing educational resources and opportunities for underprivileged communities.',
  },
  {
    icon: Users,
    title: 'Volunteering',
    description: 'Connecting passionate volunteers with organizations making a real difference.',
  },
]

export function Services({ className }: ServicesProps) {
  return (
    <section id="services" className={cn('py-20 md:py-28 bg-white', className)}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-heading mb-4">
            Our Services
          </h2>
          <p className="font-body text-lg text-body max-w-xl mx-auto">
            We offer a range of services to support our mission of helping others
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand/10 flex items-center justify-center">
                <service.icon className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-heading text-xl font-medium text-heading mb-3">
                {service.title}
              </h3>
              <p className="font-body text-body">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
