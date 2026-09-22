import { TreePine, UserCheck, Smile } from 'lucide-react'

const services = [
  {
    icon: TreePine,
    title: 'Outdoor Activities',
    description:
      'Practice yoga in beautiful outdoor settings surrounded by nature, fresh air, and serene environments.',
  },
  {
    icon: UserCheck,
    title: 'Experienced Trainers',
    description:
      'Learn from certified and experienced yoga instructors who guide you through every pose with care.',
  },
  {
    icon: Smile,
    title: 'Happy Environment',
    description:
      'Join a welcoming community that fosters positivity, mindfulness, and personal growth.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16 sm:py-20" data-testid="services">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-1 text-center font-display text-2xl text-ember-400">What We Offer</p>
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage-400/10">
                <Icon className="h-7 w-7 text-sage-400" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
