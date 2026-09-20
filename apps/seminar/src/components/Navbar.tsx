import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ButtonLink } from '@free-react-templates/ui'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'News', href: '#news' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 z-50 w-full bg-ink/95 backdrop-blur-sm border-b border-border"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-wide text-white">
          Seminar<span className="text-primary-400">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-sm text-text transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ButtonLink
            href="#tickets"
            className="bg-gradient-to-r from-primary-700 to-primary-400 text-white px-6 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Buy Tickets
          </ButtonLink>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden transition-all duration-300 md:hidden',
          open ? 'max-h-96 border-t border-border' : 'max-h-0',
        )}
      >
        <div className="flex flex-col gap-4 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-text transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="#tickets"
            className="bg-gradient-to-r from-primary-700 to-primary-400 text-white px-6 py-2 rounded text-sm font-semibold w-fit hover:opacity-90 transition-opacity"
          >
            Buy Tickets
          </ButtonLink>
        </div>
      </div>
    </nav>
  )
}
