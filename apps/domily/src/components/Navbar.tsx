import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Home, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { CALL_US, NAV_LINKS } from '../data'
import { callUsButton } from './buttonClasses'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus()
  }, [searchOpen])

  const submitSearch = () => {
    if (query.trim()) {
      setSearchOpen(false)
      setQuery('')
    }
  }

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 border-t-[6px] border-gold bg-white transition-shadow',
          scrolled && 'shadow-[0_10px_15px_rgba(25,25,25,0.1)]',
        )}
      >
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 py-4">
          <a href="#home" className="flex items-center gap-2" aria-label="Domily home">
            <Home className="size-6 text-gold" aria-hidden="true" />
            <span className="font-display text-2xl font-bold tracking-wide text-navy-ink">
              DOMILY
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) =>
              'children' in link ? (
                <div key={link.label} className="group relative">
                  <button
                    type="button"
                    className="flex items-center gap-1 px-[9px] py-[26px] text-lg font-medium text-navy-ink transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    aria-haspopup="true"
                    aria-expanded={blogOpen}
                    onClick={() => setBlogOpen((open) => !open)}
                  >
                    {link.label}
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </button>
                  {blogOpen && (
                    <div className="absolute left-0 top-full z-50 w-44 border border-cardborder bg-white py-2 shadow-[0_10px_15px_rgba(25,25,25,0.1)]">
                      {link.children.map((child) => (
                        <a
                          key={child}
                          href="#"
                          className="block px-4 py-2 text-base font-medium text-navy-ink hover:bg-gold/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
                        >
                          {child}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-[9px] py-[26px] text-lg font-medium text-navy-ink transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="rounded-none p-2 text-navy-ink transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Search className="size-5" aria-hidden="true" />
            </button>
            <a href="#contact" className={cn(callUsButton, 'hidden md:inline-flex')}>
              {CALL_US}
            </a>
            <button
              type="button"
              onClick={() => {
                setMenuOpen((open) => !open)
                setBlogOpen(false)
              }}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
              className="rounded-none p-2 text-navy-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold lg:hidden"
            >
              {menuOpen ? (
                <X className="size-6" aria-hidden="true" />
              ) : (
                <Menu className="size-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-cardborder bg-white px-4 pb-4 lg:hidden"
          >
            {NAV_LINKS.map((link) =>
              'children' in link ? (
                <div key={link.label}>
                  <span className="block px-2 py-3 text-lg font-medium text-navy-ink">
                    {link.label}
                  </span>
                  {link.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block px-4 py-2 text-base text-navy-ink hover:text-gold"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-2 py-3 text-lg font-medium text-navy-ink hover:text-gold"
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>
        )}
      </header>

      {searchOpen && (
        <div
          role="dialog"
          aria-label="Search"
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-ink/90 px-4"
        >
          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
            className="absolute right-6 top-6 rounded-none p-2 text-white transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
          <form
            className="flex w-full max-w-xl gap-2"
            onSubmit={(event) => {
              event.preventDefault()
              submitSearch()
            }}
          >
            <input
              ref={searchInputRef}
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Here"
              aria-label="Search Here"
              className="w-full rounded-none border border-gold bg-white px-4 py-3 text-navy-ink placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            />
            <button
              type="submit"
              className="rounded-none bg-gold px-6 py-3 font-medium text-navy-ink transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  )
}
