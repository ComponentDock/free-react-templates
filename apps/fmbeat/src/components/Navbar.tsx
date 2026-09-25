import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

interface NavbarProps {
  onToggleDark: () => void
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  )
}

function SoundCloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M1 18V13h1v5zm2 0V11h1v7zm2 0V9h1v9zm2 0V11h1v7zm2 0V8h1v10zm2-1v-8h1v8zm2 1V9h1v9zm2-2V8h1v8zm2 0V7h1v9zm3-3c0-2.2-1.8-4-4-4-.7 0-1.4.2-2 .5V6.5C14.5 4 12.3 2 9.5 2 6.5 2 4 4.1 4 7v.5C2.6 8.1 1.5 9.5 1.5 11c0 1.8 1.4 3.2 3.2 3.2h11.6c2.2 0 4-1.8 4-4 0-1.8-1.2-3.3-2.8-3.8.1-.3.1-.6.1-.9 0-2.8-2.2-5-5-5" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
      <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="white" />
    </svg>
  )
}

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Charts', href: '#charts' },
  { label: 'DJs', href: '#djs' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'Twitter', icon: TwitterIcon, href: '#' },
  { label: 'SoundCloud', icon: SoundCloudIcon, href: '#' },
  { label: 'Instagram', icon: InstagramIcon, href: '#' },
  { label: 'Facebook', icon: FacebookIcon, href: '#' },
  { label: 'YouTube', icon: YoutubeIcon, href: '#' },
]

export function Navbar({ onToggleDark }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav data-testid="navbar" className="bg-brand-dark border-b border-white/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-brand-yellow font-heading tracking-wide">
          Fmbeat
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white/80 hover:text-brand-yellow transition-colors text-sm font-medium uppercase tracking-wider"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social icons + dark toggle */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="text-white/60 hover:text-brand-yellow transition-colors"
            >
              <s.icon />
            </a>
          ))}
          <button
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            className="text-white/60 hover:text-brand-yellow transition-colors ml-2"
          >
            <Sun size={18} className="hidden dark:block" />
            <Moon size={18} className="block dark:hidden" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            className="text-white/60 hover:text-brand-yellow transition-colors"
          >
            <Sun size={18} className="hidden dark:block" />
            <Moon size={18} className="block dark:hidden" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="text-white/80 hover:text-brand-yellow transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-dark border-t border-white/10 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-white/80 hover:text-brand-yellow transition-colors text-sm font-medium uppercase tracking-wider py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 pt-4 border-t border-white/10 mt-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-white/60 hover:text-brand-yellow transition-colors"
              >
                <s.icon />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
