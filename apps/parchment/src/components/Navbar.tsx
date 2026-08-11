import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLabel, navSections } from '../data'

interface NavbarProps {
  menuOpen: boolean
}

const linkClasses =
  'block px-4 text-xs font-semibold uppercase tracking-[2px] text-black/60 transition-colors hover:text-black'

/* Centered uppercase nav (reference `ul.header__nav`): plain links + two
   dropdowns (Categories, Blog). Desktop renders an inline row with hover/
   click dropdowns over a near-black #151515 panel; when `menuOpen` the
   mobile full-screen white panel (reference mobile `div.header__nav-wrap`)
   renders with 18px black links and the current link in bold navy. */
export function Navbar({ menuOpen }: NavbarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggleMenu = (label: string) => {
    setOpenMenu((current) => (current === label ? null : label))
  }

  const dropdownLinks = (children: { label: string; href: string }[]) =>
    children.map((child) => (
      <li key={child.label}>
        <a
          href={child.href}
          className="block px-5 py-2 text-[1.5rem] text-white/60 transition-colors hover:text-white"
        >
          {child.label}
        </a>
      </li>
    ))

  return (
    <>
      <nav aria-label={navLabel} className="hidden text-center md:block">
        <ul className="inline-flex items-center">
          {navSections.map((item) =>
            item.children ? (
              <li key={item.label} className="group relative">
                <button
                  type="button"
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                  onClick={() => toggleMenu(item.label)}
                  className={cn(linkClasses, 'flex h-[78px] items-center gap-1.5')}
                >
                  {item.label}
                  <ChevronDown className="h-3 w-3" aria-hidden="true" />
                </button>
                <ul
                  className={cn(
                    'absolute top-full left-0 hidden w-52 rounded-b-[3px] bg-dropdown py-5 text-left group-hover:block',
                    openMenu === item.label && 'block',
                  )}
                >
                  {dropdownLinks(item.children)}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={cn(
                    linkClasses,
                    'flex h-[78px] items-center',
                    item.current && 'font-bold text-ink',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ),
          )}
        </ul>
      </nav>

      {/* Mobile full-screen panel (reference mobile `div.header__nav-wrap`,
          fixed white with 18px links, current link bold navy #111860). */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={navLabel}
          className="fixed inset-0 z-40 overflow-y-auto bg-paper pt-[78px] md:hidden"
        >
          <ul className="px-10 py-6">
            {navSections.map((item) => (
              <li key={item.label} className="border-t border-black/10">
                <a
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={cn(
                    'block py-4 text-lg text-black transition-colors hover:text-brand',
                    item.current && 'font-bold text-brand hover:text-brand',
                  )}
                >
                  {item.label}
                </a>
                {item.children && (
                  <ul className="pb-3">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block py-1.5 pl-5 text-base text-black/70 transition-colors hover:text-brand"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
