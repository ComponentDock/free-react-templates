import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Agent', href: '#agent' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navy text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="text-2xl font-bold tracking-wide">
          Havenridge
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded px-3 py-2 text-sm font-semibold transition-colors hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="#contact"
            className="hidden rounded bg-primary-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600 sm:inline-flex"
          >
            Get Started
          </ButtonLink>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded text-white lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 lg:hidden',
          menuOpen ? 'max-h-96' : 'max-h-0',
        )}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-4 pb-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded px-3 py-2 text-sm font-semibold transition-colors hover:bg-navy-light hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="#contact"
            className="mt-2 rounded bg-primary-500 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Get Started
          </ButtonLink>
        </nav>
      </div>
    </header>
  )
}
