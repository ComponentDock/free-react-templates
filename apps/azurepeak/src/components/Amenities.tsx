import { Waves, Sparkles, UtensilsCrossed, Dumbbell, Umbrella, Bell } from 'lucide-react'

const amenities = [
  {
    title: 'Infinity Pool',
    description: 'A stunning infinity-edge pool overlooking the ocean with a poolside bar.',
    icon: Waves,
  },
  {
    title: 'Full-Service Spa',
    description: 'Indulge in rejuvenating treatments and massages in our world-class spa.',
    icon: Sparkles,
  },
  {
    title: 'Fine Dining',
    description: 'Savor exquisite cuisine crafted by our award-winning chefs.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Fitness Center',
    description: 'State-of-the-art equipment and personal training services available 24/7.',
    icon: Dumbbell,
  },
  {
    title: 'Private Beach',
    description: 'Exclusive beach access with cabanas, towels, and attentive service.',
    icon: Umbrella,
  },
  {
    title: 'Concierge',
    description: 'Our dedicated concierge team ensures every detail of your stay is perfect.',
    icon: Bell,
  },
]

export function Amenities() {
  return (
    <section id="amenities" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            What We Offer
          </p>
          <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Our Amenities
          </h2>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity) => {
            const Icon = amenity.icon
            return (
              <div key={amenity.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-800/10 dark:bg-blue-400/10">
                  <Icon
                    className="h-8 w-8 text-blue-800 dark:text-blue-400"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-gray-900 dark:text-white">
                  {amenity.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {amenity.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
