import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ink shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded bg-brand px-5 py-2 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
            >
              Get A Quote
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/20 px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-1 text-sm font-medium uppercase text-white/80 transition-colors hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-2 inline-block rounded bg-brand px-5 py-2 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
                onClick={() => setOpen(false)}
              >
                Get A Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
