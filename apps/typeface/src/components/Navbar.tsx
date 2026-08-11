import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLabel, navSections } from '../data'

interface NavbarProps {
  menuOpen: boolean
}

/* Uppercase nav (reference `nav.navbar`): plain links + two dropdowns
   (Travel, Categories). Desktop shows a centered row with hover/click
   dropdowns; the mobile collapse (bg #e6e6e6) is rendered when the logo
   hamburger is open. */
export function Navbar({ menuOpen }: NavbarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggleMenu = (label: string) => {
    setOpenMenu((current) => (current === label ? null : label))
  }

  const linkClasses =
    'block px-4 py-7 text-base font-medium uppercase tracking-[.05em] text-black/60 transition-colors hover:text-black'

  return (
    <nav
      id="site-nav"
      aria-label={navLabel}
      className="border-b border-line bg-white md:bg-transparent"
    >
      <div className="mx-auto max-w-[1250px] px-4">
        <ul className="hidden items-center justify-center md:flex">
          {navSections.map((item) =>
            item.children ? (
              <li key={item.label} className="group relative">
                <button
                  type="button"
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                  onClick={() => toggleMenu(item.label)}
                  className={cn(linkClasses, 'flex items-center gap-1.5')}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
                <ul
                  className={cn(
                    'absolute top-full left-0 z-20 hidden w-48 bg-white shadow-[0_2px_30px_rgba(0,0,0,.2)] group-hover:block',
                    openMenu === item.label && 'block',
                  )}
                >
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-body transition-colors hover:bg-brand hover:text-white"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.label === 'Home' ? 'page' : undefined}
                  className={linkClasses}
                >
                  {item.label}
                </a>
              </li>
            ),
          )}
        </ul>
        {menuOpen && (
          <ul className="flex flex-col bg-line md:hidden">
            {navSections.map((item) => (
              <li key={item.label} className="border-b border-white/70 last:border-b-0">
                <a
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium uppercase tracking-[.05em] text-black/70 hover:text-black"
                >
                  {item.label}
                </a>
                {item.children && (
                  <ul className="pb-2">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-8 py-1.5 text-sm text-body hover:text-black"
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
        )}
      </div>
    </nav>
  )
}
