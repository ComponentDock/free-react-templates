import { useState } from 'react'

interface NavbarProps {
  onToggleDark: () => void
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'DJs', href: '#djs' },
  { label: 'Shows', href: '#shows' },
  { label: 'Events', href: '#events' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const SHOWS_DROPDOWN = [
  { label: 'Top 20 of The Week', href: '#' },
  { label: 'Featured Artist', href: '#' },
  { label: 'Interviews', href: '#' },
]

export function Navbar({ onToggleDark }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showsOpen, setShowsOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-sm"
      data-testid="navbar"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-white font-heading">
            Vynl<span className="text-brand-gold">.</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="relative">
                {link.label === 'Shows' ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setShowsOpen(true)}
                    onMouseLeave={() => setShowsOpen(false)}
                  >
                    <button
                      className="px-3 py-2 text-sm text-white/60 transition-colors hover:text-white"
                      aria-expanded={showsOpen}
                    >
                      Shows
                    </button>
                    {showsOpen && (
                      <ul className="absolute top-full left-0 mt-1 min-w-[200px] rounded border border-gray-200 bg-white py-2 shadow-lg">
                        {SHOWS_DROPDOWN.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              className="block px-5 py-2 text-sm text-gray-800 transition-colors hover:text-brand-gold"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="px-3 py-2 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <button
                onClick={onToggleDark}
                className="ml-2 px-3 py-2 text-sm text-white/60 transition-colors hover:text-white"
                aria-label="Toggle dark mode"
              >
                ☀
              </button>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="text-2xl text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <ul className="mt-4 space-y-2 border-t border-white/10 pt-4 lg:hidden">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block py-2 text-sm text-white/60 transition-colors hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
