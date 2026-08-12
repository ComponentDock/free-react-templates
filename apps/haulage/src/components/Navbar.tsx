import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS } from '../data'

/* header.site-navbar — sticky white navbar: orange uppercase weight-900
   logo left, menu right (Home, Services, About Us, Team, Pricing, FAQ,
   Why Us, Testimonials, Blog, Contact) with orange hover/active. A shadow
   appears once the page scrolls (the source's js-sticky-header behavior).
   Mobile: hamburger -> 300px white off-canvas panel from the right with a
   close button; Escape closes it and links close it on click. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  const desktopLinkClass = (active?: boolean) =>
    cn(
      'inline-block px-[15px] py-5 text-[15px] text-ink transition-colors hover:text-brand',
      active && 'text-brand hover:text-brand',
    )

  return (
    <header
      className={cn(
        'sticky top-0 z-[1999] bg-white transition-shadow duration-300',
        scrolled && 'shadow-[0_4px_20px_-5px_rgba(0,0,0,.2)]',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center px-4">
        <a
          href="#home"
          className="font-display py-5 text-2xl font-black uppercase tracking-wide text-brand"
        >
          {BRAND}
        </a>

        {/* Desktop nav — hidden on narrow viewports. */}
        <nav aria-label="Main" className="ml-auto hidden items-center lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.active ? 'page' : undefined}
              className={desktopLinkClass(link.active)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle — shows on narrow viewports. */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="ml-auto cursor-pointer p-2 text-ink lg:hidden"
        >
          <Menu aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile off-canvas panel — 300px, slides in from the right. */}
      {mobileOpen && (
        <div className="fixed inset-y-0 right-0 z-50 flex w-[300px] flex-col bg-white shadow-[-10px_0_20px_-10px_rgba(0,0,0,.1)] lg:hidden">
          <div className="flex justify-end p-4">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="cursor-pointer text-ink"
            >
              <X aria-hidden="true" className="h-[30px] w-[30px]" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 pb-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                aria-current={link.active ? 'page' : undefined}
                className={cn(
                  'block border-b border-[#ced4da] py-3 text-[15px] text-ink transition-colors hover:text-brand',
                  link.active && 'font-semibold text-brand',
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
