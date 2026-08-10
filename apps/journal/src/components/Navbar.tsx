import { useEffect, useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  brandName,
  brandTagline,
  menuCloseLabel,
  menuOpenLabel,
  navSearchCloseLabel,
  navSearchLabel,
  navSearchPlaceholder,
  navSubscribeLabel,
} from '../data'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'
import { NewsletterModal } from './NewsletterModal'

/** Centered logo wordmark + sticky black magazine nav shell: Subscribe
 *  button (opens the newsletter modal), the desktop menu, an expanding
 *  search control, the hamburger, and the off-canvas mobile menu. */
export function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navIconClasses = cn(
    'transition-colors hover:text-accent',
    sticky ? 'text-body' : 'text-white',
  )

  return (
    <header className="relative z-[1999]">
      {/* Logo area */}
      <div className="border-b border-hairline bg-white py-10 text-center">
        <a href="#top" className="inline-block">
          <span className="block text-4xl font-bold uppercase tracking-wide text-ink">
            {brandName}
          </span>
          <span className="mt-1 block text-[11px] uppercase tracking-[0.3em] text-meta">
            {brandTagline}
          </span>
        </a>
      </div>

      {/* Nav bar */}
      <nav
        aria-label="Main"
        className={cn(
          'transition-all',
          sticky ? 'fixed inset-x-0 top-0 shadow-[0_5px_15px_rgba(0,0,0,0.15)]' : 'bg-nearblack',
          sticky && 'bg-white',
        )}
      >
        <div
          className={cn(
            'mx-auto flex max-w-6xl items-center justify-between px-4 transition-all lg:px-6',
            sticky ? 'h-[70px]' : 'h-[100px]',
          )}
        >
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="h-[40px] min-w-[140px] bg-[#0d0d0d] text-[12px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-accent"
          >
            {navSubscribeLabel}
          </button>

          <DesktopMenu sticky={sticky} />

          <div className="hidden items-center lg:flex">
            {searchOpen ? (
              <div className="flex items-center">
                <input
                  type="search"
                  aria-label={navSearchLabel}
                  placeholder={navSearchPlaceholder}
                  className="w-44 border-b border-search bg-transparent pb-1 text-[13px] italic text-ink placeholder:text-search focus:border-ink focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label={navSearchCloseLabel}
                  className={cn(navIconClasses, 'ml-3')}
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label={navSearchLabel}
                className={navIconClasses}
              >
                <Search className="h-5 w-5" aria-hidden="true" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? menuCloseLabel : menuOpenLabel}
            className={cn('rounded p-2 lg:hidden', navIconClasses)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen ? <MobileMenu onClose={() => setMobileOpen(false)} /> : null}
      {modalOpen ? <NewsletterModal onClose={() => setModalOpen(false)} /> : null}
    </header>
  )
}
