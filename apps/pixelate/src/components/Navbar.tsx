import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Work', 'Service', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="/" className="font-display text-2xl font-bold text-ink">
          Pixelate
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-mist transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border-2 border-brand px-6 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white lg:inline-block"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-3 text-sm font-medium text-mist transition-colors hover:text-brand"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 block rounded-full border-2 border-brand px-6 py-2 text-center text-sm font-semibold text-brand"
            role="button"
            onClick={() => setMobileOpen(false)}
          >
            Let&apos;s Talk
          </a>
        </nav>
      )}
    </header>
  )
}
