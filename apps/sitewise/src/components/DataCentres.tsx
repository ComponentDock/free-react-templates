import { MapPin } from 'lucide-react'
import { dataCentres } from '../data'

/** Stylized world-map graphic (dot grid + continent shapes). */
function WorldMap() {
  return (
    <svg
      viewBox="0 0 1200 480"
      role="img"
      aria-label="Stylized world map showing Sitewise data centre regions"
      className="mx-auto h-auto w-full max-w-4xl"
    >
      <g fill="none" stroke="#8a46b8" strokeWidth="2">
        <circle cx="180" cy="150" r="90" />
        <circle cx="260" cy="250" r="70" />
        <circle cx="600" cy="180" r="110" />
        <circle cx="700" cy="280" r="85" />
        <circle cx="980" cy="330" r="36" />
        <circle cx="360" cy="360" r="48" />
      </g>
      <g fill="#8a46b8" opacity="0.28">
        <ellipse cx="200" cy="200" rx="150" ry="120" />
        <ellipse cx="640" cy="230" rx="260" ry="130" />
        <ellipse cx="1010" cy="340" rx="60" ry="40" />
      </g>
      <g fill="#00d363">
        <circle cx="260" cy="250" r="7" />
        <circle cx="600" cy="180" r="7" />
        <circle cx="700" cy="280" r="7" />
        <circle cx="980" cy="330" r="7" />
      </g>
    </svg>
  )
}

/** "Our Data Centres" — map graphic + four location cards. */
export function DataCentres() {
  return (
    <section id="data-centres" className="relative overflow-hidden bg-ice-50 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-normal text-primary-950">Our Data Centres</h2>
          <p className="mt-4 text-base leading-7 text-mute-500">
            Your domain control panel is designed for ease-of-use and allows for all aspects of your
            domains.
          </p>
        </div>

        <div className="mt-10">
          <WorldMap />
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dataCentres.map((centre) => (
            <article key={centre.city} className="rounded-md border border-line bg-white p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ico-purple/10 text-ico-purple">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-medium text-primary-950">
                {centre.city}, {centre.country}
              </h3>
              <p className="mt-3 text-sm leading-6 text-mute-500">{centre.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
