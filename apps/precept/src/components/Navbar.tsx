import { Phone, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = ['Home', 'About', 'Courses', 'Events', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-navy text-xs text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-brand transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-brand transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <a
              href="tel:+9530123654896"
              className="flex items-center gap-1 hover:text-brand transition-colors"
            >
              <Phone className="w-3 h-3" />{' '}
              <span className="hidden sm:inline">+953 012 3654 896</span>
            </a>
            <a
              href="mailto:info@precept.edu"
              className="flex items-center gap-1 hover:text-brand transition-colors"
            >
              <Mail className="w-3 h-3" />{' '}
              <span className="hidden sm:inline">info@precept.edu</span>
            </a>
          </div>
        </div>
      </div>
      {/* Main nav */}
      <nav className="bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <a href="#" className="text-xl font-bold text-heading border-l-4 border-brand pl-2">
            Precept
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
