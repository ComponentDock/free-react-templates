import { Dumbbell, MapPin, Package } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const offers = [
  {
    icon: Dumbbell,
    title: 'Regular Exercise',
    description:
      'Our trainers design a personalized exercise routine tailored to your goals, ensuring consistent progress and long-term results.',
  },
  {
    icon: MapPin,
    title: 'Training on the go',
    description:
      'Access workout plans and live sessions from anywhere. Stay on track with mobile-friendly training wherever life takes you.',
  },
  {
    icon: Package,
    title: 'Body Building Packages',
    description:
      'Comprehensive packages designed for serious bodybuilders, including nutrition guidance, strength training, and recovery plans.',
  },
] as const

export function Offer() {
  return (
    <section id="offer" aria-label="What we offer" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink">
          We care about what we offer
        </h2>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => {
            const Icon = offer.icon
            return (
              <div
                key={offer.title}
                className={cn(
                  'rounded border border-gray-100 bg-mist p-8 text-center',
                  'transition-shadow hover:shadow-lg',
                )}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-400 text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-ink">{offer.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-smoke">{offer.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
