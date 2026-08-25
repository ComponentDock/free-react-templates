import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = ['Home', 'About', 'Rooms', 'Resto & Bar', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full bg-ink/90 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#" className="font-heading text-2xl font-bold text-brand">
          Solace
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-semibold text-white/80 transition-colors hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded bg-brand px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-dark md:inline-block"
        >
          Book Now
        </a>

        {/* Mobile toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'border-t border-white/10 bg-ink px-4 pb-4 md:hidden',
          mobileOpen ? 'block' : 'hidden',
        )}
      >
        <ul className="flex flex-col gap-3 pt-3">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-sm font-semibold text-white/80 transition-colors hover:text-brand"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="mt-3 block rounded bg-brand px-5 py-2 text-center text-sm font-bold text-white"
          onClick={() => setMobileOpen(false)}
        >
          Book Now
        </a>
      </div>
    </nav>
  )
}
