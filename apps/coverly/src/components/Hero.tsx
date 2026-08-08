import { BadgeCheck } from 'lucide-react'
import { Typewriter } from './Typewriter'

const heroStats = [
  { value: '50,000+', label: 'Clients Protected' },
  { value: '98%', label: 'Claim Approval' },
  { value: 'A+', label: 'AM Best Rating' },
  { value: '24/7', label: 'Support Available' },
] as const

const trustBadges = ['BBB Accredited', 'AM Best Rated', 'Licensed in 50 States'] as const

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-primary-50 to-white py-20 lg:py-28 dark:from-gray-950 dark:to-gray-950"
    >
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
          Trusted by 50,000+ Families
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
          Protection You Can <Typewriter words={['Count On', 'Depend On', 'Trust In', 'Rely On']} />
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Comprehensive insurance coverage tailored to your life. From auto and home to life and
          health, we make protecting what matters most simple, affordable, and stress-free.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 text-base font-medium text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2 dark:shadow-primary-900/40"
          >
            Get Free Quote
          </a>
          <a
            href="tel:+15555678901"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Call (555) 567-8901
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-bold text-primary-600 lg:text-3xl dark:text-primary-400">
                {stat.value}
              </dd>
              <dd className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {trustBadges.map((badge) => (
            <li
              key={badge}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent-100 px-3 py-1 text-sm font-medium text-accent-700 dark:bg-accent-900/50 dark:text-accent-300"
            >
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
