import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = ['Home', 'About', 'Menu', 'Book Table', 'Chefs', 'Contact'] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="fixed right-4 top-4 z-50 rounded-lg bg-brand p-2 text-white shadow-lg transition-colors hover:bg-brand-dark md:hidden"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar nav */}
      <nav
        aria-label="Main navigation"
        className={cn(
          'fixed right-0 top-0 z-40 h-full w-48 bg-white shadow-lg transition-transform duration-300',
          'dark:bg-gray-900',
          open ? 'translate-x-0' : 'translate-x-full',
          'md:translate-x-0',
        )}
      >
        <div className="flex h-full flex-col items-center py-10">
          <a href="#home" className="font-display text-2xl text-brand">
            Carnivor
          </a>
          <ul className="mt-10 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block px-6 py-2 text-sm font-medium capitalize text-ink transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close navigation"
        />
      )}
    </>
  )
}
