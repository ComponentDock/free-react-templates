import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Services', 'Work', 'Blog', 'About', 'Contact'] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 py-6 sm:px-6">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="font-mono text-2xl font-light uppercase tracking-[0.3em] text-white"
        >
          Packr
        </a>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black/40 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-mono text-sm uppercase tracking-widest text-white/80 transition-colors hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div className="mt-4 rounded-lg bg-black/80 p-6 backdrop-blur md:hidden">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block font-mono text-lg uppercase tracking-widest text-white/80 transition-colors hover:text-white"
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
