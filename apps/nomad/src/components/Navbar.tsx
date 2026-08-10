import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navItems } from '../data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = (label: string) => {
    setOpenMenu((current) => (current === label ? null : label))
  }

  return (
    <header
      data-variant={scrolled ? 'solid' : 'transparent'}
      className={cn(
        'absolute left-0 right-0 top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'fixed bg-white shadow-md' : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-8"
      >
        <a href="#home" className="text-xl font-bold tracking-wide">
          <span className={scrolled ? 'text-black' : 'text-white'}>Nomad</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              {item.children ? (
                <>
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    aria-current={item.label === 'Home' ? 'page' : undefined}
                    onClick={() => toggleMenu(item.label)}
                    className={cn(
                      'flex items-center gap-1 px-5 py-3 text-sm transition-colors',
                      scrolled
                        ? openMenu === item.label
                          ? 'text-coral'
                          : 'text-gray-700 hover:text-coral'
                        : 'text-white hover:text-coral',
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        openMenu === item.label && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {openMenu === item.label && (
                    <ul className="absolute left-0 top-full min-w-56 bg-white py-2 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block px-5 py-2 text-sm text-gray-700 transition-colors hover:text-coral"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className={cn(
                    'block px-5 py-3 text-sm transition-colors',
                    scrolled ? 'text-gray-700 hover:text-coral' : 'text-white hover:text-coral',
                  )}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Menu"
          className={cn('rounded p-2 lg:hidden', scrolled ? 'text-gray-700' : 'text-white')}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'border-t border-gray-100 bg-white px-4 py-4 lg:hidden',
          mobileOpen ? 'block' : 'hidden',
        )}
      >
        <ul className="flex flex-col">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    onClick={() => toggleMenu(item.label)}
                    className="flex w-full items-center justify-between py-3 text-base font-medium text-gray-900"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        openMenu === item.label && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {openMenu === item.label && (
                    <ul className="border-l border-gray-100 pl-4">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm text-gray-600"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-base font-medium text-gray-900"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
