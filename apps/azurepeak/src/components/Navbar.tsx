import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Dining', href: '#dining' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

interface NavbarProps {
  dark: boolean
  toggleDark: () => void
}

export function Navbar({ dark, toggleDark }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-blue-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="font-display text-2xl font-bold tracking-wide text-white">
          AzurePeak
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleDark}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="text-white/80 transition-colors hover:text-white"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a
            href="#book"
            className="rounded-full bg-amber-500 px-6 py-2 text-sm font-semibold text-blue-900 transition-colors hover:bg-amber-400"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile right-side controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleDark}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="text-white/80 transition-colors hover:text-white"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a
            href="#book"
            className="rounded-full bg-amber-500 px-4 py-1.5 text-xs font-semibold text-blue-900 transition-colors hover:bg-amber-400"
          >
            Book Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="text-white"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={cn('md:hidden', open ? 'block' : 'hidden')}
      >
        <ul className="space-y-1 px-4 pb-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
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
