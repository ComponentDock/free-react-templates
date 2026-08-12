import { useState } from 'react'
import { Menu, Search, ShoppingCart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks, socialLinks } from '../data'
import { BrandIcon } from './BrandIcon'
import { SearchOverlay } from './SearchOverlay'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="bg-white">
      <div className="container-fluid mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 pt-10 sm:px-8">
        <div className="flex flex-1 items-center gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.label}
              className="text-ash transition-colors hover:text-brand"
            >
              <BrandIcon name={social.name} className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-center text-2xl font-bold tracking-wide text-ink">
          Frame<span className="text-brand">ly</span>
        </p>

        <div className="flex flex-1 items-center justify-end gap-5 text-ash">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="transition-colors hover:text-brand lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Shopping cart"
            className="transition-colors hover:text-brand"
          >
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav aria-label="Main navigation" className="hidden justify-center py-6 lg:flex">
        <ul className="flex gap-10">
          {navLinks.map((link) => (
            <li key={link.label} className="group relative">
              <a
                href={link.href}
                aria-current={link.active ? 'page' : undefined}
                className={cn(
                  'relative pb-1 text-sm font-bold uppercase tracking-wider text-ash transition-colors duration-300',
                  'after:absolute after:-bottom-2 after:left-0 after:h-1.5 after:w-0 after:bg-brand after:transition-all after:duration-300 after:content-[""]',
                  'group-hover:text-ink group-hover:after:w-full',
                  link.active && 'text-ink after:w-full',
                )}
              >
                {link.label}
              </a>
              {link.children ? (
                <ul className="invisible absolute left-0 top-full mt-4 min-w-36 bg-white py-3 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {link.children.map((child) => (
                    <li key={child}>
                      <a
                        href="#blog-single"
                        className="block px-5 py-2 text-xs font-bold uppercase tracking-wider text-ash transition-colors hover:text-brand"
                      >
                        {child}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      {menuOpen ? (
        <nav aria-label="Mobile menu" className="border-t border-frost py-4 lg:hidden">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.active ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'text-sm font-bold uppercase tracking-wider text-ash transition-colors hover:text-ink',
                    link.active && 'text-ink',
                  )}
                >
                  {link.label}
                </a>
                {link.children?.map((child) => (
                  <a
                    key={child}
                    href="#blog-single"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 block text-xs font-bold uppercase tracking-wider text-ash transition-colors hover:text-brand"
                  >
                    {child}
                  </a>
                ))}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
