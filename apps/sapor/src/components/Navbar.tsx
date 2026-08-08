import { useEffect, useState } from 'react'
import { Menu, UtensilsCrossed, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#reservations' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      data-variant={scrolled ? 'solid' : 'transparent'}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm' : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-3" aria-label="Sapor home">
          <span
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white transition-colors',
              scrolled ? 'bg-primary-600' : 'bg-primary-600/90',
            )}
          >
            <UtensilsCrossed className="h-5 w-5" aria-hidden="true" />
          </span>
          <span
            className={cn(
              'font-serif text-xl font-bold tracking-tight transition-colors',
              scrolled ? 'text-gray-900' : 'text-white',
            )}
          >
            Sapor
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
                scrolled
                  ? 'text-gray-600 hover:text-primary-600'
                  : 'text-white/90 hover:text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <ButtonLink href="#reservations" className="hidden h-auto px-5 py-2.5 lg:inline-flex">
            Reserve a Table
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
            className={cn(
              'rounded-lg p-2 transition-colors lg:hidden',
              scrolled ? 'text-gray-500 hover:bg-gray-100' : 'text-white hover:bg-white/10',
            )}
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'border-t border-gray-100 bg-white px-4 py-4 lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-gray-900 transition-colors hover:text-primary-600"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-4">
          <ButtonLink href="#reservations" onClick={() => setOpen(false)} className="w-full">
            Reserve a Table
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}
