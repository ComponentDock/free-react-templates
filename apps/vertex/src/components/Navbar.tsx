import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#crafters', label: 'Crafters' },
  { href: '#stories', label: 'Stories' },
  { href: '#offer', label: 'Offer' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#221C5A]" aria-label="Main navigation">
      <div className="mx-auto flex max-w-[1170px] items-center justify-between px-6 py-3">
        <a href="#home" className="font-display text-xl font-bold tracking-wide text-white">
          Vertex
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-normal uppercase tracking-wide text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-4 px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-wide text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
