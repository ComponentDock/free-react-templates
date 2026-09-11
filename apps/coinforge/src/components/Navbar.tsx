import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'White Paper', href: '#whitepaper' },
  { label: 'Token Sale', href: '#tokensale' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Team', href: '#team' },
  { label: 'App', href: '#app' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-brand/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-bold text-white">
          Coinforge
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-light transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#login"
            className="hidden rounded-full bg-gradient-to-r from-gold to-coral px-6 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 lg:inline-block"
          >
            Login
          </a>
          <button
            type="button"
            onClick={() => setOpen((c) => !c)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-white/10 bg-brand/95 px-6 pb-4 pt-2 backdrop-blur-sm lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#login"
            className="mt-2 block rounded-full bg-gradient-to-r from-gold to-coral px-6 py-2 text-center text-sm font-semibold text-white"
          >
            Login
          </a>
        </nav>
      )}
    </header>
  )
}
