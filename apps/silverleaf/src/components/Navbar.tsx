import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FacebookIcon, TwitterIcon, LinkedinIcon } from './social-icons'

const navLinks = ['Home', 'Services', 'Testimonials', 'Blog', 'About', 'Contact']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-white transition-colors dark:text-white"
          style={scrolled ? { color: '#000' } : undefined}
        >
          Silverleaf<span className="text-brand">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={cn(
                    'text-sm font-semibold uppercase tracking-wide transition-colors',
                    scrolled ? 'text-gray-900 hover:text-brand' : 'text-white hover:text-white/80',
                  )}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-full transition-colors',
                scrolled ? 'text-gray-600 hover:text-brand' : 'text-white/80 hover:text-white',
              )}
            >
              <FacebookIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-full transition-colors',
                scrolled ? 'text-gray-600 hover:text-brand' : 'text-white/80 hover:text-white',
              )}
            >
              <TwitterIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-full transition-colors',
                scrolled ? 'text-gray-600 hover:text-brand' : 'text-white/80 hover:text-white',
              )}
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-white px-4 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-semibold uppercase tracking-wide text-gray-900 hover:text-brand"
                  onClick={() => setMobileOpen(false)}
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
