import { Coffee, Car, Smile, Waves, Bed } from 'lucide-react'

const features = [
  {
    icon: Smile,
    title: 'Friendly Service',
    description: 'Our staff are dedicated to making your stay memorable.',
  },
  {
    icon: Coffee,
    title: 'Get Breakfast',
    description: 'Enjoy a complimentary breakfast each morning.',
  },
  {
    icon: Car,
    title: 'Transfer Services',
    description: 'Convenient airport transfer and shuttle service.',
  },
  { icon: Waves, title: 'Suits & SPA', description: 'Relax and rejuvenate at our luxury spa.' },
  {
    icon: Bed,
    title: 'Cozy Rooms',
    description: 'Comfortable rooms designed for ultimate relaxation.',
  },
]

export function WelcomeServices() {
  return (
    <section className="bg-light-alt py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-heading text-3xl font-bold text-ink md:text-4xl">
            Welcome to RoxyGlow Hotel
          </h2>
          <p className="text-lg text-brand">A New Vision of Luxury Hotel</p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center rounded bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <feature.icon className="mb-4 h-10 w-10 text-brand" />
              <h4 className="mb-2 font-heading text-base font-semibold text-ink">
                {feature.title}
              </h4>
              <p className="text-sm text-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
