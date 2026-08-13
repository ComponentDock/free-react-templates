import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brand, navLinks } from '../data'

/** Fixed top navbar: brand "Fortis." left, hamburger-only navigation (the
 *  reference shows NO inline desktop link bar). The toggler opens a
 *  full-screen white menu with the five anchor links; on scroll the bar
 *  turns solid white with a shadow, the logo turns brand green and the
 *  links black (reference sticky behavior). */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const light = scrolled || open

  return (
    <header
      data-testid="navbar"
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors',
        scrolled ? 'bg-white shadow-[4px_0_20px_-5px_rgba(0,0,0,0.2)]' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 md:px-8 md:py-5">
        <a
          href="#home"
          className={cn(
            'text-[27px] font-bold leading-none transition-colors',
            light ? 'text-brand' : 'text-white',
          )}
        >
          {brand.name}.
        </a>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Toggle menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={cn('rounded p-2 transition-colors', light ? 'text-black' : 'text-white')}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center bg-white">
          <nav aria-label="Mobile" className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-bold text-black transition-colors hover:text-brand"
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
