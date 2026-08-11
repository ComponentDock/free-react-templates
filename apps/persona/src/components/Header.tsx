import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brandName, brandTagline, menuCloseLabel, menuOpenLabel, navLinks } from '../data'

/** Fixed transparent header over the hero: "Persona" wordmark left, uppercase
 *  dot-separated anchor menu right. After scrolling past the hero it gains a
 *  translucent dark navy background (blur). On small screens the menu
 *  collapses into a hamburger + off-canvas dialog. */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClasses = cn(
    'text-[12px] font-semibold uppercase tracking-[1px] transition-colors hover:text-accent',
    scrolled ? 'text-white' : 'text-white',
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main"
        className={cn(
          'transition-colors duration-300',
          scrolled ? 'bg-navy/90 shadow-lg backdrop-blur' : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 lg:px-6">
          <a href="#home" className="flex flex-col leading-none">
            <span className="text-2xl font-bold tracking-wide text-white">{brandName}</span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/70">
              {brandTagline}
            </span>
          </a>

          <div className="hidden items-center gap-3 lg:flex">
            {navLinks.map((link, index) => (
              <span key={link.href} className="flex items-center gap-3">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-xs text-white/50">
                    •
                  </span>
                ) : null}
                <a href={link.href} className={linkClasses}>
                  {link.label}
                </a>
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? menuCloseLabel : menuOpenLabel}
            className="rounded p-2 text-white transition-colors hover:text-accent lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div
          role="dialog"
          aria-label="Menu"
          className="border-t border-white/10 bg-navy/95 backdrop-blur lg:hidden"
        >
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4 lg:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded px-3 py-2 text-sm font-semibold uppercase tracking-[1px] text-white transition-colors hover:bg-white/10 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
