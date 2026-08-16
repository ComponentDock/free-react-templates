import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
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
          className="block px-[7px] py-[31px] text-lg text-white transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {link.label}
        </a>
      </li>
    )
  }

  return (
    <li className="group relative">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1 px-[7px] py-[31px] text-lg text-white transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        {link.label}
        <ChevronDown
          className={cn('h-5 w-5 transition-transform', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>
      <ul
        aria-label={`${link.label} dropdown`}
        className={cn(
          'absolute left-0 top-full w-[170px] bg-ink py-[17px] shadow-lg',
          open
            ? 'visible opacity-100'
            : 'invisible opacity-0 transition group-hover:visible group-hover:opacity-100',
        )}
      >
        {link.children!.map((child) => (
          <li key={child.label}>
            <a
              href={child.href}
              className="block px-[10px] py-[6px] text-base text-white transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {child.label}
            </a>
          </li>
        ))}
      </ul>
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
          className="block px-4 py-2.5 text-base text-white transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
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
        className="flex w-full items-center justify-between px-4 py-2.5 text-base text-white transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        {link.label}
        <ChevronDown
          className={cn('h-4 w-4 transition-transform', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>
      {open && (
        <ul className="pb-2">
          {link.children!.map((child) => (
            <li key={child.label}>
              <a
                href={child.href}
                onClick={onNavigate}
                className="block px-8 py-2 text-sm text-white/80 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
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

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'z-50 w-full',
        scrolled
          ? 'fixed inset-x-0 top-0 bg-sticky shadow-[0_10px_15px_rgba(25,25,25,0.1)]'
          : 'absolute inset-x-0 top-0 bg-ink',
      )}
    >
      <div className="flex items-center justify-between px-[20px] py-[15px] lg:px-[50px] xl:px-[88px]">
        <a
          href="#home"
          className="font-script text-4xl font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {brand}
        </a>
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <DesktopNavItem key={link.label} link={link} />
            ))}
          </ul>
        </nav>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((value) => !value)}
          className="text-white lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {menuOpen ? (
            <X className="h-7 w-7" aria-hidden="true" />
          ) : (
            <Menu className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </div>
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-white/10 bg-ink lg:hidden">
          <ul>
            {navLinks.map((link) => (
              <MobileNavItem key={link.label} link={link} onNavigate={() => setMenuOpen(false)} />
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
