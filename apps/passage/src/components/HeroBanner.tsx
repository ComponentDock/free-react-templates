import { Search } from 'lucide-react'

export function HeroBanner() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat py-24 sm:py-36"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/passage-hero/1920/800)',
      }}
    >
      <div className="absolute inset-0 bg-brand/85" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="mb-4 block text-sm font-bold uppercase tracking-wider text-white/90">
            Welcome To Passage
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Immigration Service Provider
          </h1>
          <p className="mb-8 text-lg text-white/80">
            We provide the best immigration services with experienced consultants. Your journey to a
            new beginning starts here.
          </p>
        </div>
        <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Search services..."
            className="flex-1 rounded px-4 py-3 text-sm text-navy focus:outline-none"
            aria-label="Search services"
          />
          <button
            type="button"
            aria-label="Search"
            className="flex items-center justify-center gap-2 rounded bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
          >
            <Search className="h-4 w-4" />
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
