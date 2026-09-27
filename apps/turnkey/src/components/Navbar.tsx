import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-heading text-white text-xs py-2">
        <div className="container mx-auto px-4 flex justify-end items-center gap-6">
          <a href="tel:+8801234654953" className="hover:text-brand transition-colors">
            +880 1234 654 953
          </a>
          <a href="#properties" className="hover:text-brand transition-colors">
            Sell / Rent Property
          </a>
          <a href="#contact" className="hover:text-brand transition-colors">
            Login / Register
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-semibold text-heading">
            Turn<span className="text-brand">key</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-heading hover:text-brand transition-colors capitalize"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-heading"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="md:hidden bg-white border-t px-4 pb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-sm font-medium text-heading hover:text-brand transition-colors capitalize"
                  onClick={() => setIsOpen(false)}
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
