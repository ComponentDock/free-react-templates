import { useState } from 'react'
import { Menu, X, Car } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { useScrolled } from './useScrolled'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-gray-100 bg-white shadow-md' : 'bg-white/95 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
            <Car className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-heading text-xl font-bold text-ink">Car Wash</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-mist transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="tel:+15551234567"
            className="hidden rounded-[30px] bg-brand px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark lg:inline-flex"
          >
            +1 555 123 4567
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-mist lg:hidden"
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
        <nav aria-label="Mobile" className="border-t border-gray-100 bg-white px-4 py-3 lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-mist transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+15551234567"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-[30px] bg-brand px-6 py-2 text-center text-sm font-semibold text-white"
          >
            +1 555 123 4567
          </a>
        </nav>
      )}
    </header>
  )
}
