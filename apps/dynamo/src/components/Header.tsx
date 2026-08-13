import { useState } from 'react'
import { Menu, Phone, Mail, MapPin, Search, X, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { site, topbarText, navLinks, solutionsDropdown } from '../data'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header data-section="header">
      {/* Dark topbar */}
      <div className="bg-navy-900 px-6 py-3.5 text-center text-sm text-white/70 md:px-10">
        <p className="mx-auto max-w-4xl">{topbarText}</p>
      </div>

      {/* Navbar */}
      <div className="relative bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#home" className="text-3xl font-bold text-navy-900">
            {site.name}
          </a>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-6 text-left lg:flex">
              <div className="flex items-center gap-2 text-sm text-navy-900">
                <Phone className="h-4 w-4 text-primary-600" aria-hidden="true" />
                <div>
                  <h6 className="text-xs font-semibold uppercase">Call us</h6>
                  <p>{site.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-900">
                <Mail className="h-4 w-4 text-primary-600" aria-hidden="true" />
                <div>
                  <h6 className="text-xs font-semibold uppercase">Email</h6>
                  <p>{site.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-900">
                <MapPin className="h-4 w-4 text-primary-600" aria-hidden="true" />
                <div>
                  <h6 className="text-xs font-semibold uppercase">Address</h6>
                  <p>
                    {site.addressLine1}, {site.addressLine2}
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label="Open search"
              onClick={() => setSearchOpen(true)}
              className="flex h-12 w-16 items-center justify-center bg-primary-600 text-white transition-colors hover:bg-primary-700"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-12 w-12 items-center justify-center border border-gray-200 text-navy-900 lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden justify-center border-t border-gray-100 lg:flex">
          <ul className="flex items-center">
            {navLinks.map((link) =>
              link.label === 'Solutions' ? (
                <li key={link.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={solutionsOpen}
                    onClick={() => setSolutionsOpen((open) => !open)}
                    className={cn(
                      'inline-flex items-center gap-1 px-4 py-4 text-[15px] font-semibold text-navy-900 hover:text-primary-600',
                      solutionsOpen && 'text-primary-600',
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                  {solutionsOpen && (
                    <ul className="absolute left-0 top-full z-50 min-w-40 border border-gray-100 bg-white shadow-lg">
                      {solutionsDropdown.map((item) => (
                        <li key={item}>
                          <a
                            href="#solutions"
                            className="block px-4 py-2.5 text-sm text-navy-900 hover:bg-primary-600 hover:text-white"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={link.active ? 'page' : undefined}
                    className={cn(
                      'relative px-4 py-4 text-[15px] font-semibold text-navy-900 hover:text-primary-600',
                      link.active &&
                        'after:absolute after:inset-x-4 after:bottom-0 after:h-0.5 after:bg-primary-600',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* Mobile nav */}
        {menuOpen && (
          <nav aria-label="Mobile" className="border-t border-gray-100 lg:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.label === 'Solutions' ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={solutionsOpen}
                        onClick={() => setSolutionsOpen((open) => !open)}
                        className="flex w-full items-center justify-between px-4 py-3 text-[15px] font-semibold text-navy-900"
                      >
                        {link.label}
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      </button>
                      {solutionsOpen && (
                        <ul className="bg-gray-50">
                          {solutionsDropdown.map((item) => (
                            <li key={item}>
                              <a
                                href="#solutions"
                                className="block px-8 py-2.5 text-sm text-navy-900"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      aria-current={link.active ? 'page' : undefined}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-3 text-[15px] font-semibold text-navy-900"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Search modal */}
      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/95"
        >
          <button
            type="button"
            aria-label="Close search"
            onClick={() => setSearchOpen(false)}
            className="absolute right-6 top-6 text-white hover:text-primary-600"
          >
            <X className="h-8 w-8" aria-hidden="true" />
          </button>
          <form
            className="w-full max-w-2xl px-6"
            onSubmit={(event) => {
              event.preventDefault()
              setSearchOpen(false)
            }}
          >
            <input
              type="search"
              aria-label="Search"
              placeholder="Search..."
              className="w-full border-b-2 border-white/40 bg-transparent pb-4 text-2xl text-white placeholder-white/50 outline-none focus:border-primary-600"
            />
          </form>
        </div>
      )}
    </header>
  )
}
