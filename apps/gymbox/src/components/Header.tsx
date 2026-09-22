import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <nav aria-label="Main navigation" className="bg-ink/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          {/* Logo */}
          <a href="#home" className="font-display text-2xl font-bold tracking-wide text-white">
            GYMBOX
          </a>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white transition-colors hover:text-primary-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Join Us button (desktop) */}
          <a
            href="#contact"
            className="hidden boxed-btn3 px-6 py-2 text-lg text-white lg:inline-flex"
          >
            Join Us
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-300 lg:hidden',
            open ? 'max-h-96' : 'max-h-0',
          )}
        >
          <ul className="flex flex-col gap-1 border-t border-gray-800 px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-primary-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="boxed-btn3 mt-2 block px-3 py-2 text-center text-lg text-white"
              >
                Join Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
