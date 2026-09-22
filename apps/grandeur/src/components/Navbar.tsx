import { useState } from 'react'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#rooms' },
  { label: 'Pages', href: '#', children: ['Elements', 'Rooms'] },
  { label: 'Blog', href: '#blog', children: ['Blog', 'Blog Details'] },
  { label: 'Contact', href: '#footer' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2 text-sm text-body">
            <Phone className="h-4 w-4" />
            <span>Contact Us +44 (012) 5689 3264</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-body">
            <select
              aria-label="Currency"
              className="rounded border border-gray-200 bg-white px-2 py-1 text-xs"
            >
              <option>USD</option>
              <option>EUR</option>
              <option>AUD</option>
            </select>
            <select
              aria-label="Language"
              className="rounded border border-gray-200 bg-white px-2 py-1 text-xs"
            >
              <option>ENG</option>
              <option>FRA</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#" className="font-heading text-2xl font-bold text-ink">
            Grandeur
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="text-ink md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <a
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1 text-sm font-medium uppercase tracking-wide transition-colors hover:text-brand',
                    link.label === 'Home' ? 'text-brand' : 'text-ink',
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown className="h-3 w-3" />}
                </a>
                {link.children && dropdown === link.label && (
                  <ul className="absolute left-0 top-full z-10 mt-1 min-w-[160px] rounded bg-white shadow-lg">
                    {link.children.map((child) => (
                      <li key={child}>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-ink hover:bg-light-alt hover:text-brand"
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
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block border-b border-gray-100 py-3 text-sm font-medium uppercase text-ink hover:text-brand"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
