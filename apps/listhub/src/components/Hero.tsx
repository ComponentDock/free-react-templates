import { Search } from 'lucide-react'

const categories = [
  'Select Category',
  'Hotel',
  'Restaurant',
  'Cafe',
  'Shopping Mall',
  'Beauty & Spa',
]
const cities = ['Select City', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami']

export function Hero() {
  return (
    <section
      className="relative flex min-h-[500px] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/listhub-hero/1600/600)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
        <div className="max-w-lg">
          <h1
            className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl"
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            Find your
            <br />
            Destination
          </h1>

          <form
            className="rounded-lg bg-white p-4 shadow-lg"
            role="search"
            aria-label="Destination search"
          >
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  placeholder="What are you finding?"
                  className="w-full rounded-md border border-border-light bg-bg-light py-3 pl-10 pr-4 text-sm text-text-dark outline-none focus:border-brand"
                  aria-label="Search query"
                />
              </div>

              <select
                className="w-full rounded-md border border-border-light bg-bg-light px-4 py-3 text-sm text-text-dark outline-none focus:border-brand"
                aria-label="Select category"
                defaultValue=""
              >
                {categories.map((c) => (
                  <option key={c} value={c === 'Select Category' ? '' : c}>
                    {c}
                  </option>
                ))}
              </select>

              <select
                className="w-full rounded-md border border-border-light bg-bg-light px-4 py-3 text-sm text-text-dark outline-none focus:border-brand"
                aria-label="Select city"
                defaultValue=""
              >
                {cities.map((c) => (
                  <option key={c} value={c === 'Select City' ? '' : c}>
                    {c}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full rounded-md bg-brand py-3 text-sm font-semibold text-white hover:bg-brand-hover"
              >
                Search Destination
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
