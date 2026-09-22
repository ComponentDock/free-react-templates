import { Phone, MapPin, UtensilsCrossed, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Phone,
    title: 'Phone Booking',
    description:
      'Experience our premium phone booking service. Call us anytime to make a reservation for your perfect stay.',
  },
  {
    icon: MapPin,
    title: 'Locations',
    description:
      'Explore our stunning beachfront location with breathtaking ocean views and pristine sandy beaches.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant',
    description:
      'Indulge in world-class dining with our award-winning restaurant featuring fresh local cuisine.',
  },
  {
    icon: Sparkles,
    title: 'Spa',
    description:
      'Rejuvenate your body and soul at our luxury spa with relaxing treatments and wellness programs.',
  },
] as const

export function Features() {
  return (
    <section id="rooms" aria-label="Features" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-charcoal">Our Services</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          Discover the exceptional amenities and services that make your stay unforgettable.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-lg bg-gray-50 p-6 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-charcoal">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
