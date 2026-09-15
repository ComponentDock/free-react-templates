import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Donate', href: '#donate' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span
              className={cn(
                'text-2xl font-bold font-[family-name:var(--font-heading)]',
                scrolled ? 'text-ink' : 'text-white',
              )}
            >
              GivingHeart
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  'text-sm font-semibold tracking-wide transition-colors hover:text-primary',
                  scrolled ? 'text-ink' : 'text-white',
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              className="rounded-[25px] bg-gradient-to-r from-[#f40f68] via-[#f86e3d] to-[#fbcd11] px-6 py-2.5 text-sm font-bold text-white transition opacity-90 hover:opacity-100"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? (
              <X className={cn('h-6 w-6', scrolled ? 'text-ink' : 'text-white')} />
            ) : (
              <Menu className={cn('h-6 w-6', scrolled ? 'text-ink' : 'text-white')} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-semibold text-ink hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              className="block rounded-[25px] bg-gradient-to-r from-[#f40f68] via-[#f86e3d] to-[#fbcd11] px-6 py-2.5 text-center text-sm font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
