import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="banner-area bg-navy-800 text-white" role="banner">
      <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-white font-[family-name:var(--font-condensed)]"
          >
            Tint
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Phone CTA */}
          <a
            href="tel:+445634693785"
            className="hidden items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-gold-400 md:flex"
          >
            <Phone size={16} />
            +44 5634 693 785
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center text-white md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className={cn('mt-4 space-y-3 md:hidden', open ? 'block' : 'hidden')}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-white/80 transition-colors hover:text-gold-400"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+445634693785"
            className="flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-gold-400"
          >
            <Phone size={16} />
            +44 5634 693 785
          </a>
        </div>
      </nav>
    </header>
  )
}
