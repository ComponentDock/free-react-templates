import { MapPin, Search, SlidersHorizontal } from 'lucide-react'

const categories = [
  'All Categories',
  'Technology',
  'Design',
  'Marketing',
  'Finance',
  'Healthcare',
  'Education',
  'Sales',
  'Engineering',
] as const

const trending = [
  'React Developer',
  'Product Manager',
  'Data Scientist',
  'UX Designer',
  'DevOps Engineer',
  'Marketing Lead',
] as const

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800 py-20 lg:py-32 dark:from-primary-900 dark:via-primary-950 dark:to-gray-950"
    >
      {/* Decorative floating blur circles */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 h-72 w-72 animate-hero-float rounded-full bg-white/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-24 h-80 w-80 animate-hero-float-reverse rounded-full bg-purple-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-1/4 h-64 w-64 animate-hero-float rounded-full bg-primary-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-900/50 dark:text-accent-300">
            2500+
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Find Your Dream Job
          </h1>
          <p className="mt-4 text-lg text-primary-100">
            Search thousands of opportunities from top companies worldwide. Your next career move
            starts here.
          </p>

          <form
            role="search"
            aria-label="Job search"
            onSubmit={(event) => event.preventDefault()}
            className="mt-8 flex flex-col gap-3 rounded-2xl bg-white p-4 text-left shadow-2xl sm:flex-row sm:items-center dark:bg-gray-900"
          >
            <label className="flex flex-1 items-center gap-3 rounded-xl bg-gray-100 px-4 py-3 dark:bg-gray-800">
              <Search className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              <input
                type="text"
                aria-label="Job title, keyword, or company"
                placeholder="Job title, keyword, or company"
                className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white"
              />
            </label>
            <label className="flex flex-1 items-center gap-3 rounded-xl bg-gray-100 px-4 py-3 dark:bg-gray-800">
              <MapPin className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              <input
                type="text"
                aria-label="City, state, or remote"
                placeholder="City, state, or remote"
                className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white"
              />
            </label>
            <select
              aria-label="Category"
              className="rounded-xl bg-gray-100 px-4 py-3 text-sm text-gray-900 outline-none dark:bg-gray-800 dark:text-white"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Search Jobs
            </button>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-100 transition-colors hover:text-white"
            >
              <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
              Advanced Filters
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm">
            <span className="text-primary-200">Trending:</span>
            {trending.map((job, index) => (
              <span key={job} className="flex items-center gap-2">
                {index > 0 && <span className="text-white/30">·</span>}
                <a href="#jobs" className="text-white/90 transition-colors hover:text-white">
                  {job}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
