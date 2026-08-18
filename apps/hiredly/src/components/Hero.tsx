import { useState } from 'react'
import { Flag, PenLine, Search } from 'lucide-react'
import { defaultLocation, heroHeadline, heroLocations } from '../data'

type SearchResult = { keyword: string; location: string }

export function Hero() {
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState(defaultLocation)
  const [result, setResult] = useState<SearchResult | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setResult({ keyword, location })
  }

  return (
    <section aria-label="Job search hero" id="home" className="bg-white">
      <div className="grid min-h-[560px] lg:grid-cols-2">
        {/* Left: headline + search pill on a light image backdrop */}
        <div
          className="relative flex items-center bg-cover bg-center p-6 sm:p-12 lg:p-16"
          style={{
            backgroundImage:
              'linear-gradient(rgba(232, 241, 250, 0.92), rgba(232, 241, 250, 0.92)), url(https://picsum.photos/seed/hiredly-hero-bg/1000/800)',
          }}
        >
          <div className="max-w-xl">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[56px] lg:leading-[1.2]">
              {heroHeadline.split('best startup')[0]}
              <span className="text-brand">best startup</span>
              {heroHeadline.split('best startup')[1]}
            </h1>
            <p className="mt-6 max-w-md text-lg font-light text-ink/70">
              Find your next career move at companies that value what you do best.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-2 rounded-full bg-white p-2 shadow-lg sm:flex-row sm:items-center"
            >
              <label className="flex flex-1 items-center gap-2 px-4">
                <PenLine aria-hidden="true" className="size-5 shrink-0 text-muted" />
                <span className="sr-only">Job Title or keyword</span>
                <input
                  type="text"
                  aria-label="Job Title or keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Job Title or keyword"
                  className="w-full bg-transparent py-3 text-sm text-ink outline-none placeholder:text-muted"
                />
              </label>
              <label className="flex items-center gap-2 border-t border-hairline px-4 py-3 sm:border-l sm:border-t-0">
                <Flag aria-hidden="true" className="size-5 shrink-0 text-muted" />
                <span className="sr-only">Location</span>
                <select
                  aria-label="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent py-3 text-sm font-medium capitalize text-ink outline-none"
                >
                  {heroLocations.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                className="btn-gradient inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full px-8 text-base font-semibold text-white transition-colors"
              >
                <Search aria-hidden="true" className="size-5" />
                Search Job
              </button>
            </form>

            {result && (
              <p
                role="status"
                className="mt-6 inline-block rounded-[5px] bg-white/90 px-4 py-2 text-sm font-medium text-ink shadow-sm"
              >
                Searching for {result.keyword.trim() || 'all available jobs'} in {result.location} —
                we&apos;ll email you matching roles.
              </p>
            )}
          </div>
        </div>

        {/* Right: solid blue panel with the hero photo */}
        <div className="relative hidden items-center justify-center overflow-hidden bg-brand lg:flex">
          <img
            src="https://picsum.photos/seed/hiredly-hero-man/700/800"
            alt="Job seeker holding a tablet"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
