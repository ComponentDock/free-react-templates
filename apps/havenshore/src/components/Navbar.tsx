import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = ['Home', 'Rooms', 'About', 'Gallery', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="banner-area header-transparent fixed top-0 z-50 w-full">
      <div className="main-header">
        <div className="header-bottom">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            {/* Logo */}
            <a href="/" className="font-display text-2xl font-semibold text-white">
              Havenshore
            </a>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <a
                href="tel:1088267354"
                className="hidden items-center gap-2 text-sm text-white/80 hover:text-white md:flex"
              >
                <Phone size={16} />
                <span>Call Us: 10 (88) 267 354</span>
              </a>
              <a
                href="#booking"
                className="hidden rounded-full bg-brand px-6 py-2 text-sm font-medium text-white transition hover:bg-brand-dark sm:inline-block"
              >
                Book Now
              </a>
              {/* Hamburger */}
              <button
                onClick={() => setOpen(!open)}
                className="flex h-10 w-10 items-center justify-center text-white md:hidden"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className={cn('absolute left-0 top-full w-full bg-surface/95 backdrop-blur-sm md:hidden')}
        >
          <ul className="flex flex-col gap-4 px-6 py-6">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block text-white/80 transition hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a href="tel:1088267354" className="block text-sm text-white/60">
                10 (78) 273 3563
              </a>
            </li>
            <li>
              <a href="mailto:info@havenshore.com" className="block text-sm text-white/60">
                info@havenshore.com
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
