import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { header } from '../data'

/** Sticky white header: red geometric mark + uppercase wordmark left,
 *  centered nav (Page has a dropdown), red "Get Free Consultent" button
 *  right, hamburger panel on mobile with the same links. */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [pageOpen, setPageOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded bg-brand"
          >
            <span className="h-2.5 w-2.5 rounded-[2px] bg-white" />
          </span>
          <span className="text-xl font-bold uppercase tracking-widest text-ink">
            {header.brand}
          </span>
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {header.nav.map((item) =>
              item.dropdown ? (
                <li key={item.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={pageOpen}
                    onClick={() => setPageOpen((open) => !open)}
                    className="flex items-center gap-1.5 text-sm font-medium uppercase text-ink transition-colors hover:text-brand"
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-[10px]">
                      ▾
                    </span>
                  </button>
                  {pageOpen && (
                    <ul className="absolute left-0 top-full mt-2 w-48 rounded-md border border-line bg-white py-2 shadow-lg">
                      {item.dropdown.map((sub) => (
                        <li key={sub}>
                          <a
                            href={`#${sub.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-2 text-sm text-ink transition-colors hover:bg-soft hover:text-brand"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm font-medium uppercase text-ink transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden rounded bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700 lg:inline-block"
        >
          {header.cta}
        </a>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className={cn('flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden')}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-gray-100 bg-white px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {header.nav.map((item) =>
              item.dropdown ? (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={pageOpen}
                    onClick={() => setPageOpen((open) => !open)}
                    className="flex w-full items-center justify-between py-3 text-left text-sm font-medium uppercase text-ink"
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-[10px]">
                      ▾
                    </span>
                  </button>
                  {pageOpen && (
                    <ul className="pl-4">
                      {item.dropdown.map((sub) => (
                        <li key={sub}>
                          <a
                            href={`#${sub.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block py-2 text-sm text-muted"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <a href={item.href} className="block py-3 text-sm font-medium uppercase text-ink">
                    {item.label}
                  </a>
                </li>
              ),
            )}
            <li className="pt-2">
              <a
                href="#contact"
                className="block rounded bg-brand px-6 py-3 text-center text-sm font-medium text-white"
              >
                {header.cta}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
