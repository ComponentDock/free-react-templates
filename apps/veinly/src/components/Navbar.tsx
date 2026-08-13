import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brand, navLinks } from '../data'

interface NavbarProps {
  onOpenQuote: () => void
}

/** Sticky top navbar: coral "Veinly" brand left, 7 anchor links centered,
 *  solid coral "Get Quote" button + hamburger right. Transparent over the
 *  hero; on scroll it turns white with a shadow and the brand turns coral.
 *  The hamburger opens an off-canvas mobile menu with the same links. */
export function Navbar({ onOpenQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      data-testid="navbar"
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors',
        scrolled ? 'bg-white shadow-[4px_0_20px_-5px_rgba(0,0,0,0.2)]' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-4 py-4">
        <a href="#home-section" className="text-xl font-black uppercase leading-none tracking-wide">
          <span className={cn('transition-colors', scrolled || open ? 'text-brand' : 'text-white')}>
            {brand.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="mx-[15px] inline-block border-b-2 border-transparent py-5 text-black transition-colors hover:border-brand hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onOpenQuote}
            className="rounded bg-brand px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-600"
          >
            Get Quote
          </button>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="text-black lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="fixed inset-0 top-0 z-40 flex flex-col bg-white lg:hidden"
        >
          <div className="flex items-center justify-between px-4 py-4">
            <span className="text-xl font-black uppercase tracking-wide text-brand">
              {brand.name}
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-black"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-xl font-bold text-black transition-colors hover:text-brand"
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
