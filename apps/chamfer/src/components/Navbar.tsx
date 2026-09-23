import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = ['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact'] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-dark-navy/95 shadow-lg' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="font-display text-2xl font-bold uppercase tracking-wider text-white"
        >
          Chamfer<span className="text-brand-red">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-display text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-brand-red"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-none bg-brand-red px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-red-dark"
          >
            Contact Us
          </a>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 bg-dark-navy/95 px-4 pb-6 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block font-display text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-brand-red"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
