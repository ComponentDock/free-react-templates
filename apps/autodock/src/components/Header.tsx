import { useEffect, useState } from 'react'
import { Car, Clock, MapPin, Menu, Phone, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Cars', href: '#cars' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  )
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="currentColor"
        fontFamily="sans-serif"
      >
        Bē
      </text>
    </svg>
  )
}

function DribbbleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8.5 3.5c4 5 6.5 9.5 7.5 17M21.5 10c-6-.5-11.5 1-16 4.5M3 10c5.5.5 12-1 16.5-4.5" />
    </svg>
  )
}

const SOCIALS = [
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'LinkedIn', icon: LinkedInIcon },
  { label: 'Behance', icon: BehanceIcon },
  { label: 'Dribbble', icon: DribbbleIcon },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors',
        scrolled ? 'bg-carbon shadow-lg' : 'bg-transparent',
      )}
    >
      <div className="bg-carbon">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs text-white">
          <div className="hidden items-center gap-6 md:flex">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
              802/2, Mirpur, Dhaka
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              +1 800 345 678
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-brand" aria-hidden="true" />
              Mon-Fri 09.00 - 17.00
            </span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="text-white transition-colors hover:text-brand"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav aria-label="Primary" className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#home" className="flex items-center gap-2">
            <Car className="h-8 w-8 text-brand" aria-hidden="true" />
            <span className="text-2xl font-extrabold uppercase tracking-wide text-white">
              Autodock
            </span>
          </a>
          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    'text-sm font-bold uppercase transition-colors hover:text-brand',
                    i === 0 ? 'text-brand' : 'text-white',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center bg-brand text-carbon lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <nav aria-label="Mobile" className="border-b border-white/10 bg-carbon lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-sm font-bold uppercase text-white transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
