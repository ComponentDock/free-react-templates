import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  siteName,
} from '../data'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500',
        scrolled ? 'bg-white shadow-[0_3px_16px_rgba(0,0,0,0.1)]' : 'bg-transparent',
      )}
    >
      <div className="flex h-[91px] items-center justify-between px-[50px] max-md:px-4">
        <a href="#home-section" className="text-3xl font-semibold tracking-wide text-ink">
          {siteName}
        </a>

        {/* Desktop nav with hover dropdowns. */}
        <nav aria-label={navLabel} className="hidden lg:block">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="relative inline-block px-[23px] py-[38px] text-[15px] text-body transition-colors duration-300 hover:text-brand after:absolute after:inset-x-[23px] after:bottom-[30px] after:h-[2px] after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 group-hover:after:scale-x-100"
                >
                  {item.label}
                </a>
                {item.children && (
                  <ul className="absolute left-1/2 top-full hidden w-[200px] -translate-x-1/2 bg-white py-2 shadow-lg group-hover:block">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-4 py-2 text-sm text-ink transition-colors hover:text-brand"
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

        {/* Mobile menu trigger. */}
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

      {/* Mobile menu panel. */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={mobileNavLabel}
          className="absolute inset-x-0 top-full max-h-[calc(100vh-91px)] overflow-y-auto bg-white shadow-lg lg:hidden"
        >
          <ul className="flex flex-col px-4 pb-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-line px-2 py-4 text-[15px] text-body transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
                {item.children?.map((child) => (
                  <a
                    key={child.label}
                    href={child.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-line py-3 pl-6 text-sm text-body transition-colors hover:text-brand"
                  >
                    {child.label}
                  </a>
                ))}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
