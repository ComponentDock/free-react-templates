import { useEffect, useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg' : 'bg-navy'
      }`}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((c) => !c)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex items-center gap-2 text-sm font-medium text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Menu</span>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-brand ${
                  i === 0 ? 'text-brand' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Search */}
        <div className="flex items-center">
          <div className="hidden items-center gap-2 sm:flex">
            <input
              type="text"
              placeholder="Search"
              aria-label="Search"
              className="rounded-l-full bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 focus:bg-white/20 focus:outline-none"
            />
            <button
              type="button"
              aria-label="Search"
              className="rounded-r-full bg-white/10 px-3 py-2 text-white transition-colors hover:bg-white/20"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-navy px-4 py-3 lg:hidden">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium ${
                i === 0 ? 'text-brand' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              aria-label="Search mobile"
              className="w-full rounded-l-full bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 focus:bg-white/20 focus:outline-none"
            />
            <button
              type="button"
              aria-label="Search mobile"
              className="rounded-r-full bg-white/10 px-3 py-2 text-white"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
