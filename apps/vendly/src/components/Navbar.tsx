import { useEffect, useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_DROPDOWNS, NAV_LINKS } from '../data'

interface NavbarProps {
  mobileOpen: boolean
  onClose: () => void
}

/* site-navigation — uppercase 15px menu with Home/About dropdowns; on
   mobile, a slide-in panel with the same links (aria-expanded toggle,
   Escape closes). Home is the active page in the original. */
export function Navbar({ mobileOpen, onClose }: NavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

  useEffect(() => {
    if (!openDropdown && !mobileDropdown) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
        setMobileDropdown(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [openDropdown, mobileDropdown])

  /* Reset the mobile submenu whenever the panel is closed. */
  useEffect(() => {
    if (!mobileOpen) {
      setMobileDropdown(null)
    }
  }, [mobileOpen])

  return (
    <>
      <nav aria-label="Main" className="hidden border-b border-line lg:block">
        <ul className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4">
          {NAV_DROPDOWNS.map((dropdown) => (
            <li key={dropdown.label} className="relative">
              <button
                type="button"
                aria-current={dropdown.label === 'Home' ? 'page' : undefined}
                aria-expanded={openDropdown === dropdown.label}
                onClick={() =>
                  setOpenDropdown(openDropdown === dropdown.label ? null : dropdown.label)
                }
                className={cn(
                  'inline-flex items-center gap-1 px-[10px] py-3 text-[15px] uppercase tracking-[0.05em] text-ink transition-colors hover:text-brand',
                  (openDropdown === dropdown.label || dropdown.label === 'Home') && 'text-brand',
                )}
              >
                {dropdown.label}
                <ChevronDown aria-hidden="true" className="h-4 w-4" />
              </button>
              {openDropdown === dropdown.label && (
                <ul className="absolute left-0 top-full z-50 min-w-[180px] border border-line bg-white py-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]">
                  {dropdown.items.map((item) => (
                    <li key={item}>
                      <a
                        href={dropdown.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-[14px] font-light text-body transition-colors hover:text-brand"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block px-[10px] py-3 text-[15px] uppercase tracking-[0.05em] text-ink transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-y-0 right-0 z-[2000] flex w-[280px] flex-col bg-white shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.2)] lg:hidden">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <span className="border-2 border-ink px-[10px] py-0.5 text-[18px] font-bold uppercase tracking-[0.2em] text-ink">
              {BRAND}
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="cursor-pointer p-1 text-ink"
            >
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-6 py-4">
            {NAV_DROPDOWNS.map((dropdown) => (
              <div key={dropdown.label} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={mobileDropdown === dropdown.label}
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === dropdown.label ? null : dropdown.label)
                  }
                  className="flex w-full items-center justify-between py-3 text-[14px] uppercase tracking-[0.05em] text-ink transition-colors hover:text-brand"
                >
                  {dropdown.label}
                  <ChevronDown aria-hidden="true" className="h-4 w-4" />
                </button>
                {mobileDropdown === dropdown.label && (
                  <ul className="pb-3">
                    {dropdown.items.map((item) => (
                      <li key={item}>
                        <a
                          href={dropdown.href}
                          onClick={() => {
                            setMobileDropdown(null)
                            onClose()
                          }}
                          className="block py-2 pl-4 text-[14px] font-light text-body transition-colors hover:text-brand"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="block border-b border-line py-3 text-[14px] uppercase tracking-[0.05em] text-ink transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
