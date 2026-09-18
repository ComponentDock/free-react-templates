import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Services', 'Projects', 'Contact'] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="flex items-center justify-between px-4 py-4 lg:px-8">
        <a href="#" className="font-display text-lg uppercase tracking-[0.2em] text-white">
          Impulse
        </a>
        {/* Mobile toggle */}
        <button
          className="lg:hidden border border-white/50 p-1 text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-sm uppercase tracking-[0.1rem] font-light transition-colors ${
                  link === 'Home' ? 'text-brand' : 'text-white hover:text-brand'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden bg-black px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm uppercase tracking-[0.1rem] font-light text-white hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
