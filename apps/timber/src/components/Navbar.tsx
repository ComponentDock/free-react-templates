import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 z-50 w-full bg-dark/90 font-['Quicksand',sans-serif]"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-xl font-bold text-primary">
          Timber
        </a>
        <button
          type="button"
          className="text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
        </button>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <ul className="border-t border-white/10 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block py-2 text-sm text-white/80 transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
