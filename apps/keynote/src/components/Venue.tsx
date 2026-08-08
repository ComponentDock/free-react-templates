import { BedDouble, Building2, Check, MapPin } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const features = [
  'Historic landmark with modern AV',
  '100Gbps dedicated internet',
  'Multiple breakout spaces',
  'On-site production kitchen',
  'Fully accessible venue',
  'BART & Muni accessible',
]

const hotels = ['The Foundry Hotel', 'Mission Bay Inn', 'Civic Grand', 'SoMa Lofts']

export function Venue() {
  return (
    <section id="venue" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              The Armory
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
              A stunning industrial venue in the heart of San Francisco&apos;s Mission District,
              transformed into a neural wonderland for three days of AI innovation.
            </p>
            <p className="mt-4 flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <MapPin className="h-5 w-5 text-primary-500" aria-hidden="true" />
              1800 Mission Street, San Francisco, CA 94103
            </p>
            <ButtonLink
              href="https://maps.google.com/?q=1800+Mission+Street+San+Francisco"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 rounded-full px-6 py-2.5 text-sm"
            >
              Get Directions
            </ButtonLink>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-gray-900 dark:text-white">
              <Building2 className="h-5 w-5 text-primary-500" aria-hidden="true" />
              Nearby Hotels
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Partner rates available at these properties — mention Keynote when booking.
            </p>
            <ul className="mt-6 space-y-3">
              {hotels.map((hotel) => (
                <li
                  key={hotel}
                  className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                >
                  {hotel}
                  <BedDouble className="h-4 w-4 text-gray-400" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
