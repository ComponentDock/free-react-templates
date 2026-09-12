import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Loan', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    {
      label: 'Blog',
      href: '#blog',
      children: [
        { label: 'Blog Grid', href: '#blog' },
        { label: 'Blog Single', href: '#blog' },
      ],
    },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-blue shadow-lg' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#home" className="text-2xl font-bold text-white">
          Capitex
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              <a
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white"
              >
                {link.label}
                {link.children && <ChevronDown className="h-3 w-3" />}
              </a>
              {link.children && (
                <ul className="absolute top-full left-0 hidden min-w-[160px] rounded bg-white py-2 shadow-lg group-hover:block">
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="block px-4 py-2 text-sm text-body hover:bg-gray-bg"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <a
          href="#services"
          className="hidden rounded bg-brand px-5 py-2 text-sm font-semibold text-navy uppercase transition hover:bg-brand-hover lg:inline-block"
        >
          Apply For Loan
        </a>

        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-blue px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm text-white/90"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#services"
            className="mt-2 block rounded bg-brand px-5 py-2 text-center text-sm font-semibold text-navy uppercase"
            onClick={() => setMobileOpen(false)}
          >
            Apply For Loan
          </a>
        </div>
      )}
    </header>
  )
}
