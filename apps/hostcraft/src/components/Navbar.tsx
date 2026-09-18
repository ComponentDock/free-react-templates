import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Domain', 'Hosting', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#" className="text-xl font-bold text-white">
          Hostcraft
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs font-medium uppercase tracking-widest text-white/80 transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded border border-brand px-5 py-2 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-brand"
          >
            Get started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-black px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-brand"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-block rounded border border-brand px-5 py-2 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-brand"
            onClick={() => setOpen(false)}
          >
            Get started
          </a>
        </div>
      )}
    </nav>
  )
}
