import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavItem {
  label: string
  href: string
  active?: boolean
  children?: string[]
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'Dropdown', href: '#', children: ['Menu One', 'Menu Two', 'Menu Three'] },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]

const linkClass = (active: boolean | undefined) =>
  cn(
    'text-[15px] transition-colors',
    active ? 'text-primary-600' : 'text-black hover:text-primary-600',
  )

function renderLink(item: NavItem) {
  return (
    <a key={item.label} href={item.href} className={linkClass(item.active)}>
      {item.label}
    </a>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="bg-white py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <a href="#" className="text-2xl font-bold text-black">
          Wavecast<span className="text-primary-600">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  aria-expanded={dropdownOpen}
                  onClick={() => setDropdownOpen((open) => !open)}
                  className="flex items-center gap-1 text-[15px] text-black transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {dropdownOpen && (
                  <ul className="absolute left-0 top-full mt-2 w-44 border border-line bg-white shadow-md">
                    {item.children.map((child) => (
                      <li key={child}>
                        <a
                          href="#"
                          className="block px-4 py-2 text-base text-dark transition-colors hover:bg-primary-600 hover:text-white"
                        >
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              renderLink(item)
            ),
          )}
          <a href="#" className={linkClass(false)}>
            Login / Register
          </a>
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="text-black lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="mt-4 border-t border-line bg-white px-4 py-4 lg:hidden"
        >
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  type="button"
                  aria-expanded={dropdownOpen}
                  onClick={() => setDropdownOpen((open) => !open)}
                  className="flex items-center gap-1 py-2 text-[15px] text-black"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {dropdownOpen && (
                  <ul className="pb-2 pl-4">
                    {item.children.map((child) => (
                      <li key={child}>
                        <a href="#" className="block py-2 text-base text-dark">
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={cn('block py-2', linkClass(item.active))}
              >
                {item.label}
              </a>
            ),
          )}
          <a href="#" className={cn('block py-2', linkClass(false))}>
            Login / Register
          </a>
        </nav>
      )}
    </header>
  )
}
