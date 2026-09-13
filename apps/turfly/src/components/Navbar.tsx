import { Menu, X, Scissors } from 'lucide-react'
import { useState } from 'react'
import { ButtonLink } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      id="home"
      aria-label="Main navigation"
      className="sticky top-0 z-50 bg-charcoal text-white"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2 text-xl font-bold">
          <Scissors className="h-5 w-5 text-primary-400" aria-hidden="true" />
          Turfly
        </a>

        <ul className="hidden items-center gap-8 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ButtonLink
          href="#contact"
          className="hidden rounded bg-primary-400 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-500 md:inline-flex"
        >
          Get a Quote
        </ButtonLink>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-700 px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-sm font-medium transition-colors hover:text-primary-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink
            href="#contact"
            className="mt-4 inline-flex w-full justify-center rounded bg-primary-400 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
          >
            Get a Quote
          </ButtonLink>
        </div>
      )}
    </nav>
  )
}
