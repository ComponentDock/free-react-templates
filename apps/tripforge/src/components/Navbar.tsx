import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_CTA, NAV_LINKS } from '../data/content'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      role="banner"
      data-scrolled={scrolled}
      className={cn(
        'absolute inset-x-0 top-5 z-50 transition-colors duration-300',
        scrolled ? 'bg-ink' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-bold text-white">
          {BRAND.name}
          <span className="text-coral">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              aria-current={index === 0 ? 'page' : undefined}
              className="px-4 py-4 text-sm text-white transition-colors hover:text-coral"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#add-listing" className="nav-cta hidden lg:inline-flex">
            {NAV_CTA}
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white lg:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          role="region"
          aria-label="Mobile navigation"
          className="bg-ink px-6 pb-6 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 py-3 text-white"
            >
              {link}
            </a>
          ))}
          <a href="#add-listing" className="nav-cta mt-4 inline-flex">
            {NAV_CTA}
          </a>
        </div>
      ) : null}
    </header>
  )
}
