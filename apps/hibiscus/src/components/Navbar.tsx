import { useState } from 'react'
import { Menu, X, MapPin, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'About Us', href: '#about' },
  { label: 'Pages', href: '#pages' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar({ className }: { className?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className={cn('sticky top-0 z-50 bg-ink text-white', className)}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Top info bar */}
      <div className="border-b border-white/10 bg-ink/80 text-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2 text-white/70">
            <MapPin size={14} />
            <span>96 Ernser Vista Suite 437, NY, US</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <Phone size={14} />
            <span>(123) 456-78-910</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="font-heading text-2xl font-bold tracking-wide text-brand">
          HIBISCUS
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-sm font-semibold uppercase tracking-wider text-white/80 transition hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="bg-brand px-6 py-2 font-heading text-sm font-semibold uppercase tracking-[2px] text-white transition hover:bg-brand/90"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 font-heading text-sm font-semibold uppercase text-white/80 hover:text-brand"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="mt-2 block bg-brand px-6 py-2 text-center font-heading text-sm font-semibold uppercase tracking-[2px] text-white"
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  )
}
