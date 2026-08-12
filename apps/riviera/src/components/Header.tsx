import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS, PAGES_DROPDOWN, TAGLINE } from '../data'

/* Header — a dark charcoal bar overlaying the hero: text logo ("Riviera"
   over a "Hotel & Spa" tagline), white uppercase nav with the active item
   in peach under a peach dot, a Pages hover dropdown and a peach
   reservation CTA; on mobile the nav collapses into a hamburger menu. */
export function Header() {
  const [open, setOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header
      aria-label="Site header"
      className="absolute inset-x-0 top-0 z-[999] bg-header px-[30px] pb-6 pt-[30px]"
    >
      <div className="flex items-center justify-between">
        <a href="#home" aria-label={BRAND} className="block leading-none">
          <span className="block text-[28px] font-bold uppercase tracking-wide text-white">
            {BRAND}
          </span>
          <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.3em] text-white/60">
            {TAGLINE}
          </span>
        </a>

        <div className="flex items-center gap-[30px]">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-[50px]">
              {NAV_LINKS.map((label) => {
                const isPages = label === 'Pages'
                const isHome = label === 'Home'
                return (
                  <li
                    key={label}
                    className="relative"
                    onMouseEnter={isPages ? () => setPagesOpen(true) : undefined}
                    onMouseLeave={isPages ? () => setPagesOpen(false) : undefined}
                    onFocus={isPages ? () => setPagesOpen(true) : undefined}
                    onBlur={
                      isPages
                        ? (event) => {
                            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                              setPagesOpen(false)
                            }
                          }
                        : undefined
                    }
                  >
                    <a
                      href={isHome ? '#home' : '#'}
                      aria-current={isHome ? 'page' : undefined}
                      aria-haspopup={isPages ? 'true' : undefined}
                      aria-expanded={isPages ? pagesOpen : undefined}
                      className={cn(
                        'relative inline-block pb-1 text-base font-medium tracking-[0.5px] text-white transition-colors hover:text-brand',
                        'after:absolute after:bottom-0 after:left-1/2 after:h-[5px] after:w-[5px] after:-translate-x-1/2 after:rounded-full after:bg-brand after:content-[""]',
                        isHome
                          ? 'text-brand after:opacity-100'
                          : 'after:opacity-0 hover:after:opacity-100',
                      )}
                    >
                      {label}
                      {isPages && (
                        <ChevronDown aria-hidden="true" className="ml-1 inline h-4 w-4" />
                      )}
                    </a>
                    {isPages && pagesOpen && (
                      <ul className="absolute left-0 top-full z-50 w-[220px] bg-white py-2 shadow-lg">
                        {PAGES_DROPDOWN.map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              className="block px-5 py-2 text-base font-semibold text-ink transition-colors hover:bg-brand hover:text-white"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          <ButtonLink
            href="#reservation"
            className="hidden h-auto rounded-none bg-brand px-[38px] py-[18px] text-base font-normal text-white hover:opacity-90 lg:inline-flex"
          >
            Make a Reservation
          </ButtonLink>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="text-white lg:hidden"
          >
            {open ? <X aria-hidden="true" size={28} /> : <Menu aria-hidden="true" size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          id="mobile-menu"
          className="mt-6 border-t border-white/10 pt-4 lg:hidden"
        >
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a
                  href={label === 'Home' ? '#home' : '#'}
                  onClick={close}
                  className="text-base font-medium text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink
            href="#reservation"
            onClick={close}
            className="mt-4 rounded-none bg-brand px-[38px] py-[18px] text-base font-normal text-white lg:hidden"
          >
            Make a Reservation
          </ButtonLink>
        </nav>
      )}
    </header>
  )
}
