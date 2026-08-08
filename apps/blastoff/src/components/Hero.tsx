import { Play, Rocket } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '2,000+', label: 'Beta Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '$2.5M', label: 'Raised' },
  { value: '4.9', label: 'Rating' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-primary-50 to-white py-20 pt-32 lg:py-28 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
          <Rocket className="h-4 w-4" aria-hidden="true" />
          Now in Beta — 2,000+ on the waitlist
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
          Ship products <span className="text-primary-600 dark:text-primary-400">10x faster</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          The modern development platform that helps startups go from idea to production in minutes
          — not months.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#waitlist"
            className="rounded-lg bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700"
          >
            Join the Waitlist
          </ButtonLink>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            <Play className="h-5 w-5" aria-hidden="true" />
            See it in action
          </a>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
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

        <img
          src="https://picsum.photos/seed/blastoff-1/1200/675"
          alt="Blastoff dashboard analytics mockup"
          loading="eager"
          className="mx-auto mt-14 w-full max-w-4xl rounded-2xl object-cover shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800"
        />
      </div>
    </section>
  )
}
