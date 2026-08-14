import { useEffect, useState, type FormEvent } from 'react'
import { GraduationCap, Mail, Menu, Moon, Phone, Search, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { contactInfo, navLinks, socials } from '../data'
import { BrandIcon, type SocialName } from './BrandIcon'

/** Two-part header: dark-indigo utility bar (contact info, Login/Register,
 *  social icons) over a white main bar (logo, nav, search) with a mobile
 *  slide-out menu and a suite-standard dark-mode toggle. */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [dark, setDark] = useState(() => window.localStorage.getItem('orenda-theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('orenda-theme', dark ? 'dark' : 'light')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setQuery('')
  }

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Utility bar */}
      <div className="bg-branddark text-white dark:bg-gray-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href="#home"
                  aria-label={social.label}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  <BrandIcon name={social.name as SocialName} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-1.5 hover:text-white/80"
            >
              <Mail aria-hidden="true" className="h-3.5 w-3.5" />
              {contactInfo.email}
            </a>
            <a
              href="tel:+102673560016"
              className="hidden items-center gap-1.5 hover:text-white/80 sm:flex"
            >
              <Phone aria-hidden="true" className="h-3.5 w-3.5" />
              {contactInfo.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <a href="#login" className="hover:text-white/80">
                Login
              </a>
              <span aria-hidden="true" className="text-white/40">
                |
              </span>
              <a href="#register" className="hover:text-white/80">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
          <a href="#home" className="flex items-center gap-2" aria-label="Orenda home">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-brand text-white">
              <GraduationCap aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="font-display text-2xl font-bold text-branddark dark:text-white">
              Orenda
            </span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-gray-800 transition-colors hover:text-brand dark:text-gray-200 dark:hover:text-primary-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <form onSubmit={handleSearch} role="search" className="hidden items-center md:flex">
              <label htmlFor="orenda-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <input
                  id="orenda-search"
                  type="search"
                  placeholder="Search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="h-10 w-44 rounded-sm border border-gray-300 bg-white px-3 pr-9 text-sm text-gray-800 outline-none transition-colors focus:border-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
                <button
                  type="submit"
                  aria-label="Submit search"
                  className="absolute right-0 top-0 flex h-10 w-9 items-center justify-center text-gray-500 hover:text-brand"
                >
                  <Search aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
            </form>

            <button
              type="button"
              onClick={() => setDark((value) => !value)}
              aria-label={dark ? 'Toggle light mode' : 'Toggle dark mode'}
              className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              {dark ? (
                <Sun aria-hidden="true" className="h-5 w-5" />
              ) : (
                <Moon aria-hidden="true" className="h-5 w-5" />
              )}
            </button>

            <button
              type="button"
              className="rounded-md p-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="orenda-mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? (
                <X aria-hidden="true" className="h-6 w-6" />
              ) : (
                <Menu aria-hidden="true" className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-out menu */}
      {mobileOpen ? (
        <nav
          id="orenda-mobile-menu"
          aria-label="Mobile"
          className="border-t border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900 lg:hidden"
        >
          <ul className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block py-2 text-sm font-semibold text-gray-800 hover:text-brand dark:text-gray-200',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex gap-4 border-t border-gray-100 pt-3 text-sm dark:border-gray-800">
              <a
                href="#login"
                onClick={() => setMobileOpen(false)}
                className="text-gray-600 hover:text-brand"
              >
                Login
              </a>
              <a
                href="#register"
                onClick={() => setMobileOpen(false)}
                className="text-gray-600 hover:text-brand"
              >
                Register
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
