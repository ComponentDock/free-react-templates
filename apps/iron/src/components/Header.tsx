import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'We Offer', href: '#offer' },
  { label: 'Top Course', href: '#courses' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Trainer', href: '#team' },
  { label: 'Plan', href: '#pricing' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-ink text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
          <span className="hidden text-xs tracking-wide text-gray-300 sm:inline">
            Shape your body well.
          </span>
          <a
            href="#home"
            className="font-display text-2xl font-bold tracking-wide text-primary-400"
          >
            IRON
          </a>
          <a
            href="tel:+8004551234"
            className="flex items-center gap-2 text-xs text-gray-300 transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">+800 455 1234</span>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav
        aria-label="Main navigation"
        className="border-b border-gray-800 bg-ink/95 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Desktop nav */}
          <ul className="hidden items-center gap-6 lg:flex">
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

          {/* Brand (visible on mobile) */}
          <a href="#home" className="font-display text-xl font-bold text-primary-400 lg:hidden">
            IRON
          </a>

          {/* Spacer for mobile */}
          <div className="h-10 w-10 lg:hidden" />
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
          </ul>
        </div>
      </nav>
    </header>
  )
}
