import { useState } from 'react'
import { Star, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = ['Home', 'About Us', 'Rooms', 'News', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex flex-col items-center text-white">
          <span className="text-xs font-light tracking-widest uppercase">hotel</span>
          <span className="font-display text-2xl font-bold leading-tight">Belmont</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={10} fill="currentColor" className="text-accent" />
            ))}
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-white/90 transition-colors hover:text-accent"
            >
              {link}
            </a>
          ))}
          <button className="rounded bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark">
            Book Your Stay
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark/95 transition-opacity md:hidden',
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-lg font-medium text-white transition-colors hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="mt-4 rounded bg-brand px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">
            Book Your Stay
          </button>
        </nav>
      </div>
    </header>
  )
}
