import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Send, X } from 'lucide-react'
import {
  dropdownOpenLabel,
  dropdownToggleLabel,
  mobileMenuLabel,
  navItems,
  siteName,
} from '../data'
import { cn } from '@free-react-templates/ui'

const SCROLL_THRESHOLD = 40

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDropdown = (label: string) => {
    setOpenDropdown((current) => (current === label ? null : label))
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled ? 'bg-brand/90' : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6"
      >
        <a href="#" className="flex items-center gap-2 text-white">
          <Send aria-hidden="true" className="h-5 w-5" />
          <span className="font-serif text-xl font-bold tracking-wide">{siteName}</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              {item.children ? (
                <>
                  <button
                    type="button"
                    aria-expanded={openDropdown === item.label}
                    aria-label={dropdownToggleLabel(item.label)}
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-white transition-opacity hover:opacity-80"
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        'h-3.5 w-3.5 transition-transform',
                        openDropdown === item.label && 'rotate-180',
                      )}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <ul className="absolute left-0 top-full mt-1 min-w-36 bg-white/95 py-2 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child}>
                          <a
                            href="#"
                            className="block px-4 py-2 text-xs font-medium uppercase tracking-wide text-ink transition-colors hover:bg-mist"
                          >
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  className="text-xs font-medium uppercase tracking-wide text-white transition-opacity hover:opacity-80"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={mobileMenuLabel}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="h-6 w-6" />
          ) : (
            <Menu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <ul className="bg-brand/95 px-4 pb-4 lg:hidden">
          {navItems.map((item) => (
            <li key={item.label} className="border-t border-white/10 py-1">
              {item.children ? (
                <>
                  <button
                    type="button"
                    aria-expanded={openDropdown === item.label}
                    aria-label={dropdownToggleLabel(item.label)}
                    onClick={() => toggleDropdown(item.label)}
                    className="flex w-full items-center justify-between py-2 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    {item.label}
                    <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" />
                  </button>
                  {openDropdown === item.label && (
                    <ul aria-label={dropdownOpenLabel(item.label)} className="pb-2">
                      {item.children.map((child) => (
                        <li key={child}>
                          <a
                            href="#"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1.5 pl-4 text-xs uppercase tracking-wide text-white/80"
                          >
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-xs font-medium uppercase tracking-wide text-white"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
