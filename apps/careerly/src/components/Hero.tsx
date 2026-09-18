import { Search, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section
      className="relative bg-cover bg-center py-20 md:py-32"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://picsum.photos/seed/careerly-hero/1600/900)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Your Dream Job</h1>
          <p className="text-white/80 text-lg">
            Search thousands of job listings from top employers
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3 bg-white rounded-lg p-3 shadow-lg">
            <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-gray-50 rounded">
              <Search className="h-5 w-5 text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Job title, keywords or company"
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                aria-label="Search keywords"
              />
            </div>
            <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-gray-50 rounded">
              <MapPin className="h-5 w-5 text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="City, province or region"
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                aria-label="Location"
              />
            </div>
            <button
              type="submit"
              className="bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded transition-colors"
            >
              Search
            </button>
          </div>
          <p className="text-white/70 text-sm mt-3 text-center">
            Browse by category:{' '}
            <a href="#categories" className="text-white underline hover:text-brand">
              Accounting
            </a>{' '}
            <a href="#categories" className="text-white underline hover:text-brand">
              Healthcare
            </a>{' '}
            <a href="#categories" className="text-white underline hover:text-brand">
              Technology
            </a>
          </p>
        </form>
      </div>
    </section>
  )
}
