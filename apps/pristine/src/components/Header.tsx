import { useEffect, useState } from 'react'
import { Menu, Sparkles, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Project', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const

/** White navigation bar, sticky on scroll with a subtle shadow. Logo left,
 *  nav links + blue "Request Free Quote" pill right; hamburger menu on
 *  small viewports. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-white transition-shadow duration-300',
        scrolled && 'shadow-[0_10px_15px_rgba(25,25,25,0.1)]',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Pristine home">
          <Sparkles className="h-6 w-6 text-brand" aria-hidden="true" />
          <span className="text-2xl font-semibold uppercase tracking-wide text-navy">Pristine</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-navy transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-blue-pill">
            Request Free Quote
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
          className="rounded-lg p-2 text-navy transition-colors hover:bg-gray-100 lg:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          'border-t border-gray-100 bg-white px-4 py-4 lg:hidden',
          menuOpen ? 'block' : 'hidden',
        )}
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base font-medium text-navy transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-blue-pill mt-2 mb-2 w-fit"
            >
              Request Free Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
