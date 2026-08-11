import { useEffect, useState } from 'react'
import { ChevronDown, GraduationCap, Menu, X } from 'lucide-react'
import {
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  siteName,
} from '../data'
import { cn } from '@free-react-templates/ui'

export function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-white transition-shadow',
        sticky && 'shadow-[0_3px_16px_rgba(0,0,0,0.1)]',
      )}
    >
      <nav aria-label={navLabel} className="bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
          <a href="#" className="flex items-center gap-2 text-ink">
            <GraduationCap aria-hidden="true" className="h-8 w-8 text-brand" />
            <span className="text-2xl font-bold uppercase tracking-wide">{siteName}</span>
          </a>

          <ul className="hidden items-center lg:flex">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  className={cn(
                    'flex items-center gap-1 px-[22px] py-2 text-xs font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand',
                    item.active && 'text-brand',
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown aria-hidden="true" className="h-3 w-3" />}
                </a>
                {item.children && (
                  <ul className="invisible absolute left-0 top-full min-w-[200px] bg-white opacity-0 shadow-[0_3px_16px_rgba(0,0,0,0.1)] transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.label} className="border-b border-[#ededed] last:border-b-0">
                        <a
                          href={child.href}
                          className="block px-[30px] py-3 text-sm text-ink transition-colors hover:bg-brand hover:text-white"
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

          <button
            type="button"
            aria-label={menuOpen ? menuCloseLabel : menuTriggerLabel}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-brand lg:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={mobileNavLabel}
          className="border-t border-border-soft bg-white px-4 pb-6 pt-2 shadow-[0_3px_16px_rgba(0,0,0,0.1)] sm:px-8 lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'block py-3 text-xs font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand',
                    item.active && 'text-brand',
                  )}
                >
                  {item.label}
                </a>
                {item.children && (
                  <ul className="mb-2 border-l border-border-soft pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-2 text-sm text-muted transition-colors hover:text-brand"
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
    </header>
  )
}
