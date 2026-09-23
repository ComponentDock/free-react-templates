import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Gallery', 'Events', 'Ticket', 'Blog', 'Contact']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-navy shadow-lg' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
            AG
          </span>
          <span className="font-[family-name:var(--font-playfair)]">ArtGallery</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-white transition-colors hover:text-accent"
            >
              {link}
            </a>
          ))}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-sm font-medium text-white transition-colors hover:text-accent"
              aria-haspopup="true"
            >
              Pages
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

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

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="bg-navy pb-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-6 py-2 text-sm text-white transition-colors hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#pages"
            className="block px-6 py-2 text-sm text-white transition-colors hover:text-accent"
          >
            Pages ▾
          </a>
        </div>
      )}
    </nav>
  )
}
