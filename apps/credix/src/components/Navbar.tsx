import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const navLinks = ['Home', 'About', 'Services', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-navy-500 text-white text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <span className="font-heading font-bold tracking-wide">Credix</span>
          <div className="hidden items-center gap-6 md:flex">
            <span className="flex items-center gap-1 text-navy-200">
              <span aria-hidden="true">📍</span> 25th Street Avenue, Los Angeles, CA
            </span>
            <span className="flex items-center gap-1 text-navy-200">
              <span aria-hidden="true">✉</span> office@yourfirm.com
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white shadow-md" aria-label="Main navigation">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="/" className="font-heading text-xl font-bold text-navy-700">
            Credix
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex" role="list">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-semibold text-gray-900 transition hover:text-gold-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Phone CTA */}
          <div className="hidden items-center gap-2 md:flex">
            <Phone className="h-4 w-4 text-gold-400" aria-hidden="true" />
            <span className="text-sm font-bold text-gray-900">+800 49 900 900</span>
          </div>

          {/* Mobile toggle */}
          <button
            className="text-gray-900 md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
            <ul className="flex flex-col gap-3 pt-3" role="list">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block text-sm font-semibold text-gray-900 hover:text-gold-400"
                    onClick={() => setOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold-400" aria-hidden="true" />
              <span className="text-sm font-bold text-gray-900">+800 49 900 900</span>
            </div>
            <ButtonLink
              href="#contact"
              className="mt-4 inline-block rounded bg-gold-400 px-6 py-2 text-sm font-bold text-navy-700 transition hover:bg-gold-500"
            >
              Get in Touch
            </ButtonLink>
          </div>
        )}
      </nav>
    </header>
  )
}
