import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Coffee', href: '#coffee' },
  { label: 'Review', href: '#review' },
  { label: 'Blog', href: '#blog' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-black/60 text-white text-sm">
        <div className="container mx-auto flex justify-end gap-6 px-4 py-2">
          <span>Mon-Fri: 8am to 2pm</span>
          <span>Sat-Sun: 11am to 4pm</span>
          <a href="tel:+10126985236" className="hover:text-brand transition-colors">
            (012) 6985 236 7512
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-transparent">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-white">
            <span className="text-brand">☕</span> Perk
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white text-sm font-medium uppercase tracking-wide hover:text-brand transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <ul className="lg:hidden bg-black/80 px-4 pb-4">
            {navLinks.map((link) => (
              <li key={link.href} className="py-2">
                <a
                  href={link.href}
                  className="text-white text-sm font-medium uppercase tracking-wide hover:text-brand transition-colors block"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
