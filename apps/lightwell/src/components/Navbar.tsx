import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Generic', href: '#about' },
  { label: 'Elements', href: '#features' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card-bg shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-2xl font-bold text-heading">
          Lightwell
        </a>

        <div className="flex items-center gap-4">
          <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => e.preventDefault()}
                className="rounded px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded text-ink transition-colors hover:bg-brand-light md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-gray-100 bg-card-bg px-4 pb-4 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                setOpen(false)
              }}
              className={cn(
                'block rounded px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-brand-light hover:text-brand',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
