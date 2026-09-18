import { Search, ChevronDown } from 'lucide-react'

const categoryPills = [
  'Restaurant',
  'Food & Drink',
  'Shopping',
  'Beauty',
  'Hotels',
  'All Categories',
]

export function Hero() {
  return (
    <section className="relative bg-dark text-white">
      {/* Photo mosaic grid background */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 opacity-30">
        <img
          src="https://picsum.photos/seed/localfinder-hero1/400/300"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="https://picsum.photos/seed/localfinder-hero2/400/300"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="https://picsum.photos/seed/localfinder-hero3/400/300"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="https://picsum.photos/seed/localfinder-hero4/400/300"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="https://picsum.photos/seed/localfinder-hero5/400/300"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="https://picsum.photos/seed/localfinder-hero6/400/300"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          Discover The Best Services Near You
        </h1>
        <p className="text-gray-400 mb-8 text-sm sm:text-base">
          1,118,940,376 The best service package is waiting for you
        </p>

        {/* Search form */}
        <form
          className="flex flex-col sm:flex-row items-stretch bg-white rounded-lg overflow-hidden max-w-3xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex items-center gap-2 px-4 py-3 flex-1 border-b sm:border-b-0 sm:border-r border-line">
            <Search className="w-5 h-5 text-muted" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 text-ink text-sm outline-none bg-transparent"
              aria-label="Search"
            />
          </div>
          <div className="relative flex items-center px-4 py-3 border-b sm:border-b-0 sm:border-r border-line">
            <select
              className="text-muted text-sm bg-transparent appearance-none pr-6 outline-none cursor-pointer"
              aria-label="Choose categories"
            >
              <option>Choose Categories</option>
              <option>Restaurant</option>
              <option>Food &amp; Drink</option>
              <option>Shopping</option>
              <option>Beauty</option>
              <option>Hotels</option>
            </select>
            <ChevronDown className="w-4 h-4 text-muted absolute right-2 pointer-events-none" />
          </div>
          <div className="relative flex items-center px-4 py-3 border-b sm:border-b-0 sm:border-r border-line">
            <select
              className="text-muted text-sm bg-transparent appearance-none pr-6 outline-none cursor-pointer"
              aria-label="Choose location"
            >
              <option>Choose Location</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
            </select>
            <ChevronDown className="w-4 h-4 text-muted absolute right-2 pointer-events-none" />
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-r-lg text-sm transition-colors"
          >
            EXPLORE NOW
          </button>
        </form>

        {/* Category pills */}
        <ul className="flex flex-wrap justify-center gap-3 mt-6">
          {categoryPills.map((pill) => (
            <li key={pill}>
              <a
                href="#"
                className="inline-block border border-line text-white text-xs px-4 py-2 rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                {pill}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
