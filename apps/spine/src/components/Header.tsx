import { FormEvent, useEffect, useState } from 'react'
import { ChevronDown, Menu, Search, ShoppingCart, X } from 'lucide-react'
import { header, navLinks, type NavLink } from '../data'

function handleSearch(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

function NavItem({ link, onNavigate }: { link: NavLink; onNavigate: () => void }) {
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
            className="flex items-center gap-1 px-3 py-2 text-base font-medium text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {link.label}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
          {open && (
            <ul className="min-w-44 border border-edge bg-white py-2 shadow-lg">
              {link.children!.map((child) => (
                <li key={child.label}>
                  <a
                    href={child.href}
                    onClick={onNavigate}
                    className="block px-4 py-2 text-sm text-secondary transition-colors hover:bg-section hover:text-brand"
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
          className="block px-3 py-2 text-base font-medium text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {link.label}
        </a>
      )}
    </li>
  )
}

export function Header() {
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
    <header>
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-3 px-6 py-4">
          <a
            href="#home"
            className="font-display text-2xl font-bold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {header.brand}
          </a>
          <form
            role="search"
            onSubmit={handleSearch}
            className="flex min-w-0 flex-1 items-center justify-center"
          >
            <label htmlFor="header-search" className="sr-only">
              {header.searchPlaceholder}
            </label>
            <div className="flex w-full max-w-[530px] items-center gap-3 rounded-full border border-darkblue/15 px-5 py-2.5">
              <input
                id="header-search"
                type="search"
                placeholder={header.searchPlaceholder}
                className="min-w-0 flex-1 bg-transparent text-base text-darkblue placeholder:text-muted focus:outline-none"
              />
              <button
                type="submit"
                aria-label={header.searchLabel}
                className="shrink-0 text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <Search className="h-[22px] w-[22px]" aria-hidden="true" />
              </button>
            </div>
          </form>
          <div className="ml-auto flex items-center gap-6 lg:ml-0">
            <a
              href="#contact"
              className="hidden text-base text-ink transition-colors hover:text-brand md:block"
            >
              {header.faqLabel}
            </a>
            <a
              href="#contact"
              className="hidden text-base text-ink transition-colors hover:text-brand md:block"
            >
              {header.trackOrderLabel}
            </a>
            <a
              href="#latest"
              aria-label={`${header.cartLabel}, ${header.cartCount} items`}
              className="relative text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <ShoppingCart className="h-6 w-6" aria-hidden="true" />
              <span className="absolute -right-2.5 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs text-white">
                {header.cartCount}
              </span>
            </a>
            <a
              href="#latest"
              className="rounded-[35px] bg-brand px-[34px] py-2.5 text-base font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {header.signInLabel}
            </a>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 border-t border-edge bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            <ul className="flex items-center">
              {navLinks.map((link) => (
                <NavItem key={link.label} link={link} onNavigate={close} />
              ))}
            </ul>
          </nav>
          <div className="flex w-full items-center justify-end py-2 lg:hidden">
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {menuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" onClick={close} />
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 flex h-full w-80 flex-col bg-white shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-edge px-6 py-4">
              <span className="font-display text-2xl font-bold text-ink">{header.brand}</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={close}
                className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <ul className="space-y-1 overflow-y-auto p-6">
              {navLinks.map((link) => (
                <NavItem key={link.label} link={link} onNavigate={close} />
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
