import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Booking', href: '#booking' },
  { label: 'Packages', href: '#package' },
  { label: 'Contact', href: '#contact' },
] as const

const LINK_CLASS =
  'text-[12px] font-medium text-black uppercase transition-colors duration-300 hover:text-aqua'

/* Gradient triangle brand mark (purple apex → teal base) with a white inner
   notch. Original mark — the demo screenshot's wordmark is never reused. */
function LogoMark() {
  return (
    <svg viewBox="0 0 32 28" className="h-[22px] w-[24px]" aria-hidden="true">
      <defs>
        <linearGradient id="wanderport-brand-mark" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#9a52fd" />
          <stop offset="100%" stopColor="#57ffed" />
        </linearGradient>
      </defs>
      <path d="M16 1 31 27H1z" fill="url(#wanderport-brand-mark)" />
      <path d="M16 11l6.5 11h-13z" fill="#ffffff" />
    </svg>
  )
}

/* White bar above the hero: brand lockup left, a hamburger that reveals the
   four uppercase anchor links (stacked panel on small screens, inline row on
   large ones). */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-20 bg-white px-0 py-[20px] shadow-[0_18px_30px_-24px_rgba(158,158,158,0.9)]">
      <div className="mx-auto flex max-w-[1170px] items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-[10px]">
          <LogoMark />
          <span className="text-[20px] leading-none font-semibold text-ink">wanderport</span>
        </a>

        <div className="flex items-center gap-[30px]">
          {menuOpen ? (
            <nav
              id="primary-navigation"
              aria-label="Main navigation"
              className="absolute top-full right-0 left-0 z-30 flex flex-col items-stretch gap-[10px] bg-white px-[25px] py-[20px] text-right shadow-[0_18px_30px_-24px_rgba(158,158,158,0.9)] lg:static lg:flex-row lg:items-center lg:gap-[50px] lg:bg-transparent lg:p-0 lg:shadow-none"
            >
              {LINKS.map((link) => (
                <a key={link.label} href={link.href} className={LINK_CLASS}>
                  {link.label}
                </a>
              ))}
            </nav>
          ) : null}

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn('text-black transition-colors duration-300 hover:text-aqua')}
          >
            {menuOpen ? (
              <X className="h-[24px] w-[24px]" aria-hidden="true" />
            ) : (
              <Menu className="h-[24px] w-[24px]" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
