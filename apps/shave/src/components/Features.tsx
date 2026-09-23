import { Users, Award, Phone, Rocket, Gem, ThumbsUp } from 'lucide-react'

const features = [
  {
    title: 'Expert Technicians',
    description: 'Our skilled barbers bring years of experience and training to every appointment.',
    icon: Users,
  },
  {
    title: 'Professional Service',
    description:
      'We deliver top-quality grooming services in a comfortable and welcoming environment.',
    icon: Award,
  },
  {
    title: 'Great Support',
    description: 'Our team is always ready to help you find the perfect style for any occasion.',
    icon: Phone,
  },
  {
    title: 'Technical Skills',
    description:
      "Stay current with the latest trends and techniques in men's grooming and styling.",
    icon: Rocket,
  },
  {
    title: 'Highly Recommended',
    description: 'Trusted by hundreds of satisfied clients who keep coming back for quality.',
    icon: Gem,
  },
  {
    title: 'Positive Reviews',
    description: 'Consistently praised for our attention to detail and friendly service.',
    icon: ThumbsUp,
  },
]

export function Features() {
  return (
    <section id="features" className="bg-section-light py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Some Features that Made us Unique</h2>
          <p className="mt-2 text-gray-500">Why clients choose Shave over others.</p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title}>
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-pink-400" aria-hidden="true" strokeWidth={1.5} />
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
