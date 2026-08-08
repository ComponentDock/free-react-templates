import { Award, CalendarCheck, Package, Sofa } from 'lucide-react'

const features = [
  {
    title: 'Master Craftsmanship',
    blurb:
      'Our barbers train for years mastering classic and modern techniques. Every cut is a work of art.',
    icon: Award,
  },
  {
    title: 'Premium Products',
    blurb:
      'We use only the finest grooming products from brands like Baxter of California and Reuzel.',
    icon: Package,
  },
  {
    title: 'Easy Online Booking',
    blurb:
      'Book your appointment in seconds with our online system. Choose your barber, service, and time.',
    icon: CalendarCheck,
  },
  {
    title: 'The Right Atmosphere',
    blurb:
      'Cold drinks, great music, and good conversation. Our shop is your escape from the daily grind.',
    icon: Sofa,
  },
] as const

export function WhyUs() {
  return (
    <section id="why-us" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            The BarberKraft Difference
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We're more than a barbershop. We're a grooming destination where every detail matters.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-800"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 text-accent-600 dark:bg-accent-900/40 dark:text-accent-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {feature.blurb}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
