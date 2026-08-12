import { useEffect, useState } from 'react'
import { Dumbbell, Menu, Phone, Search, X } from 'lucide-react'

const links: ReadonlyArray<{ label: string; href: string; active?: boolean }> = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About us', href: '#about' },
  { label: 'Classes', href: '#classes' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = searchOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [searchOpen])

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-b from-white/50 to-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-2xl font-bold uppercase tracking-wide text-ink"
        >
          <Dumbbell className="h-6 w-6 text-brand" aria-hidden="true" />
          Barbell
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.active ? 'page' : undefined}
              className={
                link.active
                  ? 'bg-brand px-5 py-2 font-display text-sm font-medium uppercase tracking-wide text-white'
                  : 'px-5 py-2 font-display text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:bg-brand/10'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <span className="flex items-center gap-2 bg-mist px-6 py-2.5 font-display text-sm font-medium uppercase tracking-wide text-ink">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand">
              <Phone className="h-3.5 w-3.5 text-white" aria-hidden="true" />
            </span>
            +546 990221 123
          </span>
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="flex h-11 w-12 items-center justify-center bg-brand text-white transition-colors hover:bg-brand-dark"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-gray-100 bg-white px-4 py-3 lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-display text-sm font-medium uppercase tracking-wide text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 px-4">
          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
            className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-brand"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <input
            type="search"
            placeholder="Search here....."
            autoFocus
            className="w-full max-w-xl border-b-2 border-gray-600 bg-transparent pb-2 text-3xl text-white placeholder:text-gray-500 focus:border-brand focus:outline-none"
          />
        </div>
      )}
    </header>
  )
}
