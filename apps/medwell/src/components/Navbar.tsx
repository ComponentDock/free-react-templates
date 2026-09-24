import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Department', href: '#services' },
  { label: 'Doctors', href: '#team' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      aria-label="Primary"
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className={cn(
            'font-heading text-2xl font-bold',
            scrolled ? 'text-heading' : 'text-white',
          )}
        >
          Medwell
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'text-sm font-medium uppercase tracking-wide transition-colors',
                  scrolled ? 'text-heading hover:text-brand-500' : 'text-white/90 hover:text-white',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={cn('md:hidden', scrolled ? 'text-heading' : 'text-white')}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <div id="mobile-menu" className={cn('md:hidden', open ? 'block' : 'hidden')}>
        <ul className="space-y-1 bg-white px-4 pb-4 shadow-md">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2 text-sm font-medium uppercase tracking-wide text-heading hover:bg-brand-50 hover:text-brand-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
