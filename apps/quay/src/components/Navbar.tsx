import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { allNavLinks, navLeft, navRight } from '../data'

/* White sticky navbar with the brand centered between two link groups
   (reference: .site-navbar). On mobile a toggle opens a slide-in panel
   listing every link. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center gap-8 text-sm font-medium text-gray-700 lg:flex"
        >
          {navLeft.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#home" className="font-serif text-2xl font-semibold text-black">
          Quay
        </a>

        <nav
          aria-label="Secondary"
          className="hidden flex-1 items-center justify-end gap-8 text-sm font-medium text-gray-700 lg:flex"
        >
          {navRight.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="rounded-md p-2 text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        aria-hidden={!open}
        className={cn(
          'lg:hidden',
          'fixed inset-y-0 right-0 z-50 w-72 transform bg-white shadow-xl transition-transform duration-300',
          open ? 'visible translate-x-0' : 'invisible translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <span className="font-serif text-xl font-semibold text-black">Quay</span>
          <button
            type="button"
            aria-label="Close mobile menu"
            onClick={() => setOpen(false)}
            className="rounded-md p-2 text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <nav
          aria-label="Mobile"
          className="flex flex-col gap-4 px-5 py-6 text-sm font-medium text-gray-700"
        >
          {allNavLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
