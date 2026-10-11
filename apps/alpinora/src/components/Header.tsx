import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV_LINKS, PAGES_DROPDOWN } from '../data/content'
import { DiamondMark } from './icons'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function closeMobile() {
    setMobileOpen(false)
  }

  function closePages() {
    setPagesOpen(false)
  }

  return (
    <header
      className={cn(
        'absolute inset-x-0 top-0 z-50 transition-colors',
        scrolled ? 'bg-ink' : 'bg-ink lg:bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="flex items-center gap-3 text-white">
          <DiamondMark className="h-7 w-7" />
          <span className="text-2xl font-semibold tracking-wide">Alpinora</span>
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="h-7 w-7" />
          ) : (
            <Menu aria-hidden="true" className="h-7 w-7" />
          )}
        </button>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={closeMobile}
              className="text-sm uppercase tracking-widest text-white transition-colors hover:text-white/70"
            >
              {label}
            </a>
          ))}
          <div className="relative">
            <button
              type="button"
              aria-expanded={pagesOpen}
              onClick={() => setPagesOpen((open) => !open)}
              className="flex items-center gap-1 text-sm uppercase tracking-widest text-white transition-colors hover:text-white/70"
            >
              Pages
              <ChevronDown aria-hidden="true" className="h-4 w-4" />
            </button>
            {pagesOpen ? (
              <nav
                aria-label="Pages"
                className="absolute left-0 top-full w-44 bg-ink py-2 shadow-lg"
              >
                {PAGES_DROPDOWN.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={closePages}
                    className="block px-4 py-2 text-sm uppercase tracking-widest text-white/80 hover:bg-white/5"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            ) : null}
          </div>
        </nav>
      </div>

      {mobileOpen ? (
        <nav aria-label="Mobile" className="flex flex-col gap-4 bg-ink px-6 pb-6 lg:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={closeMobile}
              className="text-sm uppercase tracking-widest text-white transition-colors hover:text-white/70"
            >
              {label}
            </a>
          ))}
          {PAGES_DROPDOWN.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={closeMobile}
              className="text-sm uppercase tracking-widest text-white/80"
            >
              {label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}
