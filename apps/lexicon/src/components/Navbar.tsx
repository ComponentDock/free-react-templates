import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { FacebookIcon, TwitterIcon, LinkedinIcon } from './BrandIcons'

const NAV_LINKS = ['Home', 'Rooms', 'About', 'Blog', 'Contact']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      {/* Top info bar */}
      <div className="bg-header-top px-6 py-2 text-sm text-white/90 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={14} aria-hidden="true" />
              +1 555 234 5678
            </span>
            <span className="hidden items-center gap-1 sm:flex">
              <Mail size={14} aria-hidden="true" />
              info@lexicon.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook">
              <FacebookIcon size={14} />
            </a>
            <a href="#" aria-label="Twitter">
              <TwitterIcon size={14} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <LinkedinIcon size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Sticky navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-ink shadow-lg' : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#" className="font-display text-2xl font-bold text-white">
            Lexicon
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#booking"
            className="hidden rounded-none bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark lg:inline-block"
          >
            Book Now
          </a>

          {/* Mobile toggle */}
          <button
            className="text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-white/10 bg-ink px-6 pb-6 lg:hidden">
            <ul className="flex flex-col gap-4 pt-4">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block text-sm font-medium text-white/80 transition-colors hover:text-brand"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#booking"
              className="mt-4 inline-block rounded-none bg-brand px-6 py-3 text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
