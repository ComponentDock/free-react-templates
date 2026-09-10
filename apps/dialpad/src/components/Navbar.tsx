import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'We Offer', href: '#we-offer' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm transition-colors dark:bg-charcoal">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="text-xl font-bold uppercase tracking-wider text-ink dark:text-white"
        >
          Dialpad<span className="text-brand">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-xs font-medium uppercase tracking-wider text-mist transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="#contact"
            size="sm"
            className="hidden rounded-full bg-gradient-to-r from-sky to-brand px-6 text-xs font-medium uppercase tracking-wider text-white hover:opacity-90 lg:inline-flex"
          >
            Get a Quote
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-mist lg:hidden dark:text-gray-300"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-gray-100 bg-white px-4 py-3 dark:border-gray-800 dark:bg-charcoal lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium uppercase tracking-wide text-mist transition-colors hover:text-brand dark:text-gray-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
