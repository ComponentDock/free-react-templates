import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { label: 'Solution', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'News', href: '#news' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute left-0 right-0 top-0 z-[99] px-6 pt-8 sm:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#solution" className="font-display text-2xl font-bold text-brand">
          Coinly
        </a>

        <div className="flex items-center gap-8">
          <nav aria-label="Primary" className="hidden items-center lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mr-7 px-1 py-2 font-display text-base text-white transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#signup"
            className="hidden min-w-[170px] rounded-full border-2 border-outline px-8 py-3.5 text-center font-display text-base font-medium text-white transition-colors hover:border-accent hover:text-accent lg:inline-block"
          >
            Sign Up Free
          </a>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center text-brand lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="mt-4 rounded-2xl bg-brand/90 p-4 backdrop-blur lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-display text-base text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
