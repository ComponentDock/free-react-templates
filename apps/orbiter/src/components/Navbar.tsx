import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = ['Home', 'Our Services', 'Gallery', 'About', 'Contact Us'] as const
const DROPDOWN_ITEMS = ['Web Design', 'Web Development', 'SEO Marketing'] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [whyOpen, setWhyOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Brand */}
        <a href="#" className="text-2xl font-bold text-brand-primary">
          Orbiter
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-primary',
                  link === 'Home' ? 'text-brand-primary' : 'text-body',
                )}
              >
                {link}
              </a>
            </li>
          ))}
          <li
            className="relative"
            onMouseEnter={() => setWhyOpen(true)}
            onMouseLeave={() => setWhyOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-body transition-colors hover:text-brand-primary"
              aria-expanded={whyOpen}
            >
              Why Orbiter <ChevronDown size={14} />
            </button>
            {whyOpen && (
              <ul className="absolute left-0 top-full z-50 min-w-[180px] bg-white py-2 shadow-lg">
                {DROPDOWN_ITEMS.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block px-5 py-2 text-sm text-body transition-colors hover:text-brand-primary"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-body lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="space-y-3 px-5 pb-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="block text-sm font-medium text-body transition-colors hover:text-brand-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <div>
            <button
              className="flex items-center gap-1 text-sm font-medium text-body"
              onClick={() => setWhyOpen(!whyOpen)}
              aria-expanded={whyOpen}
            >
              Why Orbiter <ChevronDown size={14} />
            </button>
            {whyOpen && (
              <div className="mt-2 space-y-2 pl-4">
                {DROPDOWN_ITEMS.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-sm text-footer-text transition-colors hover:text-brand-primary"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
