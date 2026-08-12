import { useState } from 'react'
import { Activity, ChevronDown, Menu, X } from 'lucide-react'
import { navLinks } from '../data'

interface NavbarProps {
  onOpenAppointment: () => void
}

export function Navbar({ onOpenAppointment }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
            <Activity className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-2xl font-semibold text-ink">Salus</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              <a
                href={link.href}
                className={`text-[15px] font-medium capitalize transition-colors hover:text-ink ${
                  link.label === 'Home' ? 'text-ink' : 'text-body'
                }`}
                aria-current={link.label === 'Home' ? 'true' : undefined}
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <span className="flex items-center gap-1">
                  {link.label}
                  {link.children && <ChevronDown className="h-4 w-4" aria-hidden="true" />}
                </span>
              </a>
              {link.children && openDropdown === link.label && (
                <div
                  className="absolute left-0 top-full w-48 rounded-sm bg-white py-2 shadow-lg"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.children.map((child) => (
                    <a
                      key={child}
                      href="#page"
                      className="block px-5 py-2 text-sm text-body capitalize hover:text-brand"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenAppointment}
            className="hidden rounded bg-brand px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700 lg:inline-block"
          >
            Make an Appointment
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="text-ink lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-7 w-7" aria-hidden="true" />
            ) : (
              <Menu className="h-7 w-7" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-line bg-white px-4 py-4 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  className={`block py-2 text-[15px] font-medium capitalize ${
                    link.label === 'Home' ? 'text-ink' : 'text-body'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
                {link.children && (
                  <div className="ml-4 flex flex-col">
                    {link.children.map((child) => (
                      <a
                        key={child}
                        href="#page"
                        className="py-1 text-sm text-body capitalize"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false)
                onOpenAppointment()
              }}
              className="mt-3 rounded bg-brand px-6 py-3 text-sm font-medium text-white"
            >
              Make an Appointment
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
