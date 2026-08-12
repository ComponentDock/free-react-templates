import { useEffect, useState } from 'react'
import { Camera, ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, DROPDOWNS, NAV_LINKS } from '../data'

const SECTION_HREFS: Record<string, string> = {
  Home: '#home',
  About: '#about',
  Projects: '#gallery',
  Pages: '#services',
  Blog: '#feedback',
  Contact: '#contact',
}

const DROPDOWN_HREFS: Record<string, string> = {
  Projects: '#gallery',
  'Project Details': '#gallery',
  Elements: '#services',
  Blog: '#feedback',
  'Blog Details': '#feedback',
}

const LINK_CLASSES =
  'inline-flex items-center text-sm font-medium uppercase tracking-wide text-white transition-all hover:text-brand lg:h-[120px] lg:px-5'

const MOBILE_LINK_CLASSES =
  'block border-b border-white/20 py-2.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:text-brand'

/**
 * Header — absolute over the hero: "Iris" camera wordmark, six uppercase
 * white links (Home active) with hover dropdowns for Projects / Pages /
 * Blog, a hamburger for the stacked mobile menu, and a solid-black bar
 * once the page is scrolled.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => {
    setOpen(false)
    setMobileDropdown(null)
  }

  const toggleMobileMenu = () => {
    setOpen((value) => !value)
    setMobileDropdown(null)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all',
        scrolled ? 'bg-night shadow-md' : 'bg-night lg:bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center px-4 lg:px-8">
        <a
          href="#home"
          aria-label={`${BRAND} home`}
          className="flex items-center gap-2 py-4 lg:h-[120px]"
        >
          <Camera className="h-5 w-5 text-white" aria-hidden="true" />
          <span className="text-lg font-bold uppercase tracking-widest text-white">{BRAND}</span>
        </a>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center">
            {NAV_LINKS.map((label) => {
              const items = DROPDOWNS[label]
              if (!items) {
                return (
                  <li key={label}>
                    <a
                      href={SECTION_HREFS[label]}
                      className={cn(LINK_CLASSES, label === 'Home' && 'text-brand')}
                    >
                      {label}
                    </a>
                  </li>
                )
              }
              return (
                <li
                  key={label}
                  className="relative"
                  onMouseEnter={() => setDropdown(label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button
                    type="button"
                    aria-expanded={dropdown === label}
                    onClick={() => setDropdown((current) => (current === label ? null : label))}
                    className={cn(LINK_CLASSES, 'gap-1')}
                  >
                    {label} <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  {dropdown === label && (
                    <ul className="absolute left-0 top-full min-w-[200px] bg-white py-2 shadow-[0px_3px_16px_0px_rgba(0,0,0,0.1)]">
                      {items.map((item) => (
                        <li key={item}>
                          <a
                            href={DROPDOWN_HREFS[item]}
                            className="block px-5 py-2.5 text-sm text-ink transition-colors hover:text-brand"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={toggleMobileMenu}
          className="ml-auto p-3 text-white lg:hidden"
        >
          {open ? (
            <X className="h-7 w-7" aria-hidden="true" />
          ) : (
            <Menu className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/20 bg-night px-4 pb-6 pt-2 lg:hidden">
          <ul>
            {NAV_LINKS.map((label) => {
              const items = DROPDOWNS[label]
              if (!items) {
                return (
                  <li key={label}>
                    <a
                      href={SECTION_HREFS[label]}
                      onClick={closeMenu}
                      className={MOBILE_LINK_CLASSES}
                    >
                      {label}
                    </a>
                  </li>
                )
              }
              return (
                <li key={label}>
                  <button
                    type="button"
                    aria-expanded={mobileDropdown === label}
                    onClick={() =>
                      setMobileDropdown((current) => (current === label ? null : label))
                    }
                    className="flex w-full items-center justify-between border-b border-white/20 py-2.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:text-brand"
                  >
                    {label} <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  {mobileDropdown === label && (
                    <ul className="pl-4">
                      {items.map((item) => (
                        <li key={item}>
                          <a
                            href={DROPDOWN_HREFS[item]}
                            onClick={closeMenu}
                            className="block py-2 text-sm text-muted transition-colors hover:text-brand"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
