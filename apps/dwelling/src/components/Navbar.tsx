import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Properties', 'Agents', 'About', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="/" className="font-heading text-2xl font-bold text-navy">
          Dwelling
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-heading text-sm font-semibold uppercase tracking-wide text-text-dark transition-colors hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded bg-brand px-5 py-2 font-heading text-sm font-semibold text-white transition-colors hover:bg-brand-dark md:inline-block"
        >
          Submit Property
        </a>
        <button
          className="text-text-dark md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div className="border-t bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block font-heading text-sm font-semibold uppercase tracking-wide text-text-dark hover:text-brand"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-3 block rounded bg-brand px-5 py-2 text-center font-heading text-sm font-semibold text-white hover:bg-brand-dark"
            onClick={() => setOpen(false)}
          >
            Submit Property
          </a>
        </div>
      )}
    </header>
  )
}
