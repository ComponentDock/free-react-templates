import { CheckCircle2, Hotel, MapPin, Navigation } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const features = [
  'State-of-the-art AV equipment',
  'High-speed WiFi throughout',
  'Multiple breakout rooms',
  'On-site catering',
  'Accessible facilities',
  'Public transit accessible',
]

const hotels = [
  { name: 'The St. Regis San Francisco', distance: '0.2 miles' },
  { name: 'San Francisco Marriott Marquis', distance: '0.1 miles' },
  { name: 'Hotel Vitale', distance: '0.5 miles' },
]

export function Venue() {
  return (
    <section id="venue" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            The Location
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Event{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Venue
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Located in the heart of San Francisco, Moscone Center is one of the largest convention
            centers on the West Coast.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
              Moscone Center
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              747 Howard Street
              <br />
              San Francisco, CA 94103
            </p>
            <a
              href="#venue"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-500 transition-colors hover:text-primary-600"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Directions
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Venue Features</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                <Hotel className="h-5 w-5 text-primary-500" aria-hidden="true" />
                Recommended Hotels
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Use code TECHSUMMIT32 for exclusive rates.
              </p>
            </div>
            <ButtonLink
              href="#venue"
              className="rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3 font-semibold text-white shadow-lg shadow-primary-500/25 transition-shadow hover:shadow-xl"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </ButtonLink>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {hotels.map((hotel) => (
              <li
                key={hotel.name}
                className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
              >
                <p className="font-semibold text-gray-900 dark:text-white">{hotel.name}</p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{hotel.distance}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
