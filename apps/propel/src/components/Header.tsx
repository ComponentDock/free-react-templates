import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, DROPDOWN_LINKS, NAV_LINKS, SUBMENU_LINKS } from '../data'

/* Absolute navbar over the hero photo: white "Propel." logo with a brand
   blue dot, light nav links (white over the dark hero, brighter on hover/
   active), a CSS-hover Dropdown with a nested submenu, and a solid
   slide-in drawer for mobile (dark, fully tappable). */
export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-5">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-display text-2xl font-bold tracking-tight text-white">
          {BRAND}
          <span className="text-brand">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="group relative">
                <a
                  href={link.href}
                  aria-haspopup="true"
                  className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
                <ul className="invisible absolute left-0 top-full w-52 bg-white py-2 opacity-0 shadow-xl ring-1 ring-black/5 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {DROPDOWN_LINKS.map((item) =>
                    item.label === 'Menu Two' ? (
                      <li key={item.label} className="group/sub relative">
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-ink transition-colors hover:bg-smoke hover:text-brand"
                        >
                          {item.label}
                        </a>
                        <ul className="invisible absolute left-full top-0 w-52 bg-white py-2 opacity-0 shadow-xl ring-1 ring-black/5 transition-all duration-150 group-hover/sub:visible group-hover/sub:opacity-100 group-focus-within/sub:visible group-focus-within/sub:opacity-100">
                          {SUBMENU_LINKS.map((sub) => (
                            <li key={sub}>
                              <a
                                href="#contact"
                                className="block px-4 py-2 text-sm text-ink transition-colors hover:bg-smoke hover:text-brand"
                              >
                                {sub}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-ink transition-colors hover:bg-smoke hover:text-brand"
                        >
                          {item.label}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-white',
                  link.active ? 'text-white' : 'text-white/70',
                )}
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="rounded p-2 text-white lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-7" />
        </button>
      </div>

      {open && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-[#16181c] p-6 shadow-xl transition-transform duration-300 lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-display text-xl font-semibold text-white">
            {BRAND}
            <span className="text-brand">.</span>
          </span>
          <button
            type="button"
            aria-label="Close menu"
            className="rounded p-1.5 text-white transition-colors hover:text-brand"
            onClick={() => setOpen(false)}
          >
            <X className="size-6" />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded px-2 py-2.5 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          {DROPDOWN_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="ml-4 rounded px-2 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p className="mt-auto pt-8 text-center text-xs text-white/40">
          <a href="https://www.componentdock.com/" className="transition-colors hover:text-brand">
            Made with Component Dock
          </a>
        </p>
      </div>
    </header>
  )
}
