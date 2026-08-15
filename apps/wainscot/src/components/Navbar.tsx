import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import {
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  siteName,
} from '../data'

function LogoMark() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-9 w-9 rotate-45 items-center justify-center rounded-md bg-brand"
    >
      <span className="relative block h-4 w-4 -rotate-45">
        <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white" />
        <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-white" />
      </span>
    </span>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]">
      <nav
        aria-label={navLabel}
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4"
      >
        <a href="#home-section" className="inline-flex items-center gap-3">
          <LogoMark />
          <span className="text-xl font-semibold tracking-wide text-ink">{siteName}</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? menuCloseLabel : menuTriggerLabel}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <nav aria-label={mobileNavLabel} className="border-t border-gray-100 bg-white lg:hidden">
          <ul className="flex flex-col px-4 py-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
