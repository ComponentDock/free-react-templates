import { Search } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function SearchPackage() {
  return (
    <section className="py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold leading-snug text-gray-900 dark:text-white sm:text-4xl">
              Search suitable and affordable plan for your tour
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Make she'd moved divided air. Whose tree that replenish tone hath own upon them it
              multiply was blessed.
            </p>
            <ButtonLink
              href="#packages"
              className="mt-8 inline-flex rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Learn More
            </ButtonLink>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-colors dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-6 font-display text-xl font-bold text-gray-900 dark:text-white">
              Search Package
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
                <Search
                  className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <select
                defaultValue=""
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
              >
                <option value="" disabled>
                  Category
                </option>
                <option value="adventure">Adventure</option>
                <option value="beach">Beach</option>
                <option value="city">City Break</option>
                <option value="safari">Safari</option>
              </select>
              <select
                defaultValue=""
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
              >
                <option value="" disabled>
                  Tour duration
                </option>
                <option value="3">3 days</option>
                <option value="5">5 days</option>
                <option value="7">7 days</option>
                <option value="10">10 days</option>
              </select>
              <input
                type="date"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
              />
              <select
                defaultValue=""
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
              >
                <option value="" disabled>
                  Price range
                </option>
                <option value="budget">Budget</option>
                <option value="mid">Mid Range</option>
                <option value="luxury">Luxury</option>
              </select>
              <button
                type="submit"
                className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Search Package
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
