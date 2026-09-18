import { Shield, Compass, Map, Headphones } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Safe Travel',
    description:
      'Your safety is our top priority. We ensure secure and reliable travel experiences worldwide.',
  },
  {
    icon: Compass,
    title: 'Diverse Destinations',
    description:
      'Explore over 500+ destinations across all continents with expert-curated itineraries.',
  },
  {
    icon: Map,
    title: 'Guided Tours',
    description:
      'Professional local guides who bring every destination to life with insider knowledge.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to assist you at every step of your journey.',
  },
] as const

export function Features() {
  return (
    <section id="features" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Why Choose Us
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-smoke">
          We make your travel dreams come true with unmatched service
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900/30">
                <feature.icon className="h-8 w-8 text-primary-400" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
