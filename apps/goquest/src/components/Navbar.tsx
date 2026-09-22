import { useState } from 'react'
import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavbarProps {
  mobileMenuOpen: boolean
  onToggleMenu: () => void
  onCloseMenu: () => void
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Package', href: '#package' },
  {
    label: 'Blog',
    href: '#blog',
    children: [
      { label: 'Blog Standard', href: '#blog-standard' },
      { label: 'Blog Details', href: '#blog-details' },
    ],
  },
  {
    label: 'Pages',
    href: '#pages',
    children: [
      { label: 'Elements', href: '#elements' },
      { label: 'About Us', href: '#about-us' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export function Navbar({ mobileMenuOpen, onToggleMenu, onCloseMenu }: NavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header>
      {/* Top info bar */}
      <div className="bg-navy-dark text-footer-text text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@goquest.com"
              className="flex items-center gap-1.5 hover:text-accent-warm transition-colors"
            >
              <Mail size={14} />
              <span>info@goquest.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-1.5 hover:text-accent-warm transition-colors"
            >
              <Phone size={14} />
              <span>+1 (234) 567 890</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              <span>123 Avenue, New York</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
              <a
                key={social}
                href={`#${social.toLowerCase()}`}
                aria-label={social}
                className="hover:text-accent-warm transition-colors"
              >
                {social.charAt(0)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1">
            <span className="font-heading text-3xl font-bold text-brand">
              Go<span className="text-accent-red">Quest</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 font-heading text-lg font-medium text-nav-text hover:text-brand transition-colors uppercase"
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} />}
                </a>
                {link.children && openDropdown === link.label && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg rounded py-2 min-w-[180px] z-50">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-4 py-2 text-sm text-nav-text hover:bg-gray-50 hover:text-brand transition-colors"
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

          {/* Mobile menu button */}
          <button
            onClick={onToggleMenu}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={cn(
                'w-6 h-0.5 bg-heading transition-all',
                mobileMenuOpen && 'rotate-45 translate-y-2',
              )}
            />
            <span
              className={cn('w-6 h-0.5 bg-heading transition-all', mobileMenuOpen && 'opacity-0')}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-heading transition-all',
                mobileMenuOpen && '-rotate-45 -translate-y-2',
              )}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <ul className="px-4 py-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={onCloseMenu}
                    className="block py-2 font-heading text-lg text-nav-text hover:text-brand"
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <ul className="pl-4 space-y-1">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            onClick={onCloseMenu}
                            className="block py-1 text-sm text-body hover:text-brand"
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
          </div>
        )}
      </nav>
    </header>
  )
}
