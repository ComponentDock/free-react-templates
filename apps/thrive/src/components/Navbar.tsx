import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = ['Home', 'Solutions', 'Plans & Pricing', 'Why Us', 'Contact Us'] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  return (
    <nav className="absolute top-0 z-50 w-full px-5 py-5" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Brand */}
        <a href="#" className="text-2xl font-bold text-brand-orange">
          Thrive<span className="text-white">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-4 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link} className="relative">
              {link === 'Solutions' ? (
                <div
                  className="group"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button className="text-sm text-nav-link transition-colors hover:text-brand-orange">
                    {link}
                  </button>
                  {solutionsOpen && (
                    <ul className="absolute left-0 top-full z-50 min-w-[180px] rounded bg-white py-2 shadow-lg">
                      {['Sub Menu One', 'Sub Menu Two'].map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="block px-5 py-2 text-sm text-gray-900 transition-colors hover:text-brand-orange"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  href="#"
                  className={cn(
                    'text-sm transition-colors hover:text-brand-orange',
                    link === 'Home' ? 'text-brand-orange' : 'text-nav-link',
                  )}
                >
                  {link}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mt-4 space-y-3 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="block text-sm text-nav-link transition-colors hover:text-brand-orange"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
