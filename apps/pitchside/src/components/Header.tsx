import { useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { contactLink, navLinks, pagesDropdown, sportDropdown } from '../data'

interface DropdownProps {
  label: string
  items: readonly { label: string; href: string }[]
  open: boolean
  onToggle: () => void
}

function Dropdown({ label, items, open, onToggle }: DropdownProps) {
  return (
    <li className="group relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 border-b-2 border-transparent pb-1 text-[15px] font-medium uppercase tracking-wide text-white transition-colors hover:border-white"
      >
        {label}
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </button>
      <ul
        className={cn(
          'absolute left-0 top-full z-50 w-44 bg-white py-2 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="block px-4 py-2 text-sm font-medium text-ink transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  )
}

/** Header (reference `.header-section`): solid brand-red bar with the
 *  wordmark, uppercase white nav links, Sport/Pages dropdowns, a search
 *  toggle and a hamburger that opens the mobile menu. */
export function Header() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const allMobileLinks = [...navLinks, ...sportDropdown.items, ...pagesDropdown.items, contactLink]

  return (
    <header className="bg-brand">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl font-bold uppercase tracking-widest text-white"
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[10px] font-black"
            aria-hidden="true"
          >
            P
          </span>
          Pitchside
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                aria-current={label === 'Home' ? 'page' : undefined}
                className={cn(
                  'border-b-2 border-transparent pb-1 text-[15px] font-medium uppercase tracking-wide text-white transition-colors hover:border-white',
                  label === 'Home' && 'border-white',
                )}
              >
                {label}
              </a>
            </li>
          ))}
          <Dropdown
            label={sportDropdown.label}
            items={sportDropdown.items}
            open={openDropdown === sportDropdown.label}
            onToggle={() =>
              setOpenDropdown((current) =>
                current === sportDropdown.label ? null : sportDropdown.label,
              )
            }
          />
          <Dropdown
            label={pagesDropdown.label}
            items={pagesDropdown.items}
            open={openDropdown === pagesDropdown.label}
            onToggle={() =>
              setOpenDropdown((current) =>
                current === pagesDropdown.label ? null : pagesDropdown.label,
              )
            }
          />
          <li>
            <a
              href={contactLink.href}
              className="border-b-2 border-transparent pb-1 text-[15px] font-medium uppercase tracking-wide text-white transition-colors hover:border-white"
            >
              {contactLink.label}
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen((value) => !value)}
            aria-expanded={searchOpen}
            aria-controls="site-search"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-white/80"
          >
            {searchOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Search className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {searchOpen ? (
        <div id="site-search" className="border-t border-white/20 px-4 pb-4 lg:px-8">
          <label htmlFor="site-search-input" className="sr-only">
            Search the site
          </label>
          <input
            id="site-search-input"
            type="search"
            placeholder="Search news, fixtures and videos"
            className="w-full max-w-2xl border border-white/40 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
          />
        </div>
      ) : null}

      {open ? (
        <div id="mobile-menu" className="border-t border-white/20 px-6 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {allMobileLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={label === 'Home' ? 'page' : undefined}
                  className={cn(
                    'block border-b border-white/20 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:text-white/80',
                    label === 'Home' && 'text-white',
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
