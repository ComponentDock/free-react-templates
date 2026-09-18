import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  'Home',
  'Services',
  'About Us',
  'Doctors',
  'Testimonials',
  'Blog',
  'Contact',
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const activeLink = 'Home'

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="font-display text-2xl font-bold">
          <span className="text-brand">Smile</span>
          <span className="text-ink">well</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className={`text-sm font-medium transition-colors ${
                  link === activeLink
                    ? 'border-b-2 border-brand text-brand'
                    : 'text-smoke hover:text-brand'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-gray-100 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="block py-2 text-sm font-medium text-smoke transition-colors hover:text-brand"
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
