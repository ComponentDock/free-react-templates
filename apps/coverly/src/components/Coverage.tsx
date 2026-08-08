import { Briefcase, Car, HeartPulse, Home, Shield, Umbrella } from 'lucide-react'

const coverages = [
  {
    icon: Car,
    title: 'Auto Insurance',
    blurb:
      'Liability, collision, and comprehensive coverage that keeps you moving with confidence on the road.',
  },
  {
    icon: Home,
    title: 'Home Insurance',
    blurb:
      'Protection for your house and everything in it — from the foundation to the family heirlooms.',
  },
  {
    icon: HeartPulse,
    title: 'Life Insurance',
    blurb:
      'Flexible life plans from $15/month that give your family financial security when it matters most.',
  },
  {
    icon: Shield,
    title: 'Health Insurance',
    blurb:
      'Individual and family health plans with access to top-rated providers and preventive care.',
  },
  {
    icon: Briefcase,
    title: 'Business Insurance',
    blurb:
      'General liability, property, and workers comp tailored to your industry and company size.',
  },
  {
    icon: Umbrella,
    title: 'Umbrella Insurance',
    blurb: 'Extra liability protection beyond your standard policies. Bundle and save up to 25%.',
  },
] as const

export function Coverage() {
  return (
    <section id="coverage" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
            Coverage Options
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Insurance for Every Need
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Whether you are protecting a car, a home, a family, or a business — we have a plan built
            around your life.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coverages.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600/10 text-primary-600 dark:bg-primary-600/20 dark:text-primary-400">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {item.blurb}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
