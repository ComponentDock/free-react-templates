import { useState } from 'react'

interface DropdownItem {
  label: string
  href: string
}

interface NavItem {
  label: string
  href: string
  dropdown?: DropdownItem[]
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  {
    label: 'Portfolio',
    href: '#portfolio',
    dropdown: [
      { label: 'Portfolio 1', href: '#portfolio-1' },
      { label: 'Portfolio 2', href: '#portfolio-2' },
    ],
  },
  {
    label: 'Blog',
    href: '#blog',
    dropdown: [
      { label: 'Blog Page', href: '#blog-page' },
      { label: 'Blog Detail', href: '#blog-detail' },
    ],
  },
  { label: 'Regular page', href: '#regular' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (label: string) => {
    setOpenDropdown(label)
  }

  return (
    <header className="absolute top-0 right-0 left-0 z-50 h-[60px] text-center">
      <div className="mx-auto flex h-[60px] items-center justify-between px-[50px]">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <span className="font-accent text-2xl font-normal tracking-wide text-white">Fotura</span>
        </a>

        {/* Right area: contact + nav */}
        <div className="flex items-center">
          {/* Contact email */}
          <a
            href="mailto:hello@fotura.com"
            className="mr-5 hidden h-[60px] leading-[60px] text-white/80 transition-colors hover:text-brand sm:block"
          >
            HELLO@FOTURA.COM
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center sm:flex" aria-label="Main navigation">
            <ul className="flex list-none items-center gap-0 p-0">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && toggleDropdown(item.label)}
                  onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex h-[60px] items-center px-2.5 text-[13px] font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-brand"
                  >
                    {item.label}
                    {item.dropdown && (
                      <svg
                        className="ml-2.5 h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </a>
                  {item.dropdown && openDropdown === item.label && (
                    <ul className="absolute top-[60px] left-0 z-50 min-w-[180px] list-none bg-white p-0 shadow-[0px_3px_10px_rgba(0,0,0,0.3)]">
                      {item.dropdown.map((sub) => (
                        <li key={sub.label} className="border-t border-gray-200">
                          <a
                            href={sub.href}
                            className="block px-5 py-4 text-[14px] text-ink transition-colors hover:text-brand"
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger (mobile) */}
          <button
            className="ml-4 text-3xl text-white sm:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="absolute top-[60px] right-0 left-0 z-50 bg-white shadow-lg sm:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="list-none p-0">
            {navItems.map((item) => (
              <li key={item.label} className="border-t border-gray-100">
                <a
                  href={item.href}
                  className="block px-[50px] py-4 text-[14px] font-medium text-ink transition-colors hover:text-brand"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
                {item.dropdown && (
                  <ul className="list-none bg-gray-50 p-0">
                    {item.dropdown.map((sub) => (
                      <li key={sub.label} className="border-t border-gray-100">
                        <a
                          href={sub.href}
                          className="block px-[70px] py-3 text-[13px] text-muted transition-colors hover:text-brand"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="border-t border-gray-100 px-[50px] py-4">
              <a
                href="mailto:hello@fotura.com"
                className="text-[13px] font-medium text-muted transition-colors hover:text-brand"
              >
                HELLO@FOTURA.COM
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
