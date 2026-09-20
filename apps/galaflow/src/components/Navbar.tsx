import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = ['Home', 'About', 'Programs', 'Speakers', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-colors',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a
          href="#"
          className={cn(
            'text-2xl font-bold font-[family-name:var(--font-heading)] uppercase tracking-wide',
            scrolled ? 'text-[#302072]' : 'text-white',
          )}
        >
          GalaFlow
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={cn(
                  'text-sm font-medium font-[family-name:var(--font-sans)] transition',
                  scrolled
                    ? 'text-[#79709D] hover:text-[#302072]'
                    : 'text-white/80 hover:text-white',
                )}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#book"
          className={cn(
            'hidden rounded-[5px] px-6 py-2 text-sm font-semibold font-[family-name:var(--font-sans)] transition md:inline-block',
            'bg-[#302072] text-[#FDE449] hover:bg-[#1e1450]',
          )}
        >
          Buy Ticket
        </a>

        <button
          className={cn('md:hidden', scrolled ? 'text-[#302072]' : 'text-white')}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <ul className="flex flex-col gap-4 border-t bg-white px-4 py-4 md:hidden">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block text-sm font-medium text-[#79709D] transition hover:text-[#302072]"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#book"
              className="block rounded-[5px] bg-[#302072] px-6 py-2 text-center text-sm font-semibold text-[#FDE449]"
              onClick={() => setOpen(false)}
            >
              Buy Ticket
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}
