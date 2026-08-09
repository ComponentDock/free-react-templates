import {
  BadgePercent,
  CalendarCheck,
  Compass,
  Headphones,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: 'Safe & Secure Travel',
    description:
      'Your safety is our priority. All tours include comprehensive travel insurance and 24/7 emergency support.',
  },
  {
    icon: Compass,
    title: 'Expert Local Guides',
    description:
      'Experience destinations through the eyes of passionate local experts who share authentic insights.',
  },
  {
    icon: Sparkles,
    title: 'Curated Experiences',
    description:
      'Each tour is thoughtfully designed to balance must-see attractions with hidden gems.',
  },
  {
    icon: BadgePercent,
    title: 'Best Price Guarantee',
    description: "Find a lower price elsewhere? We'll match it and give you an additional 10% off.",
  },
  {
    icon: CalendarCheck,
    title: 'Flexible Booking',
    description:
      'Plans change, we understand. Enjoy free cancellation up to 30 days before departure.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our travel experts are always just a call away, wherever you are in the world.',
  },
]

export function Features() {
  return (
    <section id="about" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Travel with Confidence
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Your safety and satisfaction are our top priorities at every step of your journey.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-800"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-900/50 dark:text-primary-300">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
