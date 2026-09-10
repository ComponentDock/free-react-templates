import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = ['Home', 'About', 'Portfolio', 'Services', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
      )}
      role="banner"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#" className="text-xl font-bold text-ink">
          Brush<span className="text-brand-blue">mark</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-pink',
                  scrolled ? 'text-ink' : 'text-white',
                )}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <X className={scrolled ? 'text-ink' : 'text-white'} size={24} />
          ) : (
            <Menu className={scrolled ? 'text-ink' : 'text-white'} size={24} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block py-2 text-sm font-medium text-ink transition-colors hover:text-brand-pink"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
