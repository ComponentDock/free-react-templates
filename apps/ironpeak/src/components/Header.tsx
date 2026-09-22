import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Classes', href: '#classes' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-ink/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-sans text-2xl font-extrabold tracking-wider text-white">
          I<span className="text-brand">ronpeak</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-light capitalize text-white transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="#contact"
            className="bg-brand px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-ink hover:bg-brand-dark"
          >
            Become a Member
          </ButtonLink>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="fixed inset-0 top-0 z-40 flex flex-col bg-ink-dark/95 pt-20 lg:hidden"
        >
          <div className="flex justify-end px-4">
            <button
              type="button"
              aria-label="Close mobile menu"
              className="text-white"
              onClick={() => setMobileOpen(false)}
            >
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col items-center gap-6 py-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xl font-light capitalize text-white transition-colors hover:text-brand"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-brand-dark"
              onClick={() => setMobileOpen(false)}
            >
              Become a Member
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
