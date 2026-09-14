import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Services', 'Process', 'FAQ', 'Testimonials', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <a href="#" className="text-2xl font-bold text-[#222] border-l-4 border-[#988fff] pl-3">
          Renovo
        </a>
        <nav className="hidden md:flex gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs uppercase font-medium text-[#222] hover:text-[#988fff] transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden text-[#222]"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-white border-t px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-xs uppercase font-medium text-[#222] hover:text-[#988fff]"
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
