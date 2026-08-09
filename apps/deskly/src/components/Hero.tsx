import { Play, Star } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '500+', label: 'Members' },
  { value: '3', label: 'Locations' },
  { value: '95%', label: 'Occupancy' },
  { value: '4.9', label: 'Google Rating' },
] as const

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-primary-50 to-white pb-16 pt-28 lg:pb-24 lg:pt-40 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-800 dark:border-primary-800 dark:bg-primary-900/40 dark:text-primary-300">
          <Star className="h-4 w-4 text-primary-600" aria-hidden="true" />
          Austin&apos;s Premier Coworking Space
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
          Where Great Work{' '}
          <span className="text-primary-600 dark:text-primary-400">Happens Together</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Premium coworking spaces designed for productivity, creativity, and community. Flexible
          desks, private offices, and meeting rooms in the heart of the city.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#contact"
            className="rounded-full bg-primary-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-primary-600/30 transition-colors hover:bg-primary-700"
          >
            Book a Free Tour
          </ButtonLink>
          <ButtonLink
            href="#pricing"
            className="rounded-full border-2 border-secondary-700 bg-transparent px-7 py-3 text-base font-semibold text-secondary-700 transition-colors hover:bg-secondary-700 hover:text-white dark:border-secondary-500 dark:text-secondary-500 dark:hover:bg-secondary-500 dark:hover:text-gray-950"
          >
            View Plans
          </ButtonLink>
          <ButtonLink
            href="#about"
            className="gap-2 rounded-full bg-transparent px-5 py-3 text-base font-semibold text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-300"
          >
            <Play className="h-5 w-5 fill-current" aria-hidden="true" />
            Watch Demo
          </ButtonLink>
        </div>

        <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dd className="font-display text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
                {stat.value}
              </dd>
              <dt className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>

        <img
          src="https://picsum.photos/seed/deskly-hero/1600/800"
          alt="Bright coworking interior with desks and lounge seating"
          width={1600}
          height={800}
          className="mt-14 w-full rounded-2xl object-cover shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800"
        />
      </div>
    </section>
  )
}
