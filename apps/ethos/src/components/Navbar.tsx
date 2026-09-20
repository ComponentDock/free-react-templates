import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-brand-400 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white/80">
              <Phone className="h-4 w-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@ethos.com" className="flex items-center gap-2 hover:text-white/80">
              <Mail className="h-4 w-4" />
              <span>info@ethos.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-2xl font-bold text-brand-400">
          Ethos
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-gray-700 transition-colors hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="text-gray-700 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={cn('md:hidden', open ? 'block' : 'hidden')}
      >
        <ul className="space-y-1 border-t px-4 pb-4 pt-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2 text-sm font-medium uppercase tracking-wide text-gray-700 hover:bg-gray-100 hover:text-brand-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
