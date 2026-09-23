import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Button } from '@free-react-templates/ui'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Browse Job', href: '#browse' },
    { label: 'Pages', href: '#pages', hasDropdown: true },
    { label: 'Blog', href: '#blog', hasDropdown: true },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={cn('sticky top-0 z-50 bg-white transition-shadow', scrolled && 'shadow-md')}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-brand">
          JobNest
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-sm font-medium text-text-primary hover:text-brand"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <a href="#login" className="text-sm font-medium text-text-primary hover:text-brand">
            Log in
          </a>
          <Button variant="primary" size="sm" className="bg-brand text-white hover:bg-brand-hover">
            Post a Job
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="text-text-primary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-border-light px-4 pb-4 md:hidden"
        >
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-sm font-medium text-text-primary hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#login"
                className="block text-sm font-medium text-text-primary hover:text-brand"
              >
                Log in
              </a>
            </li>
            <li>
              <Button
                variant="primary"
                size="sm"
                className="w-full bg-brand text-white hover:bg-brand-hover"
              >
                Post a Job
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
