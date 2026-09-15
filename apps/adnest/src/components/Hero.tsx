import { MapPin, Search, ChevronDown } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section className="relative flex min-h-[65vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/adnest-hero/1600/900)' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
          Largest Classifieds In The World
        </h1>
        <p className="mb-8 text-lg text-gray-300">You can buy, sell anything you want.</p>

        {/* Search bar */}
        <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-lg bg-white p-3 shadow-lg sm:flex-row">
          {/* Search input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-text" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full rounded border border-border bg-white py-3 pl-10 pr-4 text-sm text-nav-text placeholder:text-muted-text focus:border-brand focus:outline-none"
            />
          </div>

          {/* Location input */}
          <div className="relative flex-1">
            <MapPin className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-text" />
            <input
              type="text"
              placeholder="Location"
              className="w-full rounded border border-border bg-white py-3 pl-4 pr-10 text-sm text-nav-text placeholder:text-muted-text focus:border-brand focus:outline-none"
            />
          </div>

          {/* Category dropdown */}
          <div className="relative flex-1">
            <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-text" />
            <select className="w-full appearance-none rounded border border-border bg-white py-3 pl-4 pr-10 text-sm text-nav-text focus:border-brand focus:outline-none">
              <option>All Categories</option>
              <option>Real Estate</option>
              <option>Books &amp; Magazines</option>
              <option>Furniture</option>
              <option>Electronics</option>
              <option>Cars &amp; Vehicles</option>
              <option>Other</option>
            </select>
          </div>

          {/* Search button */}
          <Button className="rounded bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
            Search
          </Button>
        </div>
      </div>
    </section>
  )
}
