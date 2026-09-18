import { Wrench, Rocket, Bug } from 'lucide-react'

const features = [
  {
    icon: Wrench,
    title: 'Maintenance',
    description:
      'Comprehensive maintenance services to keep your industrial equipment running at peak performance with minimal downtime.',
    color: 'bg-accent-blue',
  },
  {
    icon: Rocket,
    title: 'Residential Service',
    description:
      'Specialized residential industrial solutions including HVAC, electrical, and plumbing for modern homes.',
    color: 'bg-accent-teal',
  },
  {
    icon: Bug,
    title: 'Commercial Service',
    description:
      'Full-scale commercial industrial services from installation to ongoing support for businesses of all sizes.',
    color: 'bg-accent-red',
  },
]

export function Features() {
  return (
    <section id="feature" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              {/* Hexagon icon */}
              <div
                className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center mb-6 rotate-0`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-ink mb-4">{feature.title}</h4>
              <p className="text-mist leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
