import { useState } from 'react'
import { Menu, X, Plane } from 'lucide-react'

const NAV_LINKS = ['Home', 'Destinations', 'Packages', 'About', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a
          href="#"
          className="flex items-center gap-2 font-display text-xl font-bold text-jet-navy"
        >
          <Plane className="w-6 h-6 text-jet-teal" />
          jetpath
        </a>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-jet-muted hover:text-jet-teal transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-jet-teal text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-jet-teal-light transition-colors"
          >
            Book Now
          </a>
        </div>
        <button
          className="md:hidden p-2 text-jet-navy"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-sm font-medium text-jet-muted hover:text-jet-teal"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
