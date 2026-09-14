import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#features' },
  { label: 'Blog', href: '#cta' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-end bg-brand/90 backdrop-blur-sm">
      {/* Logo */}
      <a href="#home" className="mr-auto pl-6 font-display text-2xl font-bold text-white">
        Blit<span className="text-accent">z</span>
      </a>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-6 pr-6 md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-white"
          >
            {l.label}
          </a>
        ))}

        {/* Search toggle */}
        <button
          type="button"
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Toggle search"
          className="text-white/80 transition-colors hover:text-white"
        >
          <Search size={16} />
        </button>

        {/* Search input */}
        {searchOpen && (
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search"
            className="w-40 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        )}
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="pr-4 text-white md:hidden"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute left-0 top-full w-full border-t border-white/20 bg-brand px-6 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-1 text-sm font-medium uppercase text-white/80 transition-colors hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
