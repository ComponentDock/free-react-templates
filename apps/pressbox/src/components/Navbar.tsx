import { Search } from 'lucide-react'
import { useState } from 'react'

const categories = ['Home', 'News', 'Sport', 'Lifestyle', 'Fashion', 'Music', 'Business']

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="bg-brand-dark text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-1">
          <span className="text-2xl font-extrabold uppercase tracking-tight">Pressbox</span>
          <span className="rounded bg-brand-red px-1.5 py-0.5 text-[10px] font-bold leading-none">
            24H
          </span>
        </div>
        <nav aria-label="Main">
          <ul className="hidden items-center gap-1 md:flex">
            {categories.map((cat, i) => (
              <li key={cat}>
                <a
                  href="#"
                  className={
                    i === 0
                      ? 'rounded bg-brand-red px-4 py-2 text-sm font-bold uppercase text-white'
                      : 'px-3 py-2 text-sm font-semibold uppercase text-white/80 transition-colors hover:text-white'
                  }
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          aria-label="Search"
          onClick={() => setSearchOpen(!searchOpen)}
          className="text-white/80 transition-colors hover:text-white"
        >
          <Search size={18} />
        </button>
      </div>
      {searchOpen && (
        <div className="border-t border-white/10 bg-brand-dark px-4 py-3 sm:px-6">
          <form role="search">
            <input
              type="search"
              placeholder="Search articles..."
              aria-label="Search articles"
              className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 focus:border-brand-red focus:outline-none"
            />
          </form>
        </div>
      )}
    </header>
  )
}
