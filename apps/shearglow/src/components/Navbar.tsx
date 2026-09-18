import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-dark text-white text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
          <span>Welcome to hair salon!</span>
          <span className="hidden sm:inline">Mon – Sat: 8.00 AM – 8.00 PM</span>
          <span className="hidden sm:inline">+1 234 567 890</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="font-serif text-2xl font-bold text-dark">
            Shear<span className="text-gold-400">Glow</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-wide text-dark transition-colors hover:text-gold-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-sm border border-dark px-6 py-2 font-serif text-sm font-semibold uppercase text-dark transition-colors hover:border-gold-400 hover:bg-gold-400 hover:text-white md:inline-block"
          >
            Book Now
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t px-4 pb-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-semibold uppercase text-dark"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-sm border border-dark px-6 py-2 text-center font-serif text-sm font-semibold uppercase text-dark"
            >
              Book Now
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
