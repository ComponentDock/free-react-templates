import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, siteName } from '../data'
import { cn } from '@free-react-templates/ui'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-coal',
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6"
      >
        <a href="#top" className={cn('text-xl font-bold', scrolled ? 'text-ink' : 'text-white')}>
          {siteName}.
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#top"
              className={cn(
                'text-lg transition-colors hover:text-brand',
                scrolled ? 'text-ink/80' : 'text-white/80',
              )}
            >
              {link}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={cn('md:hidden', scrolled ? 'text-ink' : 'text-white')}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-coal px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#top"
              onClick={() => setOpen(false)}
              className="block py-2 text-lg text-white/80 hover:text-brand"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
