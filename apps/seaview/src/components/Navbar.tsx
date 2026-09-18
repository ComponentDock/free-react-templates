import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-2xl font-bold text-white">
          Seaview
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#booking"
            className="hidden rounded bg-primary-400 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-400/90 lg:inline-block"
          >
            Book Now
          </a>

          <button
            aria-label="Toggle menu"
            className="text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          'fixed inset-0 top-[72px] z-40 flex flex-col items-center justify-center gap-8 bg-navy/95 transition-opacity lg:hidden',
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-xl font-medium uppercase tracking-wider text-white transition-colors hover:text-primary-400"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#booking"
          onClick={() => setMobileOpen(false)}
          className="rounded bg-primary-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-400/90"
        >
          Book Now
        </a>
      </div>
    </nav>
  )
}
