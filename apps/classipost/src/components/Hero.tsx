import { Search, MapPin, ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://picsum.photos/seed/classipost-hero/1600/900')",
      }}
    >
      <div className="mx-auto w-full max-w-4xl px-4 text-center">
        <h1 className="mb-4 text-3xl font-bold text-white sm:text-5xl">
          Largest Classifieds In The World
        </h1>
        <p className="mb-8 text-lg text-gray-200">You can buy, sell anything you want.</p>

        {/* Search bar */}
        <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-lg bg-white p-3 shadow-lg sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full rounded border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
          <div className="relative flex-1">
            <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Location"
              className="w-full rounded border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
          <div className="relative flex-1">
            <select className="w-full appearance-none rounded border border-gray-200 bg-gray-50 py-2.5 pl-3 pr-8 text-sm text-gray-700 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand">
              <option>All Categories</option>
              <option>Real Estate</option>
              <option>Books &amp; Magazines</option>
              <option>Furniture</option>
              <option>Electronics</option>
              <option>Cars &amp; Vehicles</option>
              <option>Other</option>
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
          <button className="rounded bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-600">
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
