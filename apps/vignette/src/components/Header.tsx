import { useState } from 'react'
import { ShoppingBag, Menu, X, Phone } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const navLinks = ['Home', 'Shop', 'Dresses', 'Shoes', 'Contact'] as const

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Pinterest', name: 'pinterest' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="relative z-50">
      {/* Top bar: logo + cart */}
      <div className="border-b border-divider bg-paper">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="text-2xl font-bold tracking-wide text-ink">
            Vignette<span className="text-brand">.</span>
          </a>
          <div className="flex items-center gap-4">
            <a
              href="#cart"
              className="relative flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand"
              aria-label="Shopping bag with 2 items"
            >
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">Your Bag $20</span>
              <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                2
              </span>
            </a>
            <button
              type="button"
              className="text-ink lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="hidden border-b border-divider bg-paper lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Social share */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-mist">Share</span>
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="text-mist transition-colors hover:text-brand"
              >
                <BrandIcon name={s.name} className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Nav links */}
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-8 text-sm font-semibold uppercase tracking-wide text-ink">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-brand">
                    {link === 'Shoes' ? (
                      <>
                        <span className="mr-1 rounded bg-brand px-1.5 py-0.5 text-[10px] font-bold text-white">
                          HOT
                        </span>
                        Shoes
                      </>
                    ) : (
                      link
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Phone */}
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden xl:inline">+1 234 567 890</span>
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <nav
          className="absolute inset-x-0 top-full z-50 border-b border-divider bg-paper shadow-lg lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-brand/10 hover:text-brand"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-t border-divider px-4 py-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="text-mist transition-colors hover:text-brand"
              >
                <BrandIcon name={s.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
