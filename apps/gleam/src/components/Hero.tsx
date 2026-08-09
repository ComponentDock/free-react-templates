import { Phone, Star } from 'lucide-react'
import { QuoteCalculator } from './QuoteCalculator'

const stats = [
  { value: '5000+', label: 'Homes Cleaned' },
  { value: '4.9★', label: 'Star Rating' },
  { value: '100%', label: 'Satisfaction' },
  { value: '200+', label: '5-Star Reviews' },
] as const

export function Hero() {
  return (
    <section id="home" className="bg-white dark:bg-primary-900">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-1.5 rounded-full bg-primary-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-700 dark:bg-primary-900/60 dark:text-primary-200">
            <Star className="h-3.5 w-3.5" aria-hidden="true" />
            Instant Quote
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Professional Cleaning, Guaranteed Spotless
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 dark:text-primary-100/90">
            Trusted by thousands of homeowners and businesses in Austin. Our insured,
            background-checked cleaning professionals use eco-friendly products to deliver a
            spotless space every single time.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#quote"
              className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+15558675309"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-primary-500 hover:text-primary-600 dark:border-gray-600 dark:text-white dark:hover:border-primary-400 dark:hover:text-primary-300"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call (555) 867-5309
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs font-medium text-gray-500 dark:text-primary-200/80">
                  {stat.label}
                </dt>
                <dd className="mt-0.5 text-2xl font-extrabold text-gray-900 dark:text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <QuoteCalculator />
      </div>
    </section>
  )
}
