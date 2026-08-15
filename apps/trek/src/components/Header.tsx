import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import {
  brandWordmark,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
} from '../data'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-40 bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 lg:py-5">
        <a
          href="#home-section"
          className="flex items-center gap-2 font-sans text-[1.7rem] font-bold uppercase tracking-wide text-ink"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-8 w-8 text-sand"
            fill="currentColor"
          >
            <path d="M2 20h20L14 5l-4 7-3-4z" />
          </svg>
          {brandWordmark}
        </a>

        <nav aria-label={navLabel} className="hidden items-center lg:flex">
          <ul className="flex items-center">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={index === 0 ? 'page' : undefined}
                  className={
                    index === 0
                      ? 'block px-4 py-5 font-sans text-body transition-colors hover:text-sand'
                      : 'block px-4 py-5 font-sans text-ink transition-colors hover:text-sand'
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label={menuTriggerLabel}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {open && (
        <nav
          aria-label={mobileNavLabel}
          className="fixed inset-y-0 right-0 z-50 flex w-[300px] flex-col bg-white shadow-2xl lg:hidden"
        >
          <button
            type="button"
            aria-label={menuCloseLabel}
            onClick={() => setOpen(false)}
            className="ml-auto mr-4 mt-4 flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-sand"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <ul className="mt-4 flex flex-col px-6">
            {navItems.map((item, index) => (
              <li key={item.label} className="border-b border-soft last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={index === 0 ? 'page' : undefined}
                  className={
                    index === 0
                      ? 'block py-3 font-sans text-base text-sand transition-colors hover:text-sand'
                      : 'block py-3 font-sans text-base text-ink transition-colors hover:text-sand'
                  }
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
