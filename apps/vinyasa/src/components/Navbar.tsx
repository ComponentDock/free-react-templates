import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { navLinks, type NavLink } from '../data'

function DropdownItem({ link, onNavigate }: { link: NavLink; onNavigate: () => void }) {
  const [open, setOpen] = useState(false)
  const hasChildren = (link.children?.length ?? 0) > 0

  return (
    <li className="relative">
      {hasChildren ? (
        <>
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {link.label}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
          {open && (
            <ul className="min-w-40 rounded-none border border-gray-100 bg-white py-2 shadow-lg">
              {link.children!.map((child) => (
                <li key={child.label}>
                  <a
                    href={child.href}
                    onClick={onNavigate}
                    className="block px-4 py-2 text-sm text-muted transition-colors hover:bg-mist hover:text-brand"
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
          href={link.href}
          onClick={onNavigate}
          className="block px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {link.label}
        </a>
      )}
    </li>
  )
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={close}
          className="text-2xl font-bold uppercase tracking-wider text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <span className="text-brand">V</span>inyasa
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <DropdownItem key={link.label} link={link} onNavigate={close} />
          ))}
        </nav>
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand lg:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-[57px] z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" onClick={close} />
          <nav
            aria-label="Mobile navigation"
            className="relative ml-auto h-full w-80 overflow-y-auto bg-white p-6 shadow-xl"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <DropdownItem key={link.label} link={link} onNavigate={close} />
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
