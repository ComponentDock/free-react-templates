import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Products', 'About', 'Special', 'Testimonials', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-2xl font-black tracking-tight text-heading">
          Stall<span className="text-brand">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold uppercase text-gray-700 transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          className="text-gray-700 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-gray-200 bg-white px-4 pb-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-sm font-semibold uppercase text-gray-700 hover:text-brand"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
