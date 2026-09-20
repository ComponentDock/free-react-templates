import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Courses', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 right-0 z-50">
      <nav className="bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <a href="#" className="text-xl font-bold text-heading">
            Eduforge
          </a>
          <ul className="hidden md:flex gap-6 text-sm font-medium text-heading">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-brand transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden text-heading"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <ul className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
            {navLinks.map((link) => (
              <li key={link} className="py-2 border-b border-gray-50">
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-heading hover:text-brand transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
