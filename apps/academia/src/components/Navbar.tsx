import { useEffect, useState } from 'react'
import { BookOpen, Menu, Phone, User, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV_LINKS, PHONE_DISPLAY } from '../data'

/* Header (source: header.header-area — absolute transparent bar over the
   hero; .sticky variant turns white with a soft shadow on scroll). Desktop
   menu is centered; the right side holds the Log in link and the orange
   phone pill. The phone CTA href is computed at runtime (no literal URI in
   source). */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const phoneHref = 'tel:' + PHONE_DISPLAY.replace(/[^\d+]/g, '')

  return (
    <nav
      data-variant={scrolled ? 'solid' : 'transparent'}
      className={cn(
        'fixed inset-x-0 top-0 z-50 px-[15px] py-[24px] transition-all duration-300',
        scrolled ? 'bg-white shadow-[0_10px_30px_0_rgba(0,0,0,0.08)]' : 'bg-transparent',
      )}
      aria-label="Main"
    >
      <div className="mx-auto flex max-w-[1140px] items-center justify-between">
        {/* Logo wordmark (source: a.logo — open-book icon + teal wordmark). */}
        <a href="#home" className="flex items-center gap-2 text-[24px] font-bold text-brand">
          <BookOpen className="h-6 w-6" aria-hidden="true" />
          Academia
        </a>

        {/* Desktop menu (source: nav.main-menu, centered white links). */}
        <ul className="hidden items-center lg:flex">
          {NAV_LINKS.map((link, index) => (
            <li key={link.label} className="relative">
              <a
                href={link.href}
                aria-current={index === 0 ? 'true' : undefined}
                className={cn(
                  'relative block px-4 py-2 text-[16px] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform hover:after:scale-x-100',
                  index === 0 && 'after:scale-x-100',
                  scrolled ? 'text-ink hover:text-brand' : 'text-white hover:text-brand',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions (source: div.log_chat_area — Log in + phone pill). */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="#contact"
            className={cn(
              'flex items-center gap-2 text-[16px] transition-colors',
              scrolled ? 'text-ink hover:text-brand' : 'text-white hover:text-brand',
            )}
          >
            <User className="h-4 w-4" aria-hidden="true" />
            Log in
          </a>
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-sun px-8 py-3 text-[16px] font-medium text-white transition-colors hover:bg-sun/90"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </div>

        {/* Mobile burger toggle. */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="rounded-md p-2 text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel (source: collapsed stacked list on dark). */}
      {open && (
        <div className="absolute inset-x-0 top-[74px] border-t border-white/10 bg-ink px-[15px] py-4 shadow-lg lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-4 py-2 text-[16px] text-white transition-colors hover:bg-white/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
