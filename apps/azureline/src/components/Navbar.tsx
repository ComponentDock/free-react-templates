import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#features' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute top-0 z-50 w-full px-4 py-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#home" className="text-xl font-bold uppercase tracking-widest text-white">
          Azureline
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs font-medium uppercase text-white transition-colors hover:text-accent-300"
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <nav className="mt-4 flex flex-col gap-4 md:hidden" aria-label="Mobile navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium uppercase text-white transition-colors hover:text-accent-300"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
