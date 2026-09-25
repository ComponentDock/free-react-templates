import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Services', 'About', 'Press', 'Testimonials', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
        <a href="#" className="text-2xl font-bold font-heading text-brand">
          Digger
        </a>
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-heading hover:text-brand transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-heading"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <ul className="md:hidden border-t border-border bg-white px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link} className="py-2">
              <a
                href={`#${link.toLowerCase()}`}
                className="block text-sm font-medium text-heading hover:text-brand transition-colors"
                onClick={() => setOpen(false)}
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
