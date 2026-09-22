import { Search } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/goquest-hero/1920/1080)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-dark/70" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-display text-accent-yellow text-5xl md:text-7xl mb-4">
          Find your Next tour!
        </h1>
        <p className="text-white text-xl md:text-2xl mb-8 font-light">
          Where would you like to go?
        </p>

        {/* Search form */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Destination, country, city"
            className="flex-1 px-4 py-3 rounded bg-white/90 text-heading placeholder:text-body/60 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
            aria-label="Destination search"
          />
          <select
            className="px-4 py-3 rounded bg-white/90 text-body focus:outline-none focus:ring-2 focus:ring-accent-yellow"
            aria-label="Tour category"
          >
            <option value="">All Categories</option>
            <option value="adventure">Adventure</option>
            <option value="cultural">Cultural</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
          </select>
          <button
            type="button"
            className="bg-accent-yellow hover:bg-accent-red text-white px-8 py-3 rounded font-heading font-semibold text-lg flex items-center justify-center gap-2 transition-colors"
            aria-label="Search tours"
          >
            <Search size={18} />
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
