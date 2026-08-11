import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_CTA_LABEL, NAV_LINKS } from '../data'

/* nav.navbar.ftco_navbar — transparent, absolute, top 50px below the info
   bar (z-index 3), brand left + right-aligned white links (active =
   #ffa323) + orange "Book a table" pill. Scrolled (.scrolled/.awake):
   fixed to the top, white bg, shadow, links turn black, active stays
   orange. ≤991px: solid dark bar with a "Menu" toggle. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = (active?: boolean) =>
    cn(
      'inline-block px-5 py-2 text-[14px] font-normal text-white transition-colors',
      'max-lg:px-0 max-lg:text-white',
      scrolled && 'text-ink',
      active && 'text-brand',
    )

  return (
    <header
      className={cn(
        // ≤991px: solid dark bar (source .bg-dark mobile override); desktop
        // transparent until scrolled, then fixed white with shadow.
        'absolute inset-x-0 top-[50px] z-30 max-lg:bg-ink transition-all duration-300',
        scrolled && 'fixed top-0 shadow-[0_0_10px_0_rgba(0,0,0,.1)] max-lg:bg-ink lg:bg-white',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center px-4 py-5">
        <a href="#home" className="text-[22px] font-bold text-white max-lg:text-white">
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
          <a
            href="#reservation"
            aria-label={NAV_CTA_LABEL}
            className="ml-2 inline-block rounded-[5px] bg-brand px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#f5960a]"
          >
            {NAV_CTA_LABEL}
          </a>
        </nav>

        {/* Mobile toggle — hidden on desktop. */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
          className="ml-auto flex cursor-pointer items-center gap-1.5 border border-white/40 px-3 py-1.5 text-white lg:hidden"
        >
          <Menu aria-hidden="true" className="h-4 w-4" />
          <span className="text-[13px] uppercase tracking-[.1em]">Menu</span>
        </button>
      </div>

      {/* Mobile panel — dark bar links, expanded inline. */}
      {mobileOpen && (
        <nav aria-label="Mobile" className="bg-ink/95 backdrop-blur lg:hidden">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={link.active ? 'page' : undefined}
                  className={cn(
                    'block border-t border-white/10 px-5 py-3 text-[15px] text-white',
                    link.active && 'text-brand',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#reservation"
                onClick={() => setMobileOpen(false)}
                className="block border-t border-white/10 px-5 py-3 text-[15px] font-medium text-brand"
              >
                {NAV_CTA_LABEL}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
