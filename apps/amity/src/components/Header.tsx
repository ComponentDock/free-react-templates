import { useState } from 'react'
import { Heart, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks, topBar } from '../data'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header>
      <div
        aria-label="Top utility bar"
        className="flex items-center justify-between bg-topbar px-4 text-[12px] font-medium text-white uppercase"
      >
        <div className="flex items-center gap-12 py-5">
          <p>
            <span className="font-semibold">MAIL: </span>
            {topBar.email}
          </p>
          <p className="hidden sm:block">
            <span className="font-semibold">PHONE: </span>
            {topBar.phone}
          </p>
        </div>
        <a
          href="#donate"
          className="bg-charcoal px-10 py-5 text-[14px] font-medium text-white uppercase hover:bg-ink"
        >
          Donate Now
        </a>
      </div>

      <div className="relative bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
          <a href="#home" className="flex items-center gap-2 py-5" aria-label="Amity home">
            <Heart className="h-7 w-7 fill-brand text-brand" aria-hidden="true" />
            <span className="text-2xl font-bold text-ink">Amity</span>
          </a>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={link.current ? 'true' : undefined}
                    className={cn(
                      'border-b-[3px] border-transparent py-[30px] text-[14px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand',
                      link.current && 'border-brand text-brand',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="amity-mobile-nav"
            onClick={() => setMobileOpen(true)}
            className="rounded p-2 text-ink hover:bg-light lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {mobileOpen && (
          <div className="fixed inset-0 z-[9999] lg:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              aria-hidden="true"
              onClick={() => setMobileOpen(false)}
            />
            <nav
              id="amity-mobile-nav"
              aria-label="Mobile navigation"
              className="absolute top-0 left-0 h-full w-[320px] overflow-y-auto bg-white p-[15px] shadow-xl"
            >
              <div className="flex items-center justify-between px-2 py-2">
                <span className="flex items-center gap-2 text-xl font-bold text-ink">
                  <Heart className="h-6 w-6 fill-brand text-brand" aria-hidden="true" />
                  Amity
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="rounded p-2 text-ink hover:bg-light"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <ul className="mt-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      aria-current={link.current ? 'true' : undefined}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'block border-b border-light py-4 text-[16px] font-semibold text-ink hover:text-brand',
                        link.current && 'text-brand',
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
