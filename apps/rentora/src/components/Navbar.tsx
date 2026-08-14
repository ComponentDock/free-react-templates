import { useState } from 'react'
import { Home, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV_LINKS } from '../data'

/* Navbar (source: header.main_menu.home_menu — transparent bar over the
   hero, navy text links, gold "Submit property" pill on the right; mobile
   hamburger opens a collapsed menu on a dark-gold background). */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-[15px] py-[10px]">
        <a href="#home" className="flex items-center gap-2 text-ink">
          <Home className="h-5 w-5 text-brand" aria-hidden="true" />
          <span className="text-[20px] font-semibold uppercase tracking-wide">
            Rent<span className="text-brand">ora</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center">
            {NAV_LINKS.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={index === 0 ? 'page' : undefined}
                  className={cn(
                    'inline-block px-[15px] py-2 text-[14px] capitalize text-ink transition-colors hover:text-brand',
                    index === 0 && 'text-brand',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-block bg-brand px-5 py-[10px] text-[14px] font-medium capitalize text-white transition-colors hover:bg-brand-hover"
          >
            Submit property
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="text-ink lg:hidden"
        >
          <Menu className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="bg-golddark lg:hidden"
        >
          <div className="flex items-center justify-between px-[15px] py-3">
            <span className="text-[18px] font-semibold uppercase text-white">
              Rent<span className="text-white">ora</span>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <ul className="px-[15px] pb-4">
            {NAV_LINKS.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={index === 0 ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block px-[22px] py-[10px] text-[14px] capitalize text-white transition-colors hover:text-white/80',
                    index === 0 && 'text-white',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
