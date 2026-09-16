import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-4 border-brand bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-heading text-xl font-bold uppercase tracking-wider">
          <span className="text-ink">HAMMER</span>
          <span className="text-brand">LY</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium uppercase tracking-wide text-ink/80 transition-colors hover:text-brand"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-ink transition-colors hover:bg-brand-dark"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-divider px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-1 text-sm font-medium uppercase text-ink/80 transition-colors hover:text-brand"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
