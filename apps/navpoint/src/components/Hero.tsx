import { Search } from 'lucide-react'
import { useState } from 'react'

export function Hero() {
  const [query, setQuery] = useState('')

  return (
    <section
      className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/navpoint-hero/1920/600)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-dark/60" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-normal text-white mb-8">
          The Best City{' '}
          <span className="relative">
            Guide
            <span className="absolute -top-1 -right-3 w-5 h-5 rounded-full bg-brand" />
          </span>
        </h1>

        {/* Search form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-stretch gap-0 bg-white rounded overflow-hidden"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What are you looking for?"
            className="flex-1 px-6 py-4 text-sm text-text-primary outline-none"
          />
          <button
            type="submit"
            className="bg-brand hover:bg-brand-hover text-white font-medium text-base px-12 py-4 transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            Search
          </button>
        </form>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        <span className="text-white font-semibold text-sm">01.</span>
        <span className="text-white/50 font-semibold text-sm">02.</span>
        <span className="text-white/50 font-semibold text-sm">03.</span>
      </div>
    </section>
  )
}
