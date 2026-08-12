import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
] as const

const utilityLinks = ['Webmail', 'Chat', 'Login'] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors',
        scrolled ? 'border-b border-[#b334fa] bg-navy-900' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-baseline gap-1" aria-label="Serverly home">
          <span className="font-display text-[28px] font-bold tracking-wide text-white">
            <span className="uppercase text-royal-400">S</span>erverly
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
                link.label === 'Home' ? 'text-white' : 'text-white/70 hover:text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-5">
            {utilityLinks.map((label) => (
              <li key={label}>
                <a
                  href="#contact"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:652345322211"
            className="inline-flex h-[43px] items-center gap-2 rounded-[22px] bg-gradient-to-r from-brand-400 to-brand-500 px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            652-345 3222 11
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close mobile menu' : 'Open mobile menu'}
          className="flex h-10 w-10 items-center justify-center rounded text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-50 bg-navy-900 lg:hidden">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6">
            <span className="font-display text-[28px] font-bold tracking-wide text-white">
              <span className="uppercase text-royal-400">S</span>erverly
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-col px-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-lg font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:652345322211"
              className="mt-6 inline-flex h-[43px] items-center justify-center gap-2 self-start rounded-[22px] bg-gradient-to-r from-brand-400 to-brand-500 px-5 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              652-345 3222 11
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
