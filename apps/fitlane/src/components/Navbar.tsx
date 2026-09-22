import { useState } from 'react'
import { Menu, X, Dumbbell } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Classes', href: '#classes' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header id="home" className="fixed inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between bg-navy-500/95 px-4 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-2 text-xl font-bold text-white">
          <Dumbbell className="h-6 w-6 text-primary-500" aria-hidden="true" />
          Fitlane
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-primary-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden bg-navy-500/95 transition-all duration-300 md:hidden',
          mobileOpen ? 'max-h-80' : 'max-h-0',
        )}
      >
        <ul className="flex flex-col gap-4 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-primary-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
