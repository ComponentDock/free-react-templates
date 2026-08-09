import { useState, type FormEvent } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks: { label: string; href: string; active?: boolean }[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

const serviceItems = ['Branding', 'Web Design', 'App Design', 'Start Up'] as const

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="flex items-center justify-between gap-6 px-4 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="text-sm font-normal uppercase tracking-[0.2em] text-white">
          Kraft
        </a>

        <div className="flex items-center gap-6">
          <form onSubmit={handleSearch} className="relative hidden lg:block">
            <Search
              className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 text-white"
              aria-hidden="true"
            />
            <input
              type="search"
              aria-label="Search"
              placeholder="Search..."
              className="h-11 w-48 border-b border-white/30 bg-transparent pl-7 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
            />
          </form>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="kraft-nav"
            className="flex h-9 w-9 flex-col items-center justify-center gap-[7px] border border-white/40 px-0 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:hidden"
          >
            <span className="h-0.5 w-7 bg-white" />
            <span className="h-0.5 w-7 bg-white" />
            <span className="h-0.5 w-7 bg-white" />
          </button>
        </div>
      </div>

      <nav
        id="kraft-nav"
        aria-label="Main"
        data-state={menuOpen ? 'open' : 'closed'}
        className={cn(
          'bg-night lg:bg-transparent lg:px-12',
          menuOpen ? 'block' : 'hidden lg:block',
        )}
      >
        <ul className="flex flex-col lg:flex-row lg:items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  'block px-4 py-3 text-sm font-light uppercase tracking-[0.1em] text-white transition-colors hover:text-brand lg:px-5 lg:py-7',
                  link.active && 'text-brand',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((open) => !open)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className="flex w-full items-center justify-between gap-2 px-4 py-3 text-sm font-light uppercase tracking-[0.1em] text-white transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:px-5 lg:py-7 lg:justify-start"
            >
              Services
              <ChevronDown
                className={cn('h-4 w-4 transition-transform', servicesOpen && 'rotate-180')}
                aria-hidden="true"
              />
            </button>
            <ul
              data-state={servicesOpen ? 'open' : 'closed'}
              className={cn(
                'bg-white shadow-xl lg:absolute lg:left-0 lg:top-full lg:min-w-[13rem]',
                servicesOpen ? 'block' : 'hidden lg:hidden',
              )}
            >
              {serviceItems.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    onClick={() => {
                      setServicesOpen(false)
                      closeMenu()
                    }}
                    className="block px-6 py-2 text-sm text-black transition-colors hover:bg-brand hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <form onSubmit={handleSearch} className="relative border-t border-white/10 p-4 lg:hidden">
          <Search
            className="absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 text-white"
            aria-hidden="true"
          />
          <input
            type="search"
            aria-label="Search"
            placeholder="Search..."
            className="h-11 w-full border-b border-white/30 bg-transparent pl-8 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
          />
        </form>
      </nav>
    </header>
  )
}
