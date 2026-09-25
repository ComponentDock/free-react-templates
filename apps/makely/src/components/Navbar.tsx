import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const navLinks = ['Home', 'Work', 'Services', 'About', 'Blog', 'Contact']

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-makely-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-makely-heading">
          Makely<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-makely-body hover:text-primary transition-colors font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <Button className="hidden md:inline-flex rounded-full px-6 py-2 bg-primary text-white hover:bg-primary-dark">
          Get Started
        </Button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-makely-heading"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-makely-border bg-white">
          <ul className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-makely-body hover:text-primary transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
