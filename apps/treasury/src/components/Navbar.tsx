import { useState } from 'react'
import { Landmark, Menu, X } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm transition-colors dark:bg-ink-dark">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <Landmark className="h-6 w-6 text-brand" aria-hidden="true" />
          <span className="text-xl font-bold text-ink dark:text-white">
            Treasury<span className="text-brand">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <ul className="flex items-center gap-6 text-sm font-semibold text-ink dark:text-gray-200">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#contact"
                aria-label={social.label}
                className="text-gray-400 transition-colors hover:text-brand"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </nav>

        <button
          type="button"
          className="text-ink md:hidden dark:text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden dark:bg-ink-dark dark:border-gray-700">
          <ul className="flex flex-col gap-3 text-sm font-semibold text-ink dark:text-gray-200">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block py-2 transition-colors hover:text-brand"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
