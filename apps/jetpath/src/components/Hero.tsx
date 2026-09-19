import { Search } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-jet-navy text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://picsum.photos/seed/jetpath-hero/1600/900')" }}
      />
      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Explore the World
          <br />
          <span className="text-jet-teal-light">with Jetpath</span>
        </h1>
        <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10">
          Discover amazing destinations, curated tour packages, and unforgettable experiences for
          every kind of traveler.
        </p>

        <div className="bg-white rounded-xl p-4 md:p-6 flex flex-col md:flex-row gap-4 max-w-3xl">
          <div className="flex-1">
            <label htmlFor="destination" className="block text-xs font-medium text-jet-muted mb-1">
              Destination
            </label>
            <input
              id="destination"
              type="text"
              placeholder="Where do you want to go?"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-jet-text focus:outline-none focus:ring-2 focus:ring-jet-teal"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="date" className="block text-xs font-medium text-jet-muted mb-1">
              Date
            </label>
            <input
              id="date"
              type="date"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-jet-text focus:outline-none focus:ring-2 focus:ring-jet-teal"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="guests" className="block text-xs font-medium text-jet-muted mb-1">
              Guests
            </label>
            <select
              id="guests"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-jet-text focus:outline-none focus:ring-2 focus:ring-jet-teal"
            >
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>2 Adults + 1 Child</option>
              <option>Family (4)</option>
            </select>
          </div>
          <button className="bg-jet-teal text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-jet-teal-light transition-colors self-end">
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
