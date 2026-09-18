import { Search, MapPin, ChevronDown } from 'lucide-react'

export function Hero() {
  const trending = ['iPhone', 'Cars', 'Flowers', 'House', 'Furniture']

  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center bg-no-repeat pt-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/catalog-hero/1600/900')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-20 text-center">
        <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">Welcome To Catalog</h1>
        <p className="mb-8 text-lg text-white/80">
          Find the best local businesses, services, and products near you.
        </p>

        {/* Search form */}
        <div className="mx-auto max-w-4xl rounded-lg bg-white/90 p-4">
          <form
            className="grid grid-cols-1 gap-3 md:grid-cols-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative md:col-span-4">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full rounded border-0 bg-gray-100 px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Search keyword"
              />
            </div>
            <div className="relative md:col-span-3">
              <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Location"
                className="w-full rounded border-0 bg-gray-100 py-3 pl-9 pr-4 text-sm text-ink outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Location"
              />
            </div>
            <div className="relative md:col-span-3">
              <select
                className="w-full appearance-none rounded border-0 bg-gray-100 px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Category"
                defaultValue=""
              >
                <option value="">All Categories</option>
                <option value="real-estate">Real Estate</option>
                <option value="books">Books and Magazines</option>
                <option value="furniture">Furniture</option>
                <option value="electronics">Electronics</option>
                <option value="cars">Cars and Vehicles</option>
                <option value="other">Others</option>
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full rounded bg-primary-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-600"
              >
                <Search size={16} className="mr-1 inline" />
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Trending */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm font-bold text-white">Trending Search:</span>
          {trending.map((tag) => (
            <a
              key={tag}
              href="#"
              className="rounded border border-white/40 bg-white/20 px-3 py-1 text-xs text-white transition hover:bg-white hover:text-primary-500"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
