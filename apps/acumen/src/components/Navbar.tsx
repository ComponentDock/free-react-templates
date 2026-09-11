import { useState, useEffect } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = ['Home', 'Services', 'Portfolio', 'Team', 'Price', 'Blog', 'Contact'] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-colors',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
      )}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="font-display text-2xl font-bold text-white">
          Acumen<span className="text-brand">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand',
                  scrolled ? 'text-ink' : 'text-white',
                )}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className={cn(
              'rounded-full p-2 transition-colors hover:bg-white/20',
              scrolled ? 'text-ink' : 'text-white',
            )}
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            className={cn(
              'hidden items-center gap-1 text-sm font-medium md:flex',
              scrolled ? 'text-ink' : 'text-white',
            )}
            aria-label="Language"
          >
            EN <ChevronDown className="h-3 w-3" />
          </button>
          <button aria-label="Menu" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={cn('block h-0.5 w-6 bg-white', scrolled && 'bg-ink')} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen ? (
        <ul className="space-y-2 bg-white px-4 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block py-2 text-sm font-medium text-ink hover:text-brand"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  )
}
