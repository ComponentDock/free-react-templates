import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Home', id: 'hero' },
  {
    label: 'About',
    id: 'about',
    children: [
      { label: 'Our Training', id: 'training' },
      { label: 'Testimonials', id: 'testimonials' },
      { label: 'Gallery', id: 'gallery' },
      { label: 'Blog', id: 'blog' },
    ],
  },
  { label: 'Our Training', id: 'training' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
    setDropdownOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm" role="banner">
      <nav
        className="container mx-auto flex items-center justify-between px-4 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center text-xl font-bold text-[#212529]"
          aria-label="Northstar"
        >
          Northstar<span className="text-primary">.</span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              {item.children ? (
                <div
                  className="group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 text-sm font-semibold text-[#212529] transition-colors hover:text-primary"
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                  {dropdownOpen && (
                    <ul
                      className="absolute left-0 top-full z-50 mt-2 w-48 rounded bg-white shadow-lg"
                      role="menu"
                    >
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <button
                            onClick={() => scrollTo(child.id)}
                            className="block w-full px-4 py-2 text-left text-sm text-[#333333] hover:bg-[#eff1f3] hover:text-primary"
                            role="menuitem"
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => scrollTo(item.id)}
                  className="text-sm font-semibold text-[#212529] transition-colors hover:text-primary"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`absolute left-0 top-full w-full bg-white shadow-lg md:hidden ${mobileOpen ? 'block' : 'hidden'}`}
        >
          <ul className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className="block w-full py-2 text-left text-sm font-semibold text-[#212529] hover:text-primary"
                >
                  {item.label}
                </button>
                {item.children && (
                  <ul className="ml-4">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <button
                          onClick={() => scrollTo(child.id)}
                          className="block w-full py-1 text-left text-sm text-[#737373] hover:text-primary"
                        >
                          {child.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
