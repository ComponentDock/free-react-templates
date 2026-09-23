import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-tight text-black">
          {BRAND}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.submenu && setDropdown(link.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              <a
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-[#2f89fc]',
                  link.href === '#home' ? 'text-[#2f89fc]' : 'text-black',
                )}
              >
                {link.label}
              </a>
              {link.submenu && dropdown === link.label && (
                <ul className="absolute left-0 top-full z-50 mt-1 min-w-[180px] rounded border border-gray-200 bg-white py-1 shadow-md">
                  {link.submenu.map((sub) => (
                    <li key={sub}>
                      <a
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#2f89fc]"
                      >
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  'block py-2 text-sm font-medium transition-colors hover:text-[#2f89fc]',
                  link.href === '#home' ? 'text-[#2f89fc]' : 'text-black',
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
              {link.submenu?.map((sub) => (
                <a
                  key={sub}
                  href={link.href}
                  className="ml-4 block py-1 text-sm text-gray-600 hover:text-[#2f89fc]"
                  onClick={() => setOpen(false)}
                >
                  {sub}
                </a>
              ))}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
