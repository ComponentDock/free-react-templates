import { useEffect, useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      aria-label="Primary"
      className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-md' : ''}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded bg-brand font-display text-lg font-bold text-white">
            I
          </span>
          <span className="font-display text-xl font-bold uppercase tracking-wide text-ink">
            Industrix
          </span>
        </a>

        <div className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-body transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded border border-gray-200 text-body transition-colors hover:border-brand hover:text-brand lg:flex"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>

          <ButtonLink
            href="#contact"
            className="hidden rounded bg-brand px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark lg:inline-flex"
          >
            Get a Quote
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((c) => !c)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded border border-gray-200 text-body lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white px-4 py-3 lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-body transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="#contact"
            className="mt-3 block rounded bg-brand px-6 py-2.5 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Get a Quote
          </ButtonLink>
        </div>
      )}
    </nav>
  )
}
