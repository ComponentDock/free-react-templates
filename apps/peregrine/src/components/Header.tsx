import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import {
  bookNowLabel,
  brandEnd,
  brandStart,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
} from '../data'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const light = !scrolled && !open

  return (
    <header
      className={
        scrolled || open
          ? 'fixed inset-x-0 top-0 z-50 bg-white shadow-sm'
          : 'fixed inset-x-0 top-0 z-50 bg-transparent'
      }
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
        <a
          href="#home-section"
          className={
            light
              ? 'font-sans text-2xl font-bold tracking-wide text-white'
              : 'font-sans text-2xl font-bold tracking-wide text-black'
          }
        >
          <span className={light ? 'text-white' : 'text-black'}>{brandStart}</span>
          <span className="text-brand">{brandEnd}</span>
        </a>
        <nav aria-label={navLabel} className="hidden items-center lg:flex">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={
                    light
                      ? 'block px-3 py-2 font-sans text-[15px] font-medium text-white transition-colors hover:text-brand'
                      : 'block px-3 py-2 font-sans text-[15px] font-medium text-black transition-colors hover:text-brand'
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#search-section"
                className="ml-3 inline-block bg-brand px-[18px] py-[12.8px] font-sans text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-transparent hover:text-brand"
                style={{ border: '1px solid #ffb400' }}
              >
                {bookNowLabel}
              </a>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          aria-label={open ? menuCloseLabel : menuTriggerLabel}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={
            light
              ? 'inline-flex h-10 w-10 items-center justify-center text-white lg:hidden'
              : 'inline-flex h-10 w-10 items-center justify-center text-black lg:hidden'
          }
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label={mobileNavLabel}
          className="border-t border-soft bg-white px-6 pb-6 lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-soft last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-3 font-sans text-base font-medium text-black transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#search-section"
                onClick={() => setOpen(false)}
                className="inline-block w-full bg-brand px-[18px] py-3 text-center font-sans text-sm font-medium uppercase tracking-wide text-white"
              >
                {bookNowLabel}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
