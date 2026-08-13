import { useState } from 'react'
import { ChevronDown, Menu, ShoppingCart, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brand, catalogItems, navLinks } from '../data'

/** Transparent navbar floating over the hero (absolute, 20px below the
 *  black top strip): black brand, 10px uppercase spaced links, a Catalog
 *  dropdown and a gold cart badge with "[0]". Below 992px it becomes a
 *  solid black bar with a hamburger opening a white-on-black mobile menu —
 *  the reference's mobile treatment. */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [catalogOpen, setCatalogOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-5 z-30 bg-transparent lg:top-[22px]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 md:px-8">
        <a href="#home" className="text-2xl font-extrabold uppercase tracking-wide text-black">
          {brand.name}
        </a>

        <div
          className={cn(
            'flex items-center gap-8 lg:gap-10',
            menuOpen ? 'flex-col items-start gap-6 bg-ink p-6' : 'hidden',
            'lg:flex lg:flex-row lg:items-center lg:bg-transparent lg:p-0',
          )}
        >
          <nav aria-label="Primary" className="flex flex-col gap-4 lg:flex-row lg:items-center">
            {navLinks.map((label, index) => (
              <a
                key={label}
                href="#"
                onClick={(event) => event.preventDefault()}
                className={cn(
                  'text-[10px] font-semibold uppercase tracking-[2px] transition-colors',
                  menuOpen ? 'text-white/70 hover:text-brand' : 'text-black hover:text-brand',
                  index === 0 && 'text-brand',
                )}
              >
                {label}
              </a>
            ))}
            <div className="relative">
              <button
                type="button"
                aria-expanded={catalogOpen}
                onClick={() => setCatalogOpen((value) => !value)}
                className={cn(
                  'flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[2px] transition-colors',
                  menuOpen ? 'text-white/70 hover:text-brand' : 'text-black hover:text-brand',
                )}
              >
                Catalog
                <ChevronDown className="h-3 w-3" aria-hidden="true" />
              </button>
              {catalogOpen && (
                <ul className="absolute left-0 top-full z-40 mt-1 w-44 bg-ink py-2">
                  {catalogItems.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        onClick={(event) => event.preventDefault()}
                        className="block px-4 py-2 text-sm text-white transition-colors hover:bg-brand hover:text-ink"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>

          <a
            href="#"
            onClick={(event) => event.preventDefault()}
            aria-label="Shopping cart, 0 items"
            className={cn(
              'flex h-9 w-9 items-center justify-center gap-1 text-sm font-semibold',
              menuOpen ? 'bg-brand text-ink' : 'bg-brand text-ink',
            )}
          >
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            [0]
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Toggle menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
          className="rounded p-2 text-black lg:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </header>
  )
}
