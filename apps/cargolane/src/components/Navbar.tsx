import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV_LINKS } from '../data/content'
import { isScrolled, resolveActiveId } from '../lib/nav'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState(NAV_LINKS[0]!.id)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(isScrolled(window.scrollY))
      const ids = NAV_LINKS.map((link) => link.id)
      const tops = ids.map((id) => {
        const el = document.getElementById(id)
        return el ? el.getBoundingClientRect().top + window.scrollY : Number.POSITIVE_INFINITY
      })
      setActiveId(resolveActiveId(ids, tops, window.scrollY))
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'absolute inset-x-0 top-0 z-50 transition-colors',
        scrolled && 'fixed bg-white shadow-[0_4px_15px_-5px_rgba(0,0,0,0.1)]',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4"
      >
        <a
          href="#home"
          className={cn(
            'text-2xl font-bold uppercase tracking-[0.2em]',
            scrolled ? 'text-primary' : 'text-white',
          )}
        >
          Cargolane
        </a>
        <ul className="hidden items-center gap-8 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={activeId === link.id ? 'true' : undefined}
                className={cn(
                  'text-[14px] uppercase tracking-[0.1em] transition-colors',
                  activeId === link.id
                    ? 'text-primary'
                    : scrolled
                      ? 'text-black hover:text-primary'
                      : 'text-white hover:text-primary',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={cn('xl:hidden', scrolled ? 'text-black' : 'text-white')}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-black/10 bg-white px-4 pb-4 xl:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  'block py-2 text-[14px] uppercase tracking-[0.1em]',
                  activeId === link.id ? 'text-primary' : 'text-black',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
