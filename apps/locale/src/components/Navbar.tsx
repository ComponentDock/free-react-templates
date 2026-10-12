import { useCallback, useEffect, useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  ADD_LISTING_HREF,
  ADD_LISTING_LABEL,
  BRAND,
  CLOSE_LABEL,
  HOME_ID,
  MENU_DIALOG_LABEL,
  MENU_LABEL,
  NAV_LINKS,
  SEARCH_LABEL,
  SEARCH_PLACEHOLDER,
  SIGN_IN_LABEL,
} from '../lib/site'
import { containerClass, dropdownClass, navLinkClass } from '../lib/styles'

const SCROLL_THRESHOLD = 50

/**
 * The bar rides over the hero: transparent and white at the top of the page, translucent navy with a
 * soft shadow once the page has scrolled past 50px (the account group hides at that point, as the
 * design does). Rows with children reveal their dropdown on hover and on keyboard focus. Below the
 * wide breakpoint the same rows live in a folded panel, which mounts its contents only while open.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const focusPanel = useCallback((node: HTMLDivElement | null) => {
    node?.focus()
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 z-40 w-full transition-colors',
        scrolled
          ? 'bg-[rgba(26,33,61,0.8)] shadow-[0_10px_15px_rgba(25,25,25,0.1)]'
          : 'bg-transparent',
      )}
    >
      <div className={cn(containerClass, 'flex items-center gap-6 py-4')}>
        <a href={`#${HOME_ID}`} className="font-display text-2xl font-bold tracking-wide text-white">
          {BRAND}
        </a>

        <div className="relative hidden w-64 xl:block">
          <Search
            className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-white"
            aria-hidden="true"
          />
          <input
            type="search"
            aria-label={SEARCH_LABEL}
            placeholder={SEARCH_PLACEHOLDER}
            className="h-12 w-full rounded-full border border-[rgba(35,47,85,0.15)] bg-white/25 pl-12 pr-4 text-white outline-none placeholder:text-white/80"
          />
        </div>

        <nav aria-label="Main" className="hidden items-center lg:flex">
          <ul role="list" className="flex items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="group relative">
                <a href={link.href} className={navLinkClass}>
                  {link.label}
                  {link.children && <ChevronDown className="h-4 w-4" aria-hidden="true" />}
                </a>
                {link.children && (
                  <div className={dropdownClass}>
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm font-medium text-white transition-colors hover:text-brand"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div
          data-testid="account-actions"
          className={cn('ml-auto flex items-center gap-6', scrolled && 'hidden')}
        >
          <a
            href="#login"
            className="font-display text-base font-medium text-white transition-colors hover:text-brand"
          >
            {SIGN_IN_LABEL}
          </a>
          <a
            href={ADD_LISTING_HREF}
            className="rounded-full bg-brand px-6 py-3 font-display text-base font-medium text-white transition-colors hover:bg-deep"
          >
            {ADD_LISTING_LABEL}
          </a>
        </div>

        <button
          type="button"
          aria-label={MENU_LABEL}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="ml-auto text-white lg:hidden"
        >
          <Menu className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      {menuOpen && (
        <div
          data-testid="menu-backdrop"
          className="fixed inset-0 z-50 bg-black/40"
          onClick={closeMenu}
        >
          <div
            ref={focusPanel}
            tabIndex={-1}
            role="dialog"
            aria-label={MENU_DIALOG_LABEL}
            onClick={(event) => event.stopPropagation()}
            className="absolute right-0 top-0 h-full w-80 overflow-y-auto bg-paper p-6 shadow-xl outline-none"
          >
            <button
              type="button"
              aria-label={CLOSE_LABEL}
              onClick={closeMenu}
              className="absolute right-4 top-4 text-navy"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <a
              href={`#${HOME_ID}`}
              onClick={closeMenu}
              className="font-display text-2xl font-bold tracking-wide text-navy"
            >
              {BRAND}
            </a>
            <nav aria-label={MENU_DIALOG_LABEL} className="mt-8 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-2 font-display text-lg font-medium text-navy"
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <ul role="list" className="ml-4 border-l border-edge pl-3">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            onClick={closeMenu}
                            className="block py-1.5 text-base text-muted"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3 border-t border-edge pt-6">
              <a
                href="#login"
                onClick={closeMenu}
                className="font-display text-base font-medium text-navy"
              >
                {SIGN_IN_LABEL}
              </a>
              <a
                href={ADD_LISTING_HREF}
                onClick={closeMenu}
                className="rounded-full bg-brand px-6 py-3 text-center font-display text-base font-medium text-white"
              >
                {ADD_LISTING_LABEL}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
