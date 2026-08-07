import { ArrowRight, HeartHandshake } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const tiles = [
  {
    title: 'A Volunteer',
    blurb:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    title: 'A Volunteer',
    blurb:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    title: 'A Volunteer',
    blurb:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.',
  },
] as const

const stats = [
  { value: '50k', label: 'Total Volunteers' },
  { value: '100k', label: 'Successful Missions' },
] as const

export function Features() {
  return (
    <section id="features" aria-label="Features" className="bg-mist py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="grid gap-6 sm:grid-cols-2">
          {tiles.map((tile) => (
            <div key={tile.title} className="rounded-md bg-white p-7 shadow-sm dark:bg-gray-900">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-400 dark:bg-primary-900/40">
                <HeartHandshake className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink dark:text-gray-100">
                {tile.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke dark:text-gray-400">
                {tile.blurb}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
            Featured
          </h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus com odo
            viverra maecenas accumsan lacus vel facilisis accumsan.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-bold text-primary-400">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-smoke dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <ButtonLink
            href="#pricing"
            className="mt-9 inline-flex rounded-md bg-gradient-to-r from-primary-500 to-accent-400 px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Learn More
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
