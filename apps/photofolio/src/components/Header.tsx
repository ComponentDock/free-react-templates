import { useEffect, useState, type FormEvent } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavLink {
  label: string
  href: string
  sub?: readonly string[]
}

const navLinks: readonly NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About the Artist', href: '#about' },
  { label: 'Portfolio', href: '#portfolio', sub: ['Portfolio 1', 'Portfolio 2', 'Portfolio 3'] },
  { label: 'Blog', href: '#blog' },
  { label: 'Elements', href: '#elements' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearchOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 bg-white px-6 py-4 transition-shadow',
          scrolled && 'border-b border-hairline',
        )}
      >
        <div className="mx-auto flex max-w-[1780px] items-center justify-between">
          <a href="#home" className="text-2xl font-semibold tracking-wide text-ink">
            Photofolio
          </a>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="text-ink transition-opacity hover:opacity-60"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="text-ink transition-opacity hover:opacity-60"
            >
              {menuOpen ? (
                <X className="h-[21px] w-[21px]" aria-hidden="true" />
              ) : (
                <Menu className="h-[21px] w-[21px]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            aria-label="Main navigation"
            className="border-t border-hairline pt-4 pb-2 md:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-2 py-2 text-sm font-medium text-ink transition-colors hover:text-body"
                  >
                    {link.label}
                  </a>
                  {link.sub && (
                    <ul className="ml-4 space-y-1 border-l border-hairline pl-3">
                      {link.sub.map((item) => (
                        <li key={item}>
                          <a
                            href="#portfolio"
                            onClick={() => setMenuOpen(false)}
                            className="block px-2 py-1.5 text-sm text-body transition-colors hover:text-ink"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black px-6"
        >
          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
            className="absolute top-8 right-8 text-3xl leading-none text-white transition-opacity hover:opacity-70"
          >
            +
          </button>
          <form onSubmit={handleSearch} className="w-full max-w-3xl">
            <label htmlFor="site-search" className="sr-only">
              Search
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="Search or enter website name"
              autoFocus
              className="w-full border-0 border-b-2 border-search-border bg-transparent pb-3 text-4xl text-search-text placeholder:text-search-text focus:border-white focus:outline-none"
            />
          </form>
        </div>
      )}
    </>
  )
}
