import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Blog', 'Contact']

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="bg-brand-dark sticky top-0 z-50 shadow-lg"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="text-white text-xl font-bold">
          Clean<span className="text-brand-accent">Slate</span>
        </a>
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <ul
          className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-brand-dark md:bg-transparent z-40`}
        >
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block py-3 px-6 text-white hover:text-brand-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
