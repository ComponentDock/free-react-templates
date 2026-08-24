import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = () => 'text-sm font-medium transition-colors hover:text-brand text-white/80'

  return (
    <nav className="fixed top-0 z-50 w-full bg-brand/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="text-xl font-bold text-white">
          Nurture
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass()}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-tangerine px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-tangerine-dark md:inline-block"
        >
          Enroll Now
        </a>

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
        <div className="border-t border-white/20 bg-brand px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass()} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-3 block rounded-full bg-tangerine px-5 py-2 text-center text-sm font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  )
}
