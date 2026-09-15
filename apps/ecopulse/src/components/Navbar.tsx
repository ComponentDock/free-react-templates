import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@free-react-templates/ui'

const navLinks = ['Home', 'About', 'What We Do', 'Projects', 'Blog', 'Contact']

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_10px_15px_rgba(25,25,25,0.1)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-ink">
          Eco<span className="text-brand">Pulse</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="font-medium text-nav-link transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button className="rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white hover:bg-brand-dark">
            Make a Donation
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-ink md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav
          className="border-t border-divider bg-white px-4 pb-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="block py-3 font-medium text-nav-link transition-colors hover:text-brand"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <Button className="mt-2 w-full rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white hover:bg-brand-dark">
            Make a Donation
          </Button>
        </nav>
      )}
    </header>
  )
}
