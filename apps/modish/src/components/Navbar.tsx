import { useState } from 'react'
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavLink {
  label: string
  href: string
  tag?: string
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Women', href: '#latest' },
  { label: 'Men', href: '#top-selling' },
  { label: 'Jewelry', href: '#banner', tag: 'New' },
  { label: 'Shoes', href: '#latest' },
  { label: 'Pages', href: '#top-selling' },
  { label: 'Blog', href: '#banner' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white transition-colors dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="text-2xl font-bold uppercase tracking-wider text-coal transition-colors hover:text-brand dark:text-white"
        >
          Modish<span className="text-brand">.</span>
        </a>

        <form
          role="search"
          aria-label="Site search"
          className="hidden flex-1 justify-center md:flex"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="relative w-full max-w-xs">
            <input
              type="search"
              placeholder="Search on modish ...."
              aria-label="Search on modish"
              className="h-11 w-full rounded-full border-none bg-fog px-5 pr-11 text-sm text-coal outline-none transition-shadow placeholder:text-mist focus:ring-2 focus:ring-brand/40 dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-mist transition-colors hover:text-brand"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </form>

        <div className="flex items-center gap-5">
          <a
            href="#home"
            className="hidden items-center gap-2 text-sm font-medium text-ink/80 transition-colors hover:text-brand dark:text-white/80 lg:flex"
          >
            <User className="h-4 w-4" aria-hidden="true" />
            Sign In or Create Account
          </a>

          <a
            href="#top-selling"
            className="flex items-center gap-2 text-sm font-medium text-ink/80 transition-colors hover:text-brand dark:text-white/80"
          >
            <span className="relative">
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                0
              </span>
            </span>
            <span className="hidden sm:inline">Shopping Cart</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink/80 lg:hidden dark:border-white/20 dark:text-white/80"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <nav aria-label="Primary" className="bg-night text-white transition-colors dark:bg-gray-950">
        <div className="mx-auto hidden max-w-6xl items-center gap-1 px-4 sm:px-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'flex items-center gap-1.5 px-4 py-4 text-base font-medium uppercase tracking-wide text-white/90 transition-colors hover:text-brand',
              )}
            >
              {link.label}
              {link.tag && (
                <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                  {link.tag}
                </span>
              )}
            </a>
          ))}
        </div>

        {open && (
          <nav aria-label="Mobile" className="border-t border-white/10 px-4 py-3 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-2 text-sm font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-brand"
              >
                {link.label}
                {link.tag && (
                  <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                    {link.tag}
                  </span>
                )}
              </a>
            ))}
          </nav>
        )}
      </nav>
    </header>
  )
}
