import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { aboutDropdown, navLinks } from '../data'

/** Desktop About dropdown with a nested "Sub Menus" dropdown. */
function AboutDropdown() {
  const [open, setOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="about-dropdown"
        className="flex items-center gap-1 text-[15px] font-medium uppercase tracking-wider text-black/60 transition-colors hover:text-black"
      >
        About
        <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
      {open && (
        <div
          id="about-dropdown"
          className="absolute left-0 top-full z-50 w-56 border border-gray-100 bg-white py-2 shadow-lg"
        >
          {aboutDropdown.map((item) =>
            'children' in item && item.children ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() => setSubOpen((value) => !value)}
                  aria-expanded={subOpen}
                  aria-controls="sub-menus-dropdown"
                  className="flex w-full items-center justify-between px-4 py-2 text-sm text-black/70 transition-colors hover:bg-gray-50 hover:text-black"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
                {subOpen && (
                  <div
                    id="sub-menus-dropdown"
                    className="absolute left-full top-0 w-56 border border-gray-100 bg-white py-2 shadow-lg"
                  >
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-black/70 transition-colors hover:bg-gray-50 hover:text-black"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm text-black/70 transition-colors hover:bg-gray-50 hover:text-black"
              >
                {item.label}
              </a>
            ),
          )}
        </div>
      )}
    </div>
  )
}

/** White sticky navbar: bold uppercase brand, uppercase links, an About
 *  dropdown (with nested Sub Menus), a green Get Started button and a
 *  mobile slide-in menu. */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[99] border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        <a
          href="#home"
          className="font-heading text-2xl font-bold uppercase tracking-wide text-black"
          aria-label="Verdant"
        >
          Verdant
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.label === 'About' ? (
              <AboutDropdown key={link.label} />
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  'text-[15px] font-medium uppercase tracking-wider text-black/60 transition-colors hover:text-black',
                  'active' in link && link.active && 'font-bold text-black',
                )}
              >
                {link.label}
              </a>
            ),
          )}
          <a
            href="#contact"
            className="bg-primary px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-700"
          >
            Get Started
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="flex h-11 w-11 items-center justify-center text-black lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'border-t border-gray-100 bg-white px-4 pb-4 pt-2 shadow-lg lg:hidden',
          mobileOpen ? 'block' : 'hidden',
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-gray-100 py-3 text-sm font-medium uppercase tracking-wider text-black/70 transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 bg-primary px-5 py-2.5 text-center text-[13px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-700"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  )
}
