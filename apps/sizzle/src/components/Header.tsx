import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brand, navItems } from '../data'

/** Fixed header that floats transparently over the hero, darkens on
 *  scroll, and shows a centered circular logo badge + centered nav with
 *  dropdowns (Blog, Pages). Mobile: hamburger → slide-in dark panel. */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1999] transition-colors duration-300 ${
        scrolled ? 'bg-header-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-center pt-5 transition-all duration-300 ${
            scrolled ? 'max-h-0 overflow-hidden pt-0 opacity-0' : 'opacity-100'
          }`}
        >
          <a
            href="#home"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white"
          >
            {brand.name}
          </a>
        </div>

        <div className="flex items-center justify-between py-4">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="sizzle-mobile-menu"
            onClick={() => setOpen(true)}
            className="text-white lg:hidden"
          >
            <Menu className="h-7 w-7" aria-hidden="true" />
          </button>

          <nav aria-label="Main" className="hidden items-center justify-center gap-7 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdown(item.children ? item.label : null)}
                onMouseLeave={() => setDropdown(null)}
              >
                <a
                  href={item.href}
                  className="text-xs font-medium tracking-wide text-white uppercase transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
                {item.children && dropdown === item.label && (
                  <ul className="absolute top-full left-0 w-44 bg-white py-2 shadow-[0px_0px_30px_rgba(127,137,161,0.25)]">
                    {item.children.map((child) => (
                      <li key={child}>
                        <a
                          href="#home"
                          className="block px-5 py-2 text-sm text-ink transition-colors hover:text-brand"
                        >
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          <div className="w-7 lg:hidden" aria-hidden="true" />
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[2000] lg:hidden" role="presentation">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <nav
            id="sizzle-mobile-menu"
            aria-label="Mobile"
            className="absolute top-0 right-0 h-full w-[300px] overflow-y-auto bg-black/80 p-6 backdrop-blur-sm"
          >
            <div className="mb-8 flex justify-end">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-white"
              >
                <X className="h-7 w-7" aria-hidden="true" />
              </button>
            </div>
            <ul className="space-y-5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium tracking-wide text-white uppercase transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <ul className="mt-2 space-y-2 border-l border-white/20 pl-4">
                      {item.children.map((child) => (
                        <li key={child}>
                          <a
                            href="#home"
                            onClick={() => setOpen(false)}
                            className="text-sm text-white/80 transition-colors hover:text-brand"
                          >
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
