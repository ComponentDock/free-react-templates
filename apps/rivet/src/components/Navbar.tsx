import { useState, useEffect } from 'react'
import { cn } from '@free-react-templates/ui'
import { Menu, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'News', href: '#news' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-paper shadow-md' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a
          href="#home"
          className={cn('text-2xl font-bold', isScrolled ? 'text-heading' : 'text-white')}
        >
          Rivet
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand',
                  isScrolled ? 'text-heading' : 'text-white',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <ButtonLink href="#contact" variant="primary" className="bg-brand hover:bg-brand-dark">
              Get A Quote
            </ButtonLink>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? (
            <X className={isScrolled ? 'text-heading' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-heading' : 'text-white'} size={24} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-paper shadow-md">
          <ul className="flex flex-col gap-4 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-heading text-sm font-medium hover:text-brand"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <ButtonLink
                href="#contact"
                variant="primary"
                className="bg-brand hover:bg-brand-dark w-full"
                onClick={() => setIsMobileOpen(false)}
              >
                Get A Quote
              </ButtonLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
