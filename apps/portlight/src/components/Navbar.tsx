import { cn } from '@free-react-templates/ui'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Rooms', href: '#rooms' },
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-black/90 shadow-lg' : 'bg-transparent',
        className,
      )}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#home" className="text-2xl font-bold text-white">
          Port<span className="text-brand">light</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <ul className="border-t border-white/10 bg-black/95 px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 text-sm font-medium text-white/80 transition-colors hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
