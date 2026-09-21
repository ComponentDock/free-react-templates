import { useState, useRef, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Program', href: '#program', hasDropdown: true },
  { label: 'Our Trainers', href: '#trainer' },
  { label: 'News', href: '#testimonies' },
  { label: 'About', href: '#club' },
  { label: 'Contact', href: '#footer' },
]

const programDropdown = ['Body Building', 'Morning Energy', 'Stretching']

const subMenuItems = ['Swimming', 'Boxing', 'Running', 'Jogging']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const subCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setDropdownOpen(false)
      setSubMenuOpen(false)
    }, 150)
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }, [])

  const scheduleSubClose = useCallback(() => {
    subCloseTimer.current = setTimeout(() => {
      setSubMenuOpen(false)
    }, 150)
  }, [])

  const cancelSubClose = useCallback(() => {
    if (subCloseTimer.current) {
      clearTimeout(subCloseTimer.current)
      subCloseTimer.current = null
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Brand */}
        <a href="#" className="text-2xl font-normal tracking-wide text-ink">
          Grit<span className="font-bold">Box</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => {
                if (link.hasDropdown) {
                  cancelClose()
                  setDropdownOpen(true)
                }
              }}
              onMouseLeave={() => {
                if (link.hasDropdown) scheduleClose()
              }}
            >
              <a
                href={link.href}
                className={cn(
                  'text-sm font-medium uppercase tracking-wide transition-colors hover:text-brand',
                  link.hasDropdown && 'flex items-center gap-1',
                )}
              >
                {link.label}
                {link.hasDropdown && (
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </a>
              {link.hasDropdown && dropdownOpen && (
                <ul className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                  {programDropdown.map((item) => (
                    <li key={item} className="relative">
                      {item === 'Stretching' ? (
                        <div
                          onMouseEnter={() => {
                            cancelSubClose()
                            setSubMenuOpen(true)
                          }}
                          onMouseLeave={() => scheduleSubClose()}
                        >
                          <a
                            href="#program"
                            className="flex items-center justify-between px-4 py-2 text-sm text-ink hover:bg-cream hover:text-brand"
                          >
                            {item}
                            <svg
                              className="h-3 w-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </a>
                          {subMenuOpen && (
                            <ul className="absolute left-full top-0 z-50 min-w-[150px] rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                              {subMenuItems.map((sub) => (
                                <li key={sub}>
                                  <a
                                    href="#program"
                                    className="block px-4 py-2 text-sm text-ink hover:bg-cream hover:text-brand"
                                  >
                                    {sub}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <a
                          href="#program"
                          className="block px-4 py-2 text-sm text-ink hover:bg-cream hover:text-brand"
                        >
                          {item}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="text-ink md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white pt-20 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-4 px-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block py-2 text-sm font-medium uppercase text-ink hover:text-brand"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}
