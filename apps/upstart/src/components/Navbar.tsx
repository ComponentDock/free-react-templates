import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const menuLink =
  'font-body text-sm tracking-[0.05em] text-black/60 transition-colors hover:text-accent'

const tailLinks = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

const serviceItems = [
  { label: 'Web Design', href: '#services', chevron: false },
  { label: 'WP Development', href: '#services', chevron: false },
  { label: 'Front End', href: '#services', chevron: false },
  { label: 'Sub Menu', href: '#services', chevron: true },
] as const

/** Navbar: white bar — "Upstart" Oswald wordmark left, right-aligned Roboto
 *  Mono menu with a Services dropdown (click/tap/keyboard toggle,
 *  aria-expanded) and a mobile off-canvas menu sliding in from the right. */
export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <header className="relative z-[99] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 lg:px-8">
        <a href="#home" className="font-heading text-[25px] font-bold text-black">
          Upstart
        </a>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            <li>
              <a href="#home" aria-current="page" className={cn(menuLink, 'text-black')}>
                Home
              </a>
            </li>
            <li>
              <a href="#work" className={menuLink}>
                Portfolio
              </a>
            </li>
            <li className="relative">
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((open) => !open)}
                className={cn(menuLink, 'inline-flex items-center gap-1')}
              >
                Services
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
              {servicesOpen ? (
                <ul className="absolute left-0 top-full z-50 min-w-[200px] bg-white py-2 shadow-lg">
                  {serviceItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="flex items-center justify-between px-5 py-2 font-body text-sm text-black transition-colors hover:text-accent"
                      >
                        {item.label}
                        {item.chevron ? (
                          <ChevronDown className="h-4 w-4" aria-hidden="true" />
                        ) : null}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
            {tailLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={menuLink}>
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
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(true)}
          className="text-black lg:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      {mobileOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-y-0 right-0 z-[2000] w-72 overflow-y-auto bg-white p-6 shadow-2xl lg:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="font-heading text-[25px] font-bold text-black">Upstart</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="text-black"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile">
            <ul className="mt-8 space-y-1">
              <li>
                <a
                  href="#home"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 font-body text-xl text-black transition-colors hover:text-accent"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 font-body text-xl text-black transition-colors hover:text-accent"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((open) => !open)}
                  className="flex w-full items-center justify-between py-2 font-body text-xl text-black transition-colors hover:text-accent"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform',
                      mobileServicesOpen && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>
                {mobileServicesOpen ? (
                  <ul className="ml-4 space-y-1 border-l border-black/10 pl-4">
                    {serviceItems.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between py-1 font-body text-base text-black transition-colors hover:text-accent"
                        >
                          {item.label}
                          {item.chevron ? (
                            <ChevronDown className="h-4 w-4" aria-hidden="true" />
                          ) : null}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
              {tailLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 font-body text-xl text-black transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
