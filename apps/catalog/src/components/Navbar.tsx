import { Search, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = ['Home', 'Listings', 'Pages', 'Blog', 'Contact']

  return (
    <nav className="absolute inset-x-0 top-5 z-20 mx-auto w-full max-w-6xl px-4 md:px-8">
      <div className="flex items-center justify-between rounded-lg bg-primary-500/90 px-6 py-3 backdrop-blur">
        {/* Logo */}
        <a href="/" className="text-lg font-extrabold uppercase tracking-wide text-white">
          Catalog
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={cn(
                  'text-sm font-normal text-white/80 transition hover:text-white',
                  link === 'Home' && 'rounded-full bg-white/20 px-3 py-1 text-white',
                )}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#join"
              className="ml-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-primary-500 transition hover:bg-white/90"
            >
              Join Now
            </a>
          </li>
        </ul>

        {/* Search + mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button aria-label="Search" className="text-white">
            <Search size={20} />
          </button>
          <button
            aria-label="Toggle menu"
            className="text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mt-2 rounded-lg bg-white p-4 shadow-lg md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-sm text-ink hover:text-primary-500"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#join"
            className="mt-2 block rounded bg-primary-500 py-2 text-center text-sm font-bold text-white"
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  )
}
