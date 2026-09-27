import { MapPin, Home, DollarSign, BedDouble, Bath, Search } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/propvale-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-navy/70" />

      <div className="relative z-10 w-full max-w-6xl px-4 text-center sm:px-6">
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Find Your Best Property
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Search properties for sale and rent. Find the best home, apartment, or commercial property
          for you.
        </p>

        <div className="mx-auto mt-8 flex flex-wrap items-center gap-2 rounded-lg bg-white p-2 shadow-lg sm:flex-nowrap">
          <div className="flex items-center gap-2 border-b border-gray-200 px-3 py-2 sm:border-b-0 sm:border-r">
            <MapPin className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <select aria-label="Location" className="bg-transparent text-sm text-ink outline-none">
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Houston</option>
            </select>
          </div>

          <div className="flex items-center gap-2 border-b border-gray-200 px-3 py-2 sm:border-b-0 sm:border-r">
            <Home className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <select
              aria-label="Property Type"
              className="bg-transparent text-sm text-ink outline-none"
            >
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
              <option>Land</option>
            </select>
          </div>

          <div className="flex items-center gap-2 border-b border-gray-200 px-3 py-2 sm:border-b-0 sm:border-r">
            <DollarSign className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <input
              type="range"
              min="50000"
              max="500000"
              defaultValue="250000"
              aria-label="Price range"
              className="w-24 accent-primary-400"
            />
          </div>

          <div className="flex items-center gap-2 border-b border-gray-200 px-3 py-2 sm:border-b-0 sm:border-r">
            <BedDouble className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <select aria-label="Bed Room" className="bg-transparent text-sm text-ink outline-none">
              <option>1 Bed</option>
              <option>2 Bed</option>
              <option>3 Bed</option>
              <option>4+ Bed</option>
            </select>
          </div>

          <div className="flex items-center gap-2 px-3 py-2">
            <Bath className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <select aria-label="Bath Room" className="bg-transparent text-sm text-ink outline-none">
              <option>1 Bath</option>
              <option>2 Bath</option>
              <option>3 Bath</option>
              <option>4+ Bath</option>
            </select>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
