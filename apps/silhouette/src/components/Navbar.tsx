import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Collections', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 bg-ink text-white"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-bold font-serif tracking-tight">
          Silhouette<span className="text-brand">.</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm uppercase tracking-widest text-gray-300 transition-colors hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <ul className="border-t border-gray-700 px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link} className="py-2">
              <a
                href={`#${link.toLowerCase()}`}
                className="block text-sm uppercase tracking-widest text-gray-300 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
