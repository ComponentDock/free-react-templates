import { useEffect, useState } from 'react'
import { ChevronDown, Leaf, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_DROPDOWNS, NAV_LINKS } from '../data'

/* header#header — fixed header, transparent over the white hero, gaining a
   dark translucent rgba(0,0,0,0.8) background once the page scrolls
   (the source's header-scrolled state). Logo = leaf icon + serif
   wordmark; desktop menu = Home (active) About Causes Events + Blog ▾ /
   Pages ▾ dropdowns + Contact, 12px #333 links with green hover/active.
   Mobile: hamburger -> slide-in panel with the same links + submenus;
   Escape closes menu and dropdowns. */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen && !openDropdown) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        setOpenDropdown(null)
        setMobileDropdown(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen, openDropdown])

  const linkClass = (active?: boolean) =>
    cn(
      'inline-flex items-center gap-1 px-[15px] py-5 text-[12px] font-medium uppercase tracking-wide transition-colors',
      scrolled ? 'text-white hover:text-accent' : 'text-[#333333] hover:text-accent',
      active && 'text-accent',
    )

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[1999] transition-colors duration-300',
        scrolled ? 'bg-[rgba(0,0,0,0.8)]' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center px-4">
        <a
          href="#home"
          className="font-display inline-flex items-center gap-2 py-[14px] text-2xl font-bold"
        >
          <Leaf aria-hidden="true" className="h-6 w-6 text-accent" />
          <span className={scrolled ? 'text-white' : 'text-ink'}>{BRAND}</span>
        </a>

        {/* Desktop nav — hidden on narrow viewports. */}
        <nav aria-label="Main" className="ml-auto hidden items-center lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.active ? 'page' : undefined}
              className={linkClass(link.active)}
            >
              {link.label}
            </a>
          ))}
          {NAV_DROPDOWNS.map((dropdown) => (
            <div key={dropdown.label} className="relative">
              <button
                type="button"
                aria-expanded={openDropdown === dropdown.label}
                onClick={() =>
                  setOpenDropdown(openDropdown === dropdown.label ? null : dropdown.label)
                }
                className={linkClass()}
              >
                {dropdown.label}
                <ChevronDown aria-hidden="true" className="h-3 w-3" />
              </button>
              {openDropdown === dropdown.label && (
                <ul className="absolute left-0 top-full z-50 min-w-[160px] bg-white py-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)]">
                  {dropdown.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-[12px] text-[#333333] transition-colors hover:bg-light hover:text-accent"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile toggle — shows on narrow viewports. */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className={cn(
            'ml-auto cursor-pointer p-2 lg:hidden',
            scrolled ? 'text-white' : 'text-ink',
          )}
        >
          <Menu aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile slide-in panel — 280px, from the right. */}
      {mobileOpen && (
        <div className="fixed inset-y-0 right-0 z-50 flex w-[280px] flex-col bg-white shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.15)] lg:hidden">
          <div className="flex items-center justify-between border-b border-[#eeeeee] px-4 py-3">
            <span className="font-display inline-flex items-center gap-2 text-xl font-bold text-ink">
              <Leaf aria-hidden="true" className="h-5 w-5 text-accent" />
              {BRAND}
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="cursor-pointer p-1 text-ink"
            >
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                aria-current={link.active ? 'page' : undefined}
                className={cn(
                  'block border-b border-[#eeeeee] py-3 text-[13px] uppercase tracking-wide text-[#333333] transition-colors hover:text-accent',
                  link.active && 'font-semibold text-accent',
                )}
              >
                {link.label}
              </a>
            ))}
            {NAV_DROPDOWNS.map((dropdown) => (
              <div key={dropdown.label} className="border-b border-[#eeeeee]">
                <button
                  type="button"
                  aria-expanded={mobileDropdown === dropdown.label}
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === dropdown.label ? null : dropdown.label)
                  }
                  className="flex w-full items-center justify-between py-3 text-[13px] uppercase tracking-wide text-[#333333] transition-colors hover:text-accent"
                >
                  {dropdown.label}
                  <ChevronDown aria-hidden="true" className="h-4 w-4" />
                </button>
                {mobileDropdown === dropdown.label && (
                  <ul className="pb-3">
                    {dropdown.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={() => {
                            setMobileOpen(false)
                            setMobileDropdown(null)
                          }}
                          className="block py-2 pl-4 text-[13px] text-[#555555] transition-colors hover:text-accent"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
