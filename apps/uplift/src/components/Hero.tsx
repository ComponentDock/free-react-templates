import { HeartHandshake, Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '50,000+', label: 'Lives Changed' },
  { value: '120+', label: 'Communities' },
  { value: '15', label: 'Countries' },
  { value: '$10M+', label: 'Raised' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-primary-50 to-white py-20 pt-32 lg:py-28 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-700 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
          <HeartHandshake className="h-4 w-4" aria-hidden="true" />
          Together, We Make a Difference
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
          Change Lives, One <span className="text-accent-500 dark:text-accent-400">Community</span>{' '}
          at a Time
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          We empower communities through education, healthcare and opportunity — one family, one
          village, one nation at a time.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#donate"
            className="rounded-full bg-primary-600 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700"
          >
            <HeartHandshake className="h-5 w-5" aria-hidden="true" />
            Donate Now
          </ButtonLink>
          <a
            href="#impact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-lg font-bold text-gray-900 shadow-lg shadow-gray-900/10 transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            <Play className="h-5 w-5" aria-hidden="true" />
            See Our Impact
          </a>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
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
          src="https://picsum.photos/seed/uplift-1/1200/675"
          alt="Smiling children in an uplifted community"
          loading="eager"
          className="mx-auto mt-14 w-full max-w-4xl rounded-3xl object-cover shadow-2xl"
        />
      </div>
    </section>
  )
}
