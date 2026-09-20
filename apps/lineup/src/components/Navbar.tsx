import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = ['Home', 'About us', 'Events', 'News', 'Contact']

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-colors duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight text-[var(--color-heading)]">
          Lineup
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={cn(
                'text-sm font-medium transition-colors hover:text-[var(--color-primary-start)]',
                scrolled ? 'text-[var(--color-body)]' : 'text-white',
              )}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden rounded-full bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] px-8 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 lg:inline-block"
          >
            Buy Tickets
          </a>
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className={cn('h-6 w-6', scrolled ? 'text-[var(--color-body)]' : 'text-white')} />
            ) : (
              <Menu
                className={cn('h-6 w-6', scrolled ? 'text-[var(--color-body)]' : 'text-white')}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="border-t border-gray-200 bg-white lg:hidden">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block text-sm font-medium text-[var(--color-body)] hover:text-[var(--color-primary-start)]"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="inline-block rounded-full bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] px-8 py-3 text-sm font-bold text-white"
              >
                Buy Tickets
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
