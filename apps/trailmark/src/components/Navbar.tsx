import { useEffect, useState, type FormEvent } from 'react'
import { Menu, Search, Send, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS } from '../data/content'

type LinkTone = 'desktop' | 'mobile'

interface NavLinkProps {
  label: string
  active: boolean
  tone: LinkTone
  onSelect: (label: string) => void
}

function NavLink({ label, active, tone, onSelect }: NavLinkProps) {
  const isDesktop = tone === 'desktop'

  return (
    <a
      href={`#${label.toLowerCase().replaceAll(' ', '-')}`}
      aria-current={active ? 'page' : undefined}
      onClick={(event) => {
        event.preventDefault()
        onSelect(label)
      }}
      className={cn(
        'relative uppercase tracking-[0.06em] transition-colors',
        isDesktop ? 'px-5 py-3 text-[15px]' : 'block border-b border-white/10 py-4 text-base',
        active ? 'text-brand' : 'text-white hover:text-brand',
      )}
    >
      {label}
      {active ? (
        <span
          aria-hidden="true"
          className={cn('absolute bottom-0 left-5 h-[3px] w-8 bg-brand', !isDesktop && 'hidden')}
        />
      ) : null}
    </a>
  )
}

export function Navbar() {
  const [active, setActive] = useState<string>(NAV_LINKS[0])
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const selectLink = (label: string) => {
    setActive(label)
    setMenuOpen(false)
  }

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult(searchTerm.trim())
  }

  return (
    <header
      role="banner"
      data-scrolled={scrolled}
      className={cn(
        'fixed inset-x-0 z-50 transition-all duration-400',
        scrolled ? 'top-2' : 'top-0 lg:top-10',
      )}
    >
      <div className="mx-auto flex h-[90px] max-w-6xl items-center bg-navy pl-5 pr-0 lg:h-[121px]">
        <a href="#home" className="flex items-center gap-3">
          <Send aria-hidden="true" className="h-6 w-6 text-brand" />
          <span className="leading-tight text-white">
            <span className="block text-2xl font-medium uppercase tracking-[0.08em]">
              {BRAND.name}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.36em]">{BRAND.tagline}</span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center lg:flex">
          {NAV_LINKS.map((label) => (
            <NavLink
              key={label}
              label={label}
              tone="desktop"
              active={active === label}
              onSelect={selectLink}
            />
          ))}
        </nav>

        <div className="ml-auto flex h-full items-center lg:ml-6">
          {searchOpen ? (
            <form onSubmit={handleSearch} className="flex h-full items-stretch">
              <label htmlFor="nav-search" className="sr-only">
                Search destinations
              </label>
              <input
                id="nav-search"
                className="h-full w-40 border-0 bg-white/10 px-4 text-[13px] text-white placeholder:text-white/60 focus:outline-none"
                placeholder="Keyword"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <button
                type="submit"
                aria-label="Submit search"
                className="flex h-full w-16 items-center justify-center bg-brand text-white transition-colors hover:bg-brand-dark"
              >
                <Search aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Close search"
                onClick={() => {
                  setSearchOpen(false)
                  setResult(null)
                }}
                className="flex h-full w-16 items-center justify-center border-l border-white/10 text-white transition-colors hover:text-brand"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </form>
          ) : (
            <button
              type="button"
              aria-label="Open search"
              onClick={() => setSearchOpen(true)}
              className="flex h-full w-20 items-center justify-center bg-brand text-white transition-colors hover:bg-brand-dark"
            >
              <Search aria-hidden="true" className="h-5 w-5" />
            </button>
          )}

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-full w-16 items-center justify-center text-white lg:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          role="region"
          aria-label="Mobile navigation"
          className="bg-navy px-5 pb-6 lg:hidden"
        >
          {NAV_LINKS.map((label) => (
            <NavLink
              key={label}
              label={label}
              tone="mobile"
              active={active === label}
              onSelect={selectLink}
            />
          ))}
        </div>
      ) : null}

      {result ? (
        <p role="status" className="bg-navy-deep px-5 py-3 text-sm text-white">
          Showing results for {result}
        </p>
      ) : null}
    </header>
  )
}
