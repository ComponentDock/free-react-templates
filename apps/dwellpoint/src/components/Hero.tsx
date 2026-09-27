import { ChevronDown } from 'lucide-react'

const selects = [
  { label: 'Choose Locations', options: ['New York', 'Los Angeles', 'Chicago', 'Houston'] },
  { label: 'Property Type', options: ['Apartment', 'House', 'Villa', 'Studio'] },
  { label: 'Bedrooms', options: ['1', '2', '3', '4', '5+'] },
  { label: 'Bathrooms', options: ['1', '2', '3', '4+'] },
]

export function Hero() {
  return (
    <section id="home" className="relative min-h-[700px] bg-gray-900">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/dwellpoint-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      <div className="relative mx-auto max-w-7xl px-4 pt-48 pb-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/70">
            The joy of home owning
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl">
            Find Your New Home
          </h1>
          <a
            href="#about"
            className="inline-block rounded bg-crimson-400 px-10 py-3 text-sm font-medium text-white transition-colors hover:bg-crimson-500"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Advanced Search Bar */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-lg bg-white p-6 shadow-xl">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Search Properties for</h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {selects.map(({ label, options }) => (
              <div key={label} className="relative">
                <select className="w-full appearance-none rounded border border-gray-200 bg-white px-4 py-3 pr-8 text-sm text-gray-600 focus:border-crimson-400 focus:outline-none focus:ring-1 focus:ring-crimson-400">
                  <option>{label}</option>
                  {options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500">Price Range</label>
              <input
                type="range"
                min="0"
                max="5000000"
                defaultValue="2500000"
                className="w-full accent-crimson-400"
              />
              <div className="mt-1 flex justify-between text-xs text-gray-400">
                <span>$0</span>
                <span>$5,000,000</span>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500">Property Area</label>
              <input
                type="range"
                min="20"
                max="500"
                defaultValue="250"
                className="w-full accent-crimson-400"
              />
              <div className="mt-1 flex justify-between text-xs text-gray-400">
                <span>20 sqm</span>
                <span>500 sqm</span>
              </div>
            </div>
          </div>

          <button className="mt-4 rounded bg-crimson-400 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-crimson-500">
            Search Property
          </button>
        </div>
      </div>
    </section>
  )
}
