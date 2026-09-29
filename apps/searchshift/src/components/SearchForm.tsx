import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const CATEGORIES = ['Category', 'Subject A', 'Subject B', 'Subject C']

export function SearchForm() {
  const [category, setCategory] = useState(CATEGORIES[0])

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[url('https://picsum.photos/seed/searchshift/1920/1080')] bg-cover bg-center px-4 font-sans">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Search form */}
      <main className="relative z-10 w-full max-w-[790px]">
        <form
          aria-label="Search form"
          className="flex flex-col bg-black/50 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Category dropdown */}
          <div className="relative w-full shrink-0 border border-white/30 sm:w-[200px]">
            <label htmlFor="category" className="sr-only">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-[50px] w-full appearance-none border-0 bg-transparent px-4 text-sm font-light text-white outline-none sm:h-[68px]"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat} className="text-black">
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
              size={16}
            />
          </div>

          {/* Text input */}
          <input
            type="text"
            placeholder="Enter Keywords"
            aria-label="Search keywords"
            className="h-[50px] flex-grow border-0 border-l border-r border-white/30 bg-transparent px-4 text-sm font-light text-white placeholder-neutral-400 outline-none sm:h-[68px] sm:border-l-0 sm:border-r-0"
          />

          {/* Search button */}
          <button
            type="submit"
            className="group relative h-[50px] w-full cursor-pointer overflow-hidden border-0 bg-gradient-to-r from-[#2c6dd5] to-[#ff4b5a] text-sm font-light text-white transition-all duration-200 sm:h-[68px] sm:w-[164px]"
          >
            {/* Hover gradient (reversed) — fades in on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#ff4b5a] to-[#2c6dd5] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            <span className="relative z-10">Search</span>
          </button>
        </form>
      </main>

      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 py-4 text-center">
      <p className="text-xs text-white/50">
        Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-semibold text-white/70 underline decoration-white/30 underline-offset-2 transition-colors hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
