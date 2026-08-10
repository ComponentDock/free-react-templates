import { useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  menuCloseLabel,
  menuOpenLabel,
  navLinks,
  postTypeLinks,
  searchLabel,
  searchPlaceholder,
} from '../data'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [postTypesOpen, setPostTypesOpen] = useState(false)

  return (
    <nav aria-label="Main navigation" className="bg-navy px-5 py-[15px] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <ul className="hidden items-center lg:flex">
          {navLinks.map((link) => {
            const isPostTypes = link === 'Post Types'
            if (!isPostTypes) {
              return (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={cn(
                      'px-2 text-xs font-normal uppercase tracking-wide transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60',
                      link === 'Home' ? 'text-primary-600' : 'text-white',
                    )}
                  >
                    {link}
                  </a>
                </li>
              )
            }
            return (
              <li key={link} className="relative">
                <button
                  type="button"
                  onClick={() => setPostTypesOpen((value) => !value)}
                  aria-expanded={postTypesOpen}
                  aria-haspopup="true"
                  className="inline-flex items-center gap-1 px-2 text-xs font-normal uppercase tracking-wide text-white transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
                >
                  {link}
                  <ChevronDown size={12} aria-hidden="true" />
                </button>
                {postTypesOpen && (
                  <ul className="absolute left-0 top-full z-20 min-w-44 bg-white py-2 shadow-[0_0_30px_rgba(127,137,161,0.25)]">
                    {postTypeLinks.map((item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
                          className="block px-5 py-2 text-xs font-light text-heading transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? menuCloseLabel : menuOpenLabel}
          className="flex h-9 w-9 items-center justify-center text-white transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60 lg:hidden"
        >
          {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>

        <form
          role="search"
          aria-label={searchLabel}
          className="hidden items-center border border-white/40 px-2 py-1 lg:flex"
        >
          <input
            type="search"
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="w-32 bg-transparent text-xs font-light text-white placeholder:text-white/60 focus:outline-none"
          />
          <button
            type="submit"
            aria-label={searchLabel}
            className="text-white transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
          >
            <Search size={14} aria-hidden="true" />
          </button>
        </form>
      </div>

      {menuOpen && (
        <div
          role="region"
          aria-label="Mobile menu"
          className="mt-3 border-t border-white/20 pt-3 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isPostTypes = link === 'Post Types'
              if (!isPostTypes) {
                return (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        'block px-2 py-2 text-xs font-normal uppercase tracking-wide transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60',
                        link === 'Home' ? 'text-primary-600' : 'text-white',
                      )}
                    >
                      {link}
                    </a>
                  </li>
                )
              }
              return (
                <li key={link}>
                  <button
                    type="button"
                    onClick={() => setPostTypesOpen((value) => !value)}
                    aria-expanded={postTypesOpen}
                    aria-haspopup="true"
                    className="inline-flex items-center gap-1 px-2 py-2 text-xs font-normal uppercase tracking-wide text-white transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
                  >
                    {link}
                    <ChevronDown size={12} aria-hidden="true" />
                  </button>
                  {postTypesOpen && (
                    <ul className="pl-4">
                      {postTypeLinks.map((item) => (
                        <li key={item}>
                          <a
                            href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
                            onClick={() => setMenuOpen(false)}
                            className="block px-2 py-2 text-xs font-light text-white/90 transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
          <form
            role="search"
            aria-label={searchLabel}
            className="mt-3 flex items-center border border-white/40 px-2 py-1"
          >
            <input
              type="search"
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              className="w-full bg-transparent text-xs font-light text-white placeholder:text-white/60 focus:outline-none"
            />
            <button
              type="submit"
              aria-label={searchLabel}
              className="text-white transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
            >
              <Search size={14} aria-hidden="true" />
            </button>
          </form>
        </div>
      )}
    </nav>
  )
}
