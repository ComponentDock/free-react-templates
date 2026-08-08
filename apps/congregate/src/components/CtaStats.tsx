import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '10+', label: 'Years Serving Austin' },
  { value: '500+', label: 'Weekly Attendance' },
  { value: '50+', label: 'Small Groups' },
] as const

export function CtaStats() {
  return (
    <section id="give" className="relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-charcoal-900 dark:text-white sm:text-4xl">
          Your story isn&apos;t over.
        </h2>
        <p className="mt-4 text-lg text-charcoal-600 dark:text-charcoal-300">
          No matter what you&apos;ve been through, there&apos;s hope for a better tomorrow.
          We&apos;d love to be part of your journey.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#service-times"
            className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-600"
          >
            Plan Your Visit
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
          <a
            href="#watch"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-charcoal-300 px-6 py-3 font-semibold text-charcoal-700 transition-colors hover:border-charcoal-400 hover:bg-charcoal-50 dark:border-charcoal-500 dark:text-charcoal-300 dark:hover:border-charcoal-500 dark:hover:bg-charcoal-800"
          >
            Watch a Message
          </a>
        </div>

        <dl className="mt-16 grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse items-center">
              <dd className="text-4xl font-bold text-amber-500">{stat.value}</dd>
              <dt className="text-sm font-medium text-charcoal-600 dark:text-charcoal-300">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
