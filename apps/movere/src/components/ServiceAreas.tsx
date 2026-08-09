import { Clock, MapPin } from 'lucide-react'
import { Reveal } from './Reveal'

const localMoves = [
  { city: 'Chicago Metro', time: '~1 hr' },
  { city: 'Milwaukee', time: '~1.5 hrs' },
  { city: 'Indianapolis', time: '~3 hrs' },
  { city: 'Detroit', time: '~4 hrs' },
  { city: 'St. Louis', time: '~5 hrs' },
  { city: 'Minneapolis', time: '~6 hrs' },
] as const

const longDistance = [
  { route: 'Chicago → New York', miles: '~790 mi' },
  { route: 'Chicago → Los Angeles', miles: '~2,015 mi' },
  { route: 'Chicago → Dallas', miles: '~920 mi' },
  { route: 'Chicago → Denver', miles: '~1,000 mi' },
  { route: 'Chicago → Atlanta', miles: '~720 mi' },
  { route: 'Chicago → Miami', miles: '~1,380 mi' },
] as const

export function ServiceAreas() {
  return (
    <section id="areas" className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Service Areas
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            We Move You Anywhere
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-gray-600 dark:text-gray-400">
            Serving the greater Midwest with daily local routes and nationwide long-distance
            coverage from our Chicago hub.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950 sm:p-8">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                <MapPin
                  className="h-5 w-5 text-primary-600 dark:text-primary-400"
                  aria-hidden="true"
                />
                Local Moves
              </h3>
              <ul className="mt-5 space-y-3">
                {localMoves.map((move) => (
                  <li
                    key={move.city}
                    className="flex items-center justify-between gap-4 rounded-xl bg-gray-50 px-4 py-3 dark:bg-gray-900"
                  >
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {move.city}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      {move.time} drive
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950 sm:p-8">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                <MapPin className="h-5 w-5 text-accent-500" aria-hidden="true" />
                Long Distance
              </h3>
              <ul className="mt-5 space-y-3">
                {longDistance.map((move) => (
                  <li
                    key={move.route}
                    className="flex items-center justify-between gap-4 rounded-xl bg-gray-50 px-4 py-3 dark:bg-gray-900"
                  >
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {move.route}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{move.miles}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
