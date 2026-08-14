import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

interface HeaderProps {
  onDonate?: () => void
}

/** Transparent header over the hero: logo left, centered nav (Blog/Pages
 *  dropdowns), ghost "Donate Now" right; collapses to an aria-expanded
 *  toggle on small screens. */
export function Header({ onDonate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="flex items-center justify-between gap-4 px-6 py-4 lg:px-[50px] lg:py-0">
        <a href="#home" className="flex items-center gap-2 text-white">
          <HeartHandshakeMark />
          <span className="font-serif text-2xl font-bold uppercase tracking-wide">Mission</span>
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="text-white lg:hidden"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="h-7 w-7" />
          ) : (
            <Menu aria-hidden="true" className="h-7 w-7" />
          )}
        </button>

        <nav
          aria-label="Main navigation"
          className={cn(
            'absolute left-0 right-0 top-full bg-maroon/95 px-6 pb-6 pt-2 lg:static lg:flex lg:flex-1 lg:justify-center lg:bg-transparent lg:p-0',
            menuOpen ? 'block' : 'hidden lg:flex',
          )}
        >
          <ul className="flex flex-col lg:flex-row">
            {navLinks.map((link) => (
              <li key={link.label} className="group relative">
                <a
                  href={link.href}
                  aria-current={link.active ? 'page' : undefined}
                  onClick={closeMenu}
                  className={cn(
                    'block py-3 text-base capitalize text-white transition-colors hover:text-brand lg:px-[23px] lg:py-[35px]',
                    link.active && 'text-brand',
                  )}
                >
                  {link.label}
                  {link.children.length > 0 && (
                    <ChevronDown aria-hidden="true" className="ml-1 inline h-3 w-3" />
                  )}
                </a>
                {link.children.length > 0 && (
                  <ul className="bg-white shadow-md lg:invisible lg:absolute lg:left-0 lg:top-full lg:w-[200px] lg:opacity-0 lg:transition-all lg:group-hover:visible lg:group-hover:opacity-100 lg:group-focus-within:visible lg:group-focus-within:opacity-100">
                    {link.children.map((child) => (
                      <li key={child}>
                        <a
                          href="#"
                          onClick={(event) => {
                            event.preventDefault()
                            closeMenu()
                          }}
                          className="block px-[15px] py-2.5 text-black transition-colors hover:text-brand"
                        >
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#donate"
          onClick={(event) => {
            event.preventDefault()
            onDonate?.()
          }}
          className="hidden border border-white px-[44px] py-[14px] capitalize text-white transition-colors hover:bg-white hover:text-maroon lg:inline-block"
        >
          Donate Now
        </a>
      </div>
    </header>
  )
}

/** Small leaf/heart-style logo mark (inline SVG — no copied assets). */
function HeartHandshakeMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}
