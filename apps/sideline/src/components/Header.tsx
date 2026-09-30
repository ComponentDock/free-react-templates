import { useState } from 'react'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navItems, utilityContact } from '../data'
import { BrandIcon } from './BrandIcon'
import { ShieldLogo } from './ShieldLogo'

const socials = [
  { name: 'facebook', label: 'Facebook' },
  { name: 'instagram', label: 'Instagram' },
  { name: 'twitter', label: 'Twitter' },
  { name: 'linkedin', label: 'LinkedIn' },
] as const

/** Header: white utility top row (social + contact) over a black navbar with
 *  dropdown panels (#edf0f5) and a fullscreen dark mobile menu. */
export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header id="home" className="relative z-40">
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
          <ul className="flex items-center gap-4">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href="#contact"
                  aria-label={social.label}
                  className="text-ink transition-colors hover:text-brand"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6 text-sm text-ink">
            <a
              href={`mailto:${utilityContact.email}`}
              className="flex items-center gap-2 transition-colors hover:text-brand"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {utilityContact.email}
            </a>
            <a
              href={`tel:${utilityContact.phone}`}
              className="hidden items-center gap-2 transition-colors hover:text-brand sm:flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {utilityContact.phone}
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-black" aria-label="Main">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
          <a
            href="#home"
            className="flex items-center gap-2 py-2 text-xl font-bold uppercase tracking-widest text-white"
          >
            <ShieldLogo className="h-12 w-10" />
            Sideline
          </a>
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.label} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown((current) => (current === item.label ? null : item.label))
                      }
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                      className={cn(
                        'py-4 text-sm font-bold uppercase tracking-widest transition-colors',
                        item.active ? 'text-brand' : 'text-white hover:text-brand',
                      )}
                    >
                      {item.label}
                    </button>
                    {openDropdown === item.label ? (
                      <ul className="absolute left-0 top-full z-50 min-w-44 border-t-2 border-brand bg-panel py-2 shadow-lg">
                        {item.dropdown.items.map((sub) => (
                          <li key={sub}>
                            <a
                              href={item.href}
                              className="block px-4 py-2 text-sm text-panel-text transition-colors hover:bg-panel-hover"
                            >
                              {sub}
                            </a>
                          </li>
                        ))}
                        {item.dropdown.subMenu ? (
                          <>
                            <li className="mt-2 border-t border-panel-hover px-4 pt-2 text-xs font-bold uppercase tracking-widest text-panel-text/70">
                              Sub Menu
                            </li>
                            {item.dropdown.subMenu.map((nested) => (
                              <li key={nested}>
                                <a
                                  href={item.href}
                                  className="block px-6 py-2 text-sm text-panel-text transition-colors hover:bg-panel-hover"
                                >
                                  {nested}
                                </a>
                              </li>
                            ))}
                          </>
                        ) : null}
                      </ul>
                    ) : null}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="text-white md:hidden"
          >
            {mobileOpen ? (
              <X className="h-7 w-7" aria-hidden="true" />
            ) : (
              <Menu className="h-7 w-7" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/95 px-6 pt-6 md:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-xl font-bold uppercase tracking-widest text-white">
              <ShieldLogo className="h-10 w-8" />
              Sideline
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-white"
            >
              <X className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
          <ul className="mt-8 flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block py-3 text-lg font-bold uppercase tracking-widest',
                    item.active ? 'text-brand' : 'text-white',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
