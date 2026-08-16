import { useState } from 'react'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brand, navLinks, type NavLink } from '../data'

function DesktopNavItem({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false)
  const hasChildren = (link.children?.length ?? 0) > 0

  if (!hasChildren) {
    return (
      <li>
        <a
          href={link.href}
          className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {link.label}
        </a>
      </li>
    )
  }

  return (
    <li className="relative">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        {link.label}
        <ChevronDown
          className={cn('h-4 w-4 transition-transform', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>
      {open && (
        <ul
          aria-label="Dropdown menu"
          className="absolute left-0 top-full min-w-[180px] bg-white py-2 shadow-lg"
        >
          {link.children!.map((child) => (
            <DesktopDropdownItem key={child.label} item={child} />
          ))}
        </ul>
      )}
    </li>
  )
}

function DesktopDropdownItem({ item }: { item: NavLink }) {
  const [open, setOpen] = useState(false)
  const hasChildren = (item.children?.length ?? 0) > 0

  if (!hasChildren) {
    return (
      <li>
        <a
          href={item.href}
          className="block px-4 py-2 text-sm text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {item.label}
        </a>
      </li>
    )
  }

  return (
    <li className="relative">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-2 px-4 py-2 text-sm text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        {item.label}
        <ChevronRight className="h-3 w-3" aria-hidden="true" />
      </button>
      {open && (
        <ul
          aria-label="Sub menu"
          className="absolute left-full top-0 min-w-[180px] bg-white py-2 shadow-lg"
        >
          {item.children!.map((sub) => (
            <li key={sub.label}>
              <a
                href={sub.href}
                className="block px-4 py-2 text-sm text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {sub.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

function MobileNavItem({ link, onNavigate }: { link: NavLink; onNavigate: () => void }) {
  const [open, setOpen] = useState(false)
  const hasChildren = (link.children?.length ?? 0) > 0

  if (!hasChildren) {
    return (
      <li>
        <a
          href={link.href}
          onClick={onNavigate}
          className="block px-4 py-2.5 text-base text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {link.label}
        </a>
      </li>
    )
  }

  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between px-4 py-2.5 text-base text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        {link.label}
        <ChevronDown
          className={cn('h-4 w-4 transition-transform', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>
      {open && (
        <ul className="bg-light/60 pb-2">
          {link.children!.map((child) => (
            <li key={child.label}>
              <a
                href={child.href}
                onClick={onNavigate}
                className="block px-8 py-2 text-sm text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30 w-full">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"
      >
        <a
          href="#home"
          className="text-2xl font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {brand}
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <DesktopNavItem key={link.label} link={link} />
          ))}
        </ul>
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <Menu className="h-7 w-7 text-white" aria-hidden="true" />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-label="Mobile menu">
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="absolute top-5 right-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <X className="h-6 w-6 text-ink" aria-hidden="true" />
          </button>
          <nav
            aria-label="Mobile navigation"
            className="absolute inset-y-0 right-0 w-[300px] overflow-y-auto bg-white pt-16 shadow-xl"
          >
            <ul>
              {navLinks.map((link) => (
                <MobileNavItem key={link.label} link={link} onNavigate={closeMenu} />
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
