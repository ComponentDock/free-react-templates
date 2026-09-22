import { useState } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'
const NAV_LINKS = ['Home', 'Rooms', 'About', 'Blog', 'Contact'] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo + contact info */}
        <div className="flex items-center gap-6">
          <a href="#" className="font-heading text-2xl font-bold tracking-wide text-white">
            Sunlodge
          </a>
          <div className="hidden items-center gap-4 text-sm text-white/70 md:flex">
            <span className="flex items-center gap-1">
              <Phone className="h-3.5 w-3.5" />
              +1 (75) 657 5378
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              66/A, Green Lane, NYC
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
          <a
            href="#booking"
            className="bg-sienna px-6 py-2.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-sienna-hover"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-white/10 px-4 pb-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#booking"
            className="mt-2 block bg-sienna px-6 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-sienna-hover"
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  )
}
