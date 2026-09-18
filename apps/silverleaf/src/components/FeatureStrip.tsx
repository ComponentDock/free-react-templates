import { Heart, Users, Stethoscope } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const features = [
  {
    icon: Heart,
    subtitle: 'Try Our Services',
    title: 'Independent Living',
    description:
      'Enjoy a vibrant community with amenities and activities designed for active seniors.',
  },
  {
    icon: Users,
    subtitle: 'Try Our Services',
    title: 'Senior Care',
    description: 'Personalized care plans that respect individual needs and promote well-being.',
  },
  {
    icon: Stethoscope,
    subtitle: 'Try Our Services',
    title: 'Patient Care',
    description: 'Comprehensive medical support from our experienced healthcare professionals.',
  },
]

export function FeatureStrip() {
  return (
    <section id="services" className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={cn(
                  'relative cursor-pointer border-t-[3px] border-transparent bg-white p-8 text-center transition-all hover:shadow-md',
                  i === 0 && 'border-brand',
                )}
              >
                <div className="mx-auto mb-4 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon size={36} className="text-brand" />
                </div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {feature.subtitle}
                </p>
                <h3 className="mb-3 font-display text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{feature.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-brand hover:text-brand-dark"
                >
                  Learn More
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
