import { useEffect, useState } from 'react'
import { Flower2, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = ['Home', 'Classes', 'Schedule', 'About', 'Blog', 'Contact'] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]' : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          'mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8',
          open ? 'bg-night-900 text-white' : '',
        )}
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Shanti home">
          <Flower2
            className={cn('h-7 w-7', scrolled ? 'text-mauve-500' : 'text-mauve-500')}
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span
            className={cn(
              'text-[22px] font-light tracking-[0.12em] uppercase',
              scrolled ? 'text-black' : 'text-black',
            )}
          >
            Shanti
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center lg:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={cn(
                  'relative px-5 py-6 text-sm font-light transition-colors',
                  link === 'Home'
                    ? 'font-normal text-mauve-500 after:absolute after:right-5 after:bottom-4 after:left-5 after:h-0.5 after:bg-mauve-500 after:content-[""]'
                    : 'text-black hover:text-mauve-500',
                )}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className={cn(
            'flex items-center gap-2 rounded p-2 transition-colors lg:hidden',
            open ? 'text-white' : scrolled ? 'text-black' : 'text-black',
          )}
        >
          <span className="text-sm font-light tracking-widest uppercase">Menu</span>
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div id="mobile-menu" className="bg-night-900 px-4 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block border-b border-white/10 px-2 py-3 text-sm transition-colors',
                    link === 'Home'
                      ? 'font-normal text-mauve-500'
                      : 'text-white/70 hover:text-white',
                  )}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
