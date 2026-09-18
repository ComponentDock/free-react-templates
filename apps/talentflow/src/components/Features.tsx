import { Handshake, Users, Zap } from 'lucide-react'

const features = [
  {
    icon: Handshake,
    title: 'Corporate Collaboration',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Users,
    title: 'Strategic Partners',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Zap,
    title: 'Infinite Posibilities',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export function Features() {
  return (
    <section className="relative pb-0 pt-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="-mt-28 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-sm bg-white p-8 shadow-lg">
              <feature.icon className="mb-4 h-10 w-10 text-primary-500" />
              <h3 className="mb-4 text-lg font-bold">{feature.title}</h3>
              <p className="mb-3 text-sm text-gray-500">{feature.description}</p>
              <a href="#" className="text-sm font-medium text-primary-500 hover:underline">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
