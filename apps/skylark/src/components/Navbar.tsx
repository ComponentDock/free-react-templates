import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Mail, MapPin, Menu, Phone, Plane, X } from 'lucide-react'
import { BRAND, CONTACT, NAV_LINKS, SOCIALS } from '../data'
import { cn } from '@free-react-templates/ui'
import { FacebookIcon, SkypeIcon, TwitterIcon, YoutubeIcon } from './icons'

const SOCIAL_ICONS = [FacebookIcon, TwitterIcon, YoutubeIcon, SkypeIcon]

/* Navbar — transparent over the hero with a dark top info bar (contact
   details + social icons) and a white options bar below it. Desktop menu
   shows a click/hover dropdown under "Pages"; mobile collapses into a
   white slide-over drawer with a hamburger toggle. */
export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setDropdownOpen(false)
        setMobileOpen(false)
      }
    }
    function onPointerDown(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousedown', onPointerDown)
    }
  }, [])

  return (
    <header ref={navRef} className="absolute inset-x-0 top-0 z-50">
      <div className="bg-ink/60 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[13px] lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {CONTACT.address}
            </span>
            <span className="hidden items-center gap-1.5 md:flex">
              <Phone className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {CONTACT.phone}
            </span>
            <span className="hidden items-center gap-1.5 lg:flex">
              <Mail className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {CONTACT.email}
            </span>
          </div>
          <div className="flex items-center gap-4">
            {SOCIALS.map((social, index) => {
              const Icon = SOCIAL_ICONS[index]!
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="bg-white shadow-[0_2px_20px_rgba(29,42,59,0.08)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
          <a
            href="#home-section"
            className="flex items-center gap-2 py-4 text-2xl font-extrabold text-ink"
          >
            <span className="flex h-9 w-9 items-center justify-center bg-brand text-white">
              <Plane className="h-5 w-5" aria-hidden="true" />
            </span>
            {BRAND}
          </a>

          <nav aria-label="Main navigation" className="hidden items-stretch lg:flex">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    onClick={() => setDropdownOpen((open) => !open)}
                    className={cn(
                      'flex items-center gap-1 px-7 py-5 text-sm font-extrabold uppercase tracking-wide text-ink transition-colors hover:bg-ink/10',
                      dropdownOpen && 'bg-ink/10',
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                  {dropdownOpen && (
                    <div
                      className="absolute left-0 top-full w-52 bg-white py-2 shadow-[0_20px_30px_rgba(29,42,59,0.1)]"
                      role="menu"
                      aria-label={`${link.label} submenu`}
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          role="menuitem"
                          className="block px-6 py-2.5 text-sm font-bold text-ink/70 transition-colors hover:bg-ink/10 hover:text-ink"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={link.active ? 'page' : undefined}
                  className={cn(
                    'relative flex items-center px-7 py-5 text-sm font-extrabold uppercase tracking-wide text-ink transition-colors hover:bg-ink/10',
                    link.active &&
                      'bg-ink/10 after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-brand',
                  )}
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className="p-3 text-ink lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/50"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 flex h-full w-72 flex-col bg-white shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
              <span className="flex items-center gap-2 text-lg font-extrabold text-ink">
                <span className="flex h-8 w-8 items-center justify-center bg-brand text-white">
                  <Plane className="h-4 w-4" aria-hidden="true" />
                </span>
                {BRAND}
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="p-2 text-ink"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <span className="block px-2 py-3 text-sm font-extrabold uppercase tracking-wide text-ink">
                        {link.label}
                      </span>
                      <div className="mb-2 ml-4 border-l-2 border-ink/10 pl-4">
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm font-bold text-ink/70"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      aria-current={link.active ? 'page' : undefined}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b border-ink/10 px-2 py-3 text-sm font-extrabold uppercase tracking-wide text-ink"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
