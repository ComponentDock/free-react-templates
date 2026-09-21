import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#features' },
  { label: 'Classes', href: '#subscription' },
  { label: 'News', href: '#portfolio' },
  { label: 'Contact', href: '#cta' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-col leading-none">
            <span className="font-heading text-2xl font-bold text-white">
              fit<span className="text-brand">forge</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-mist">the next level</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <a
              href="#cta"
              className="hidden sm:inline-flex items-center rounded bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
            >
              Get in touch
            </a>
            <button
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="md:hidden text-white/70 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-sm font-medium text-white/80 hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
