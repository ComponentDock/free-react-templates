import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'About', href: '#services' },
  { label: 'Blog', href: '#testimonials' },
  { label: 'Contact', href: '#footer' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-50">
      <nav className="bg-ink">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#" className="font-heading text-2xl font-bold text-brand">
            RoxyGlow
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    'text-sm font-medium uppercase tracking-wide transition-colors hover:text-brand',
                    link.label === 'Home' ? 'text-brand' : 'text-white',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="border-t border-white/10 bg-ink px-4 pb-4 md:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block border-b border-white/10 py-3 text-sm font-medium uppercase text-white hover:text-brand"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
