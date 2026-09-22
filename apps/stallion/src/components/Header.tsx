import { useState } from 'react'
import { Menu, X, Dumbbell } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Trainers', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header id="header" className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm text-muted sm:px-6 lg:px-8">
          <a href="mailto:info@stallion.com" className="hover:text-brand">
            info@stallion.com
          </a>
          <a href="tel:+16035354592" className="hover:text-brand">
            +1 (603) 535-4592
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-ink">
          <Dumbbell className="h-7 w-7 text-brand" aria-hidden="true" />
          Stallion
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-brand',
                    i === 0 ? 'text-brand' : 'text-ink',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-gray-100 md:hidden">
          <ul className="flex flex-col gap-1 px-4 pb-4">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'block rounded px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-brand',
                    i === 0 ? 'text-brand' : 'text-ink',
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
