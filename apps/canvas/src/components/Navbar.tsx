import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS } from '../data'

/* header.site-navbar — absolute, transparent, z-index 1999; brand left
   (uppercase Poppins, white), right-aligned links rgba(255,255,255,.7) →
   white on hover, active link WHITE. Sticky state (.sticky-wrapper.is-sticky):
   white bar + shadow `4px 0 20px -5px rgba(0,0,0,.2)`, indigo brand + active
   link, black links. ≤991px: indigo hamburger → 300px white off-canvas panel
   from the right (#212529 links, hover/active indigo). */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = (active?: boolean) =>
    cn(
      'inline-block px-[15px] py-5 text-[15px] text-white/70 transition-colors hover:text-white',
      scrolled && 'text-ink/70 hover:text-ink',
      active && 'text-white hover:text-white',
      scrolled && active && 'text-brand hover:text-brand',
    )

  return (
    <header
      className={cn(
        'absolute inset-x-0 top-0 z-[1999] p-4 transition-all duration-300',
        scrolled && 'fixed bg-white shadow-[4px_0_20px_-5px_rgba(0,0,0,.2)]',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center">
        <a
          href="#home"
          className={cn(
            'font-sans text-base font-bold tracking-wide text-white uppercase',
            scrolled && 'text-brand',
          )}
        >
          {BRAND}
        </a>

        {/* Desktop nav — hidden ≤991px. */}
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
        </nav>

        {/* Mobile toggle — indigo hamburger, hidden on desktop. */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="ml-auto cursor-pointer text-brand lg:hidden"
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
              className="cursor-pointer text-[#212529]"
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
                  'block border-b border-[#ced4da] py-3 text-[15px] text-[#212529] transition-colors hover:text-brand',
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
