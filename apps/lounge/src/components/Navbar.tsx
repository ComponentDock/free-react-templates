import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  {
    label: 'Rooms',
    href: '#rooms',
    children: [
      { label: 'Superior Room Twin', href: '#rooms' },
      { label: 'Premier Suite', href: '#rooms' },
      { label: 'Family Room', href: '#rooms' },
    ],
  },
  { label: 'Dining & Bar', href: '#menu' },
  { label: 'Amenities', href: '#services' },
  { label: 'Booking', href: '#booking' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [roomsOpen, setRoomsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-lounge-900 shadow-lg' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-heading text-2xl font-bold text-white">
          Lounge
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) =>
            link.children ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setRoomsOpen(true)}
                onMouseLeave={() => setRoomsOpen(false)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                  <ChevronDown className="h-3 w-3" />
                </a>
                {roomsOpen && (
                  <ul className="absolute left-0 top-full mt-2 w-48 rounded bg-lounge-800 py-2 shadow-xl">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-4 py-2 text-sm text-white/80 transition-colors hover:bg-lounge-700 hover:text-white"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ),
          )}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="space-y-2 bg-lounge-900 px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block py-2 text-sm text-white/80 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
              {link.children && (
                <ul className="ml-4 space-y-1">
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="block py-1 text-xs text-white/60 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
