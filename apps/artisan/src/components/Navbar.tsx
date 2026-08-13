import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'left-0 right-0 top-0 z-50 w-full transition-all',
        scrolled
          ? 'fixed bg-white shadow-[0_4px_30px_rgba(158,158,158,0.3)]'
          : 'absolute bg-transparent',
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <a href="#home" className="flex items-center gap-3" aria-label="Artisan home">
          <span className="flex h-9 w-9 items-center justify-center rounded bg-brand font-sans text-xl font-bold text-white">
            K
          </span>
          <span className="font-sans text-2xl font-bold tracking-[0.2em] text-ink">Artisan</span>
        </a>

        {/* Desktop menu */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                {link.children ? (
                  <>
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === link.label}
                      onClick={() =>
                        setOpenDropdown((current) => (current === link.label ? null : link.label))
                      }
                      className="font-sans text-base font-medium capitalize text-ink transition-colors hover:text-brand"
                    >
                      {link.label}
                    </button>
                    {openDropdown === link.label && (
                      <ul className="absolute left-0 top-full mt-2 w-44 rounded bg-white p-2 shadow-[0_0_30px_rgba(127,137,161,0.25)]">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              className="block px-3 py-2 font-sans text-sm capitalize text-ink transition-colors hover:text-brand"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="font-sans text-base font-medium capitalize text-ink transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="text-ink lg:hidden"
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav aria-label="Mobile" className="border-t border-gray-100 bg-white lg:hidden">
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block py-2 font-sans text-base capitalize text-ink transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
