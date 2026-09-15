import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Causes', 'Events', 'About', 'Blog', 'Contact'] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="bg-white/90 backdrop-blur-sm border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-0">
          <a href="/" className="py-4 text-xl font-bold uppercase tracking-wider text-text-primary">
            Carewell
          </a>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="py-7 block text-xs font-medium uppercase tracking-widest text-text-primary transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#donate"
                className="inline-block bg-brand px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
              >
                Donate Now
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="text-text-primary md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-white px-4 pb-4 md:hidden">
            <ul className="flex flex-col gap-2 py-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block py-2 text-sm font-medium uppercase tracking-wider text-text-primary hover:text-brand"
                    onClick={() => setOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#donate"
                  className="mt-2 inline-block bg-brand px-6 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-dark"
                  onClick={() => setOpen(false)}
                >
                  Donate Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
