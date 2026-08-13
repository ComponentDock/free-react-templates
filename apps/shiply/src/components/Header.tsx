import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brand, navLinks } from '../data'

/** Transparent absolute navbar over the hero: white brand, uppercase nav
 *  links with a Services dropdown, and an off-canvas mobile menu. */
export function Header() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-[1999] py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <a href="#home" className="text-2xl font-bold text-white">
          {brand.name}
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 xl:flex">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              <a
                href={link.href}
                onMouseEnter={() => link.children && setDropdown(true)}
                onMouseLeave={() => link.children && setDropdown(false)}
                className={`text-sm uppercase tracking-[0.1em] ${
                  link.active ? 'text-brand' : 'text-white transition-colors hover:text-brand'
                }`}
              >
                {link.label}
              </a>
              {link.children && dropdown && (
                <ul className="absolute left-0 top-full w-52 border-t-2 border-brand bg-white py-2 shadow-lg">
                  {link.children.map((child) => (
                    <li key={child}>
                      <a
                        href="#services"
                        className="block px-5 py-2 text-base text-quote-dark transition-colors hover:bg-[#f4f5f9] hover:text-ink"
                      >
                        {child}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="shiply-mobile-menu"
          onClick={() => setOpen(true)}
          className="text-white xl:hidden"
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[2000]" role="presentation">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <nav
            id="shiply-mobile-menu"
            aria-label="Mobile"
            className="absolute right-0 top-0 h-full w-[300px] overflow-y-auto bg-white p-6 shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.1)]"
          >
            <div className="mb-8 flex justify-end">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-ink"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-xl ${link.active ? 'text-brand' : 'text-ink transition-colors hover:text-brand'}`}
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <ul className="mt-2 space-y-2 pl-4">
                      {link.children.map((child) => (
                        <li key={child}>
                          <a
                            href="#services"
                            onClick={() => setOpen(false)}
                            className="text-base text-ink transition-colors hover:text-brand"
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
        </div>
      )}
    </header>
  )
}
