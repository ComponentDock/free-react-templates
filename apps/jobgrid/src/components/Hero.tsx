import { Search, MapPin, ChevronDown, Pencil } from 'lucide-react'

const popularTags = [
  '#User experience designer',
  '#Marketing',
  '#Programmer',
  '#Finance',
  '#UI designer',
] as const

export function Hero() {
  return (
    <section className="bg-bg-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find your dream job.
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            We have thousands of jobs waiting for you. Start your career journey today.
          </p>
        </div>

        {/* Search form */}
        <form
          className="mx-auto mt-10 max-w-4xl rounded-xl bg-white p-4 shadow-xl sm:p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-12">
            {/* Keyword */}
            <div className="relative sm:col-span-4">
              <Pencil className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Job keyword"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>

            {/* Location */}
            <div className="relative sm:col-span-4">
              <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>

            {/* Category select */}
            <div className="relative sm:col-span-2">
              <select className="w-full appearance-none rounded-lg border border-gray-200 bg-gray-50 py-3 pl-4 pr-8 text-sm text-gray-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand">
                <option value="">Category</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="programming">Programming</option>
                <option value="finance">Finance</option>
                <option value="telecom">Telecommunication</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Search button */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue sm:w-full"
              >
                <Search className="h-4 w-4" />
                Search
              </button>
            </div>
          </div>
        </form>

        {/* Popular tags */}
        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-medium text-gray-400">Popular:</span>
          {popularTags.map((tag) => (
            <a
              key={tag}
              href="#"
              className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-gray-300 transition-colors hover:bg-white/20 hover:text-white"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
