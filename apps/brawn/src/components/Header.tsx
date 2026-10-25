import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS, PROGRAMS } from '../content'
import { SearchForm } from './SearchForm'

const ITEM_CLASS =
  'flex h-[85px] items-center px-2 font-display text-base font-light text-nav transition-colors hover:text-brand'

const DROPDOWN_ITEM_CLASS =
  'block px-5 py-2 text-[0.95rem] text-body transition-colors hover:text-brand'

/** The `Services` item: hover-open on desktop, click/keyboard-open everywhere. */
function ServicesMenu() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLAnchorElement>(null)

  return (
    <li
      className="relative flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        ref={toggleRef}
        href="#services"
        aria-haspopup="true"
        aria-expanded={open}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setOpen(false)
            toggleRef.current?.focus()
          }
        }}
        className={cn(ITEM_CLASS, 'gap-1')}
      >
        Services
        <ChevronDown aria-hidden="true" className="h-4 w-4" />
      </a>
      {open ? (
        <ul
          aria-label="Programs"
          className="absolute top-full left-0 z-50 w-56 rounded-[4px] bg-white py-3 shadow-[0_2px_30px_rgba(0,0,0,0.2)]"
        >
          {PROGRAMS.map((program) => (
            <li key={program.name}>
              <a href="#services" className={DROPDOWN_ITEM_CLASS}>
                {program.name}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  )
}

/**
 * White, 85 px (62 px below `lg`), in flow above the hero — not overlaying it.
 * Six labels, the `Services` dropdown, the underlined search line and, under
 * 992 px, a drawer that holds the same six labels, the six program names and
 * the search field.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const burgerRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) {
      return undefined
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        burgerRef.current?.focus()
        return
      }
      if (event.key !== 'Tab') {
        return
      }
      const drawer = drawerRef.current!
      const focusable = Array.from(drawer.querySelectorAll<HTMLElement>('a[href], button, input'))
      const first = focusable[0]!
      const last = focusable[focusable.length - 1]!
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header data-header className="relative z-40 bg-white">
      <div className="mx-auto flex h-[62px] w-full max-w-[1310px] items-center justify-between gap-4 px-4 lg:h-[85px]">
        <a
          href="#top"
          aria-label={`${BRAND} home`}
          className="font-display text-xl font-normal tracking-[4px] text-brand uppercase"
        >
          {BRAND}
        </a>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-stretch">
            {NAV_LINKS.map((link) =>
              link.label === 'Services' ? (
                <ServicesMenu key={link.label} />
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={link.href === '#top' ? 'true' : undefined}
                    className={cn(ITEM_CLASS, link.href === '#top' && 'text-brand')}
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center lg:flex">
          <SearchForm />
        </div>

        <button
          ref={burgerRef}
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
          onClick={() => setMenuOpen((value) => !value)}
          className="rounded-btn p-2 text-ink lg:hidden"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="h-6 w-6" />
          ) : (
            <Menu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-drawer"
          ref={drawerRef}
          className="border-t border-black/10 bg-white px-4 pt-4 pb-6 lg:hidden"
        >
          <nav aria-label="Mobile navigation">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={link.href === '#top' ? 'true' : undefined}
                    className="block py-2 font-display text-base font-light text-nav"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-display text-[16px] font-bold tracking-[1.6px] text-ink uppercase">
              Programs
            </p>
            <ul className="space-y-1">
              {PROGRAMS.map((program) => (
                <li key={program.name}>
                  <a href="#services" className="block py-1 text-body">
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <SearchForm className="mt-4" />
        </div>
      ) : null}
    </header>
  )
}
