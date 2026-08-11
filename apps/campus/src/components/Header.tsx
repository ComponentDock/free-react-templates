import { useEffect, useState } from 'react'
import { GraduationCap, Menu, Phone, X } from 'lucide-react'
import {
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  phoneLabel,
  phoneNumber,
  registerLoginLabel,
  siteName,
  stickyThreshold,
} from '../data'
import { cn } from '@free-react-templates/ui'

export function Header() {
  const [sticky, setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > stickyThreshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      {/* top-header — 95px white strip: wordmark left, Register/Login right. */}
      <div className="flex h-[95px] items-center justify-between px-4 sm:px-8">
        <a href="#" className="flex items-center gap-3 text-heading">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-2 text-white">
            <GraduationCap aria-hidden="true" className="h-6 w-6" />
          </span>
          <span className="text-3xl font-extrabold uppercase tracking-wide">{siteName}</span>
        </a>
        <a
          href="#"
          className="text-sm font-semibold text-heading transition-colors hover:text-accent"
        >
          {registerLoginLabel}
        </a>
      </div>

      {/* academy-main-menu — 85px light-gray bar overlapping the hero; the
          green phone block sits at the right end. */}
      <nav
        aria-label={navLabel}
        data-sticky={sticky}
        className={cn(
          'relative z-40 bg-menu',
          sticky && 'fixed inset-x-0 top-0 shadow-[0_5px_40px_rgba(0,0,0,0.2)]',
        )}
      >
        <div className="mx-auto flex h-[85px] max-w-7xl items-center justify-between px-4 sm:px-8">
          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  className={cn(
                    'text-[13px] font-bold uppercase tracking-wide text-heading transition-colors hover:text-accent',
                    item.active && 'text-accent',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu trigger (classy-navbar-toggler equivalent). */}
          <button
            type="button"
            aria-label={menuOpen ? menuCloseLabel : menuTriggerLabel}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center text-heading transition-colors hover:text-accent lg:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>

          {/* calling-info .call-center — green gradient block, skewed leading
              edge, phone icon in a white-ring circle + number. */}
          <div className="relative hidden items-stretch lg:flex">
            <span
              aria-hidden="true"
              className="w-5 -skew-x-[20deg] bg-gradient-to-r from-brand-2 to-brand"
            />
            <a
              href="tel:+65456332556889"
              aria-label={phoneLabel}
              className="flex items-center gap-3 bg-gradient-to-r from-brand to-brand-2 px-8 text-white"
            >
              <span className="flex h-[45px] w-[45px] items-center justify-center rounded-full border-2 border-white">
                <Phone aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="text-sm font-bold">{phoneNumber}</span>
            </a>
          </div>
        </div>
        {/* 25%-wide #83c331 band at the right edge while sticky. */}
        {sticky && (
          <span aria-hidden="true" className="absolute inset-y-0 right-0 w-1/4 bg-brand-2" />
        )}
      </nav>

      {/* Mobile dropdown menu. */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={mobileNavLabel}
          className="relative z-40 border-t border-black/5 bg-menu px-4 pb-6 pt-2 shadow-[0_5px_40px_rgba(0,0,0,0.2)] sm:px-8 lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'block py-3 text-sm font-bold uppercase tracking-wide text-heading transition-colors hover:text-accent',
                    item.active && 'text-accent',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
