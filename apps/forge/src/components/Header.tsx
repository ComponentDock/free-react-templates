import { useEffect, useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
] as const

const SERVICE_LINKS = [
  { label: 'Branding', href: '#services' },
  { label: 'Web Design', href: '#services' },
  { label: 'App Design', href: '#services' },
  { label: 'Start Up', href: '#services' },
] as const

/* Header recreated from the source's transparent navbar: an absolute bar
   over the hero with the uppercase letter-spaced wordmark, centered links
   (Services opens a dropdown of the four services), and a right-side
   search field; a slide-in menu on narrow viewports. */

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8"
      >
        <a
          href="#home"
          aria-label="Forge home"
          className="text-xl font-normal tracking-[0.2em] text-white"
        >
          Forge
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-2 lg:flex">
          {NAV_LINKS.map((link, i) =>
            link.label === 'Services' ? (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  aria-label="Services menu"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="menu"
                  onClick={() => setDropdownOpen((value) => !value)}
                  className="px-4 py-2 text-[1.05rem] font-light text-white/50 transition-colors hover:text-white"
                >
                  Services
                </button>
                {dropdownOpen ? (
                  <div
                    role="menu"
                    aria-label="Services"
                    className="absolute left-0 top-full mt-1 w-48 rounded bg-white py-2 shadow-lg"
                  >
                    {SERVICE_LINKS.map((item) => (
                      <a
                        key={item.label}
                        role="menuitem"
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-brand hover:text-black"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                aria-current={i === 0 ? 'page' : undefined}
                className={cn(
                  'px-4 py-2 text-[1.05rem] font-light transition-colors',
                  i === 0 ? 'text-white' : 'text-white/50 hover:text-white',
                )}
              >
                {link.label}
              </a>
            ),
          )}
        </div>

        {/* Desktop search */}
        <form role="search" aria-label="Search" className="hidden items-center gap-2 lg:flex">
          <Search className="h-4 w-4 text-white/50" aria-hidden="true" />
          <input
            type="text"
            aria-label="Search"
            placeholder="Search..."
            className="border-b border-white/30 bg-transparent pb-1 text-sm text-white placeholder-white/50 focus:border-white focus:outline-none"
          />
        </form>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-label="Toggle mobile menu"
          className="rounded p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Slide-in mobile menu */}
      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Dismiss mobile menu"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 h-full w-full bg-black/40"
          />
          <nav
            aria-label="Mobile"
            className="absolute inset-y-0 right-0 flex w-72 flex-col bg-white p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-normal tracking-[0.2em] text-gray-900">Forge</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close mobile menu"
                className="rounded p-1 text-gray-500 transition-colors hover:bg-gray-100"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 border-t border-gray-100 pt-2">
                {SERVICE_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
