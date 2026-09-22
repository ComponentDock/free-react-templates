import { Bed, Coffee, Car, Sparkles, Heart } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Friendly Service',
    description: 'Our staff provides warm and personalized hospitality.',
  },
  {
    icon: Coffee,
    title: 'Get Breakfast',
    description: 'Enjoy complimentary breakfast with fresh ingredients.',
  },
  {
    icon: Car,
    title: 'Transfer Services',
    description: 'Convenient airport transfer and local transportation.',
  },
  {
    icon: Sparkles,
    title: 'Suits & SPA',
    description: 'Relax and rejuvenate in our luxury spa facilities.',
  },
  { icon: Bed, title: 'Cozy Rooms', description: 'Comfortable and elegantly furnished rooms.' },
] as const

export function WelcomeServices() {
  return (
    <section id="about" className="bg-paper-alt py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            Welcome to RoxyGlow Hotel
          </h2>
          <p className="mt-2 text-lg text-mist">A New Vision of Luxury Hotel</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center border border-brand text-brand">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm text-mist">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
