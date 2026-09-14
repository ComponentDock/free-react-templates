import { useState, useCallback, useEffect } from 'react'
import { cn } from '@free-react-templates/ui'
import { Menu, X } from 'lucide-react'

export interface NavbarProps {
  className?: string
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar({ className }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggle = useCallback(() => setMobileOpen((o) => !o), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-dark/95 shadow-lg' : 'bg-transparent',
        className,
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-serif text-2xl font-bold text-white">
          Astra
        </a>

        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm font-medium text-white/80 transition-colors hover:text-primary-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="text-white md:hidden"
          onClick={toggle}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-white/10 bg-dark/95 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block font-sans text-sm font-medium text-white/80 transition-colors hover:text-primary-400"
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
