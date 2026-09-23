import { Search, ChevronDown } from 'lucide-react'

const locations = ['New York', 'San Francisco', 'London', 'Berlin', 'Tokyo']

export function Hero() {
  return (
    <section
      className="relative flex min-h-[600px] items-center bg-cover bg-center pt-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/jobscout-hero/1920/800)' }}
    >
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
        <div className="max-w-2xl">
          <h1
            className="mb-8 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Find the most exciting startup jobs
          </h1>
        </div>

        <form
          className="mt-8 flex w-full max-w-4xl flex-col gap-0 rounded bg-white shadow-lg md:flex-row"
          role="search"
        >
          <div className="relative flex-1 border-b border-gray-200 md:border-b-0 md:border-r">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="w-full border-0 py-5 pl-12 pr-4 text-gray-700 outline-none"
              aria-label="Job title or keyword"
            />
          </div>

          <div className="relative border-b border-gray-200 md:border-b-0 md:border-r">
            <select
              className="w-full appearance-none bg-transparent py-5 pl-4 pr-10 text-gray-500 outline-none md:w-48"
              aria-label="Location"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>

          <button
            type="submit"
            className="bg-brand px-10 py-5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            Find Job
          </button>
        </form>
      </div>
    </section>
  )
}
