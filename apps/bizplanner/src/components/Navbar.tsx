import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about-us' },
  { label: 'SERVICES', href: '#service-section' },
  { label: 'PORTFOLIO', href: '#project-section' },
  { label: 'TEAM', href: '#team-section' },
  { label: 'SKILLS', href: '#skill-section' },
  { label: 'CLIENTS', href: '#our-client' },
  { label: 'PRICING', href: '#pricing-section' },
  { label: 'BLOG', href: '#blog-section' },
  { label: 'CONTACT', href: '#contact-section' },
] as const

export interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header className={cn('sticky top-0 z-50 bg-white shadow-sm', className)} role="banner">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-heading">
          Biz<span className="text-primary-500">Planner</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-smoke transition-colors hover:text-primary-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-heading lg:hidden"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-gray-100 lg:hidden">
          <ul className="flex flex-col gap-1 px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block py-2 text-sm font-medium text-smoke transition-colors hover:text-primary-500"
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
