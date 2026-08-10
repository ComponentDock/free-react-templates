import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  brandEnd,
  brandStart,
  headerAddSubtitle,
  headerAddTitle,
  menuCloseLabel,
  menuOpenLabel,
  navItems,
} from '../data'

/** White header: two-tone wordmark, desktop nav with dropdowns under
    International and Pages, a teal "YOUR ADD HERE" placeholder ad on the
    right and a mobile hamburger menu (reference: .header-area /
    .newsbox-main-menu / .header-add-area). */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4">
        <a href="#top" className="shrink-0 py-7 text-2xl font-extrabold tracking-wide uppercase">
          <span className="text-accent">{brandStart}</span>
          <span className="text-ink">{brandEnd}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center lg:flex">
          <ul className="flex items-center">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.label} className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown((current) => (current === item.label ? null : item.label))
                    }
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                    className="inline-flex items-center gap-1 px-[15px] py-7 text-[13px] font-bold uppercase text-inklight transition-colors hover:text-accent"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        openDropdown === item.label && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {openDropdown === item.label ? (
                    <ul className="absolute top-full left-0 z-20 w-48 border border-hairline bg-white py-1 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child}>
                          <a
                            href="#news"
                            onClick={() => setOpenDropdown(null)}
                            className="block border-b border-hairline px-4 py-2 text-xs font-semibold text-inklight transition-colors hover:text-accent"
                          >
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ) : (
                <li key={item.label}>
                  <a
                    href="#news"
                    className="inline-block px-[15px] py-7 text-[13px] font-bold uppercase text-inklight transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center lg:flex">
          <div className="bg-teal-500 px-6 py-3 text-center">
            <p className="text-xs font-extrabold tracking-widest text-white uppercase">
              {headerAddTitle}
            </p>
            <p className="text-[10px] text-teal-50">{headerAddSubtitle}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? menuCloseLabel : menuOpenLabel}
          className="p-3 text-inklight transition-colors hover:text-accent lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen ? (
        <nav aria-label="Mobile" className="border-t border-hairline lg:hidden">
          <ul>
            {navItems.map((item) => (
              <li key={item.label} className="border-t border-hairline">
                <p className="px-4 py-3 text-[13px] font-bold uppercase text-inklight">
                  {item.label}
                </p>
                {item.children ? (
                  <ul>
                    {item.children.map((child) => (
                      <li key={child}>
                        <a
                          href="#news"
                          onClick={() => setMobileOpen(false)}
                          className="block border-t border-hairline px-8 py-3 text-xs font-semibold text-meta transition-colors hover:text-accent"
                        >
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <a
                    href="#news"
                    onClick={() => setMobileOpen(false)}
                    className="block border-t border-hairline px-8 py-3 text-xs font-semibold text-meta transition-colors hover:text-accent"
                  >
                    Browse {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
