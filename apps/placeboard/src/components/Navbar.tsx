import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a
            href="/"
            className={cn(
              'text-xl font-bold uppercase tracking-widest',
              scrolled ? 'text-heading' : 'text-white',
            )}
          >
            Placeboard
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                scrolled ? 'text-heading' : 'text-white',
              )}
            >
              Home
            </a>
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={cn(
                  'flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary',
                  scrolled ? 'text-heading' : 'text-white',
                )}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Destination
                <ChevronDown className="h-4 w-4" />
              </button>
              {dropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 w-40 rounded bg-white py-2 shadow-lg">
                  {['Places', 'Hotels', 'Restaurants'].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="block px-4 py-2 text-sm text-body hover:bg-gray-100"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <a
              href="#blog"
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                scrolled ? 'text-heading' : 'text-white',
              )}
            >
              Blog
            </a>
            <a
              href="#about"
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                scrolled ? 'text-heading' : 'text-white',
              )}
            >
              About
            </a>
            <a
              href="#contact"
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                scrolled ? 'text-heading' : 'text-white',
              )}
            >
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className={cn('h-6 w-6', scrolled ? 'text-heading' : 'text-white')} />
            ) : (
              <Menu className={cn('h-6 w-6', scrolled ? 'text-heading' : 'text-white')} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-white/20 py-4 md:hidden">
            <ul className="flex flex-col gap-3">
              {['Home', 'Destination', 'Blog', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                    className={cn(
                      'block text-sm font-medium',
                      scrolled ? 'text-heading' : 'text-white',
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
