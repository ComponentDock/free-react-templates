import type { FormEvent } from 'react'
import { Search } from 'lucide-react'

/** Mountain-silhouette illustration band (lighter purple/pink peaks + faint circle). */
function MountainBand() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0">
      <div className="absolute right-[12%] bottom-24 h-40 w-40 rounded-full bg-accent-400/20 blur-2xl" />
      <svg viewBox="0 0 1440 260" preserveAspectRatio="none" className="block h-48 w-full sm:h-64">
        <path
          d="M0 260 L0 180 L140 120 L260 190 L420 90 L560 200 L720 110 L860 190 L1000 100 L1140 190 L1280 130 L1440 200 L1440 260 Z"
          fill="#8a46b8"
          opacity="0.55"
        />
        <path
          d="M0 260 L0 210 L180 160 L340 230 L520 150 L700 240 L900 170 L1080 235 L1260 180 L1440 220 L1440 260 Z"
          fill="#c8a3e2"
          opacity="0.7"
        />
        <path
          d="M0 260 L0 235 L220 200 L420 250 L640 210 L860 255 L1080 225 L1320 250 L1440 240 L1440 260 Z"
          fill="#ff87a3"
          opacity="0.55"
        />
      </svg>
    </div>
  )
}

/** Full-viewport hero: purple gradient, eyebrow, headline, domain search form. */
export function Hero() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-primary-800 via-primary-900 to-primary-950"
    >
      <MountainBand />

      <div className="relative z-10 mx-auto max-w-3xl px-4 pt-28 pb-40 text-center sm:pt-32">
        <p className="text-sm font-medium tracking-widest text-accent-500 uppercase">
          The Best Domain &amp; Hosting Provider In The Area
        </p>
        <h1 className="mt-5 text-4xl leading-tight font-bold text-white sm:text-6xl">
          Go Big with your next Domain
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="domain-search" className="sr-only">
            Find your domain
          </label>
          <input
            id="domain-search"
            type="text"
            placeholder="Find your domain"
            className="h-14 w-full rounded-md border-0 bg-white px-6 text-base text-primary-950 placeholder:text-mute-400 focus:ring-2 focus:ring-accent-500 focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-primary-600 px-10 text-base font-medium text-white transition-colors hover:bg-primary-500"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
            search
          </button>
        </form>
      </div>
    </section>
  )
}
