import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

export function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'absolute inset-x-0 top-0 z-[1999] transition-colors duration-300',
        sticky ? 'bg-white shadow-[4px_0_20px_-5px_rgba(0,0,0,0.2)]' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-6">
        <a
          href="#home-section"
          className={cn(
            'text-[1.3rem] font-black tracking-wide transition-colors',
            sticky ? 'text-black' : 'text-white',
          )}
        >
          Pumply
        </a>
        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'px-5 py-[5px] transition-colors hover:text-primary',
                sticky ? 'text-black' : 'text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#contact-section"
            className="hidden rounded-[4px] border border-primary px-5 py-2.5 text-[0.8rem] font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-white lg:inline-block"
          >
            Contact
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className={cn('lg:hidden', sticky ? 'text-black' : 'text-white')}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="bg-white px-4 pb-6 pt-2 shadow-lg lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-2 py-3 font-semibold text-black transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact-section"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-[4px] border border-primary px-5 py-2.5 text-center text-[0.8rem] font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}
