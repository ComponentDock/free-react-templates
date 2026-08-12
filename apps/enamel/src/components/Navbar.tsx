import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks: ReadonlyArray<{ label: string; href: string; active?: boolean }> = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Doctor', href: '#doctors' },
  { label: 'Treatments', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

/** Light navbar with black uppercase links (blue active) and a mobile
    collapsed menu with a black background (the source .ftco-navbar-light). */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav aria-label="Primary" className="relative z-30 border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <ul className="mx-auto hidden items-center lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  'block px-5 py-7 text-[15px] font-normal uppercase tracking-[1px] text-ink transition-colors hover:text-ink',
                  link.active && 'text-primary',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex items-center gap-2 py-5 text-sm font-normal uppercase tracking-[1px] text-ink lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
          Menu
        </button>
      </div>

      {open ? (
        <div className="bg-ink lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block py-2 text-[15px] uppercase tracking-[1px] text-white/70 transition-colors hover:text-white',
                    link.active && 'text-primary',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  )
}
