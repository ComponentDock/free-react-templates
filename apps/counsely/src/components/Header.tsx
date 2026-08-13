import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brand, navLinks } from '../data'

/** Transparent-over-hero navbar: "COUNSELY" brand with tagline, seven anchor
 *  links, a gold-outline "Free Consultation" CTA pill, and a mobile menu.
 *  On scroll it turns solid white with a shadow and black links. */
export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={
        scrolled
          ? 'fixed inset-x-0 top-0 z-50 bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]'
          : 'fixed inset-x-0 top-0 z-50 bg-transparent'
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="leading-tight">
          <span
            className={scrolled ? 'text-xl font-bold text-ink' : 'text-xl font-bold text-white'}
          >
            {brand.name}
          </span>
          <span className="block text-xs font-medium text-brand">{brand.tagline}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? 'px-5 py-2 text-[15px] font-medium text-brand'
                  : scrolled
                    ? 'px-5 py-2 text-[15px] font-medium text-ink transition-colors hover:text-brand'
                    : 'px-5 py-2 text-[15px] font-medium text-white transition-colors hover:text-brand'
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={
              scrolled
                ? 'ml-3 rounded border border-brand bg-brand px-[18px] py-2 text-[15px] font-medium text-white transition-colors hover:bg-brand/90'
                : 'ml-3 rounded border border-brand px-[18px] py-2 text-[15px] font-medium text-white transition-colors hover:bg-brand'
            }
          >
            Free Consultation
          </a>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="counsely-mobile-menu"
          onClick={() => setOpen((current) => !current)}
          className="rounded p-2 text-white hover:text-brand lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="counsely-mobile-menu"
          aria-label="Mobile"
          className="border-t border-white/10 bg-ink px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    link.active
                      ? 'block py-1 text-sm font-medium text-brand'
                      : 'block py-1 text-sm font-medium text-white/80 hover:text-brand'
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded border border-brand px-4 py-2 text-sm font-medium text-brand"
              >
                Free Consultation
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
