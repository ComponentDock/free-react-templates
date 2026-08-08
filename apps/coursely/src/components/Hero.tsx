import { ArrowRight, BadgeCheck, Clock3, ShieldCheck, Star } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '50K+', label: 'Active Students' },
  { value: '500+', label: 'Expert Instructors' },
  { value: '2,500+', label: 'Quality Courses' },
  { value: '95%', label: 'Success Rate' },
]

const trust = [
  { icon: Star, label: '4.8 average rating' },
  { icon: ShieldCheck, label: '30-day money-back guarantee' },
  { icon: Clock3, label: 'Lifetime access' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-primary-50 to-white py-20 pt-32 lg:py-28 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-primary-700 shadow-sm ring-1 ring-primary-100 dark:bg-gray-800 dark:text-primary-300 dark:ring-gray-700">
          <BadgeCheck className="h-4 w-4" aria-hidden="true" />
          Trusted by 50,000+ learners worldwide
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
          Learn Without <span className="text-primary-600 dark:text-primary-400">Limits</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Master new skills with world-class instructors. Access thousands of courses in technology,
          business, design, and more.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#courses"
            className="rounded-full bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700"
          >
            Explore Courses
          </ButtonLink>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            View Pricing
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trust.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              <item.icon
                className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                aria-hidden="true"
              />
              {item.label}
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-primary-600 dark:text-primary-400">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#categories"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary-100 px-5 py-2.5 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-200 dark:bg-primary-900/40 dark:text-primary-300 dark:hover:bg-primary-900/60"
        >
          Browse Categories
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
