import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { headerPhone, navLinks, siteName, utilityLinks } from '../data'

/* The original Bhost header is transparent over the dark hero and turns
   dark navy (#020c22) with a purple bottom border once the page scrolls. */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const phoneHref = 'tel:' + headerPhone.replace(/[^\d+]/g, '')

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'border-b border-[#b334fa] bg-navy-900' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-[28px] font-bold text-white" aria-label="Serverly home">
          <span className="uppercase text-logo-accent">S</span>
          {siteName.replace(/^S/, '')}
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm font-medium text-white transition-colors hover:text-brand-500',
                index === 0 && 'text-brand-500',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop utilities */}
        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center gap-4">
            {utilityLinks.map((link) => (
              <a
                key={link}
                href="#home"
                className="text-sm font-medium text-white transition-colors hover:text-brand-500"
              >
                {link}
              </a>
            ))}
          </div>
          <a
            href={phoneHref}
            className="bg-brand-gradient flex h-[43px] items-center gap-2 rounded-[22px] px-5 text-base font-medium text-white"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {headerPhone}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded text-white lg:hidden"
        >
          <Menu className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      {/* Full-screen mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy-900"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <nav aria-label="Mobile" className="flex flex-col items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-white transition-colors hover:text-brand-500"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={phoneHref}
            onClick={() => setOpen(false)}
            className="bg-brand-gradient mt-10 flex items-center gap-2 rounded-[22px] px-6 py-3 text-base font-medium text-white"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {headerPhone}
          </a>
        </div>
      )}
    </header>
  )
}
