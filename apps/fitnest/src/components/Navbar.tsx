import { useState } from 'react'
import { Menu, X, ChevronDown, Phone, Mail, Clock } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Classes', href: '#classes' },
  {
    label: 'Pages',
    href: '#',
    children: [
      { label: 'Services', href: '#services' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Instructors', href: '#instructors' },
    ],
  },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header>
      {/* Top bar */}
      <div className="bg-dark-bg text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6">
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" aria-hidden="true" />
              (+123) 456 789 10
            </span>
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3" aria-hidden="true" />
              info@fitnest.com
            </span>
            <span className="hidden items-center gap-1 sm:flex">
              <Clock className="h-3 w-3" aria-hidden="true" />
              Mon - Fri: 6.00 - 22.00
            </span>
          </div>
          <a
            href="#contact"
            className="rounded bg-brand px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Join Us
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="text-2xl font-bold text-heading">
            Fitnest
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((v) => !v)}
                    className="flex items-center gap-1 text-sm font-medium text-heading transition-colors hover:text-brand"
                  >
                    {link.label}
                    <ChevronDown className="h-3 w-3" aria-hidden="true" />
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute left-0 z-10 mt-2 w-40 rounded bg-white py-2 shadow-lg">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <a
                            href={child.href}
                            onClick={() => setDropdownOpen(false)}
                            className="block px-4 py-2 text-sm text-text hover:bg-light-bg hover:text-brand"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-heading transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              ),
            )}
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-text transition-colors hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="text-heading md:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className={cn('md:hidden', mobileOpen ? 'block' : 'hidden')}
        >
          <ul className="space-y-1 px-4 pb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded px-2 py-2 text-sm font-medium text-heading hover:bg-light-bg hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
