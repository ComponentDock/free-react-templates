import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="absolute top-0 z-50 w-full px-6 py-5 lg:px-12">
      <div className="flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-wider text-white">
          SNAPLENS
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:text-white"
            >
              {link}
            </a>
          ))}
          <button
            type="button"
            aria-label="Toggle search"
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white/80 transition hover:text-white"
          >
            <Search size={18} />
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="mt-3 hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-xs rounded bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 outline-none backdrop-blur"
          />
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <nav className="mt-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:text-white"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
