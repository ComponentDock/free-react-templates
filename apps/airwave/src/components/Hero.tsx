import { BrandIcon } from './BrandIcon'

const platforms = [
  { name: 'Spotify', brand: 'spotify' },
  { name: 'Apple Podcasts', brand: 'apple' },
  { name: 'Google Podcasts', brand: 'google' },
  { name: 'YouTube', brand: 'youtube' },
] as const

const stats = [
  { value: '500+', label: 'Episodes Published' },
  { value: '2M+', label: 'Total Downloads' },
  { value: 'Top 50', label: 'Countries Reached' },
  { value: '4.8', label: 'Average Rating' },
] as const

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-950">
      {/* Decorative blurred blobs (from the demo's hero background). */}
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary-900/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 bottom-20 h-[300px] w-[300px] rounded-full bg-primary-900/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center lg:px-8 lg:py-28">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary-800 bg-primary-900/50 px-4 py-1.5 text-sm font-medium text-primary-300">
          <span className="h-2 w-2 rounded-full bg-primary-500" aria-hidden="true" />
          New Episode Every Tuesday
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Stories That{' '}
          <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
            Inspire Action
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
          Join us as we dive deep into the journeys of founders, creators, and innovators who are
          building the future — one conversation at a time.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#episodes"
            className="rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-500"
          >
            Listen Latest Episode
          </a>
          <a
            href="#newsletter"
            className="rounded-full border border-gray-700 bg-gray-800/50 px-6 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-800"
          >
            Subscribe
          </a>
        </div>

        <div className="mt-12">
          <p className="text-sm font-medium text-gray-500">Available on:</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href="#episodes"
                className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/60 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-gray-700 hover:text-white"
              >
                <BrandIcon name={platform.brand} />
                {platform.name}
              </a>
            ))}
          </div>
        </div>

        <dl
          data-testid="hero-stats"
          className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-3xl font-extrabold text-primary-500 lg:text-4xl">{stat.value}</dd>
              <dt className="mt-1 text-xs font-medium text-gray-500">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
