import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Albums', href: '#discography' },
  { label: 'Tours', href: '#shows' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-void/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
      >
        <a href="#home" className="font-script text-2xl font-bold text-accent-400">
          Groove
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-accent-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ButtonLink
            href="#shows"
            className="rounded-full bg-primary-400 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent-400"
          >
            Buy tickets
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-void/95 px-4 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-accent-400"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink
            href="#shows"
            className="mt-4 inline-block rounded-full bg-primary-400 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent-400"
          >
            Buy tickets
          </ButtonLink>
        </div>
      )}
    </header>
  )
}
