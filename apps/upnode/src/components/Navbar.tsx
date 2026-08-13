import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brandName, heroCtaLabels, navLinks } from '../data'

/* Blue nav with wordmark, dropdown menus (Hosting, Pages), CTA buttons and
   a mobile hamburger; on scroll it turns into a white sticky bar with dark
   #303030 links (reference: .header-area + .sticky-menu). */
export function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'z-50 w-full transition-colors duration-300',
        sticky ? 'sticky top-0 bg-white shadow-md' : 'relative bg-primary',
      )}
    >
      <div className="mx-auto flex h-[100px] max-w-7xl items-center justify-between px-4">
        <a href="#home" className={cn('text-3xl font-bold', sticky ? 'text-ink' : 'text-white')}>
          {brandName}
        </a>
        <nav aria-label="Main navigation" className="hidden items-center lg:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                {link.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={openMenu === link.label}
                      aria-haspopup="menu"
                      onClick={() => setOpenMenu(openMenu === link.label ? null : link.label)}
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors',
                        sticky ? 'text-ink hover:text-primary' : 'text-white hover:text-white/80',
                      )}
                    >
                      {link.label}
                      <ChevronDown aria-hidden="true" className="h-4 w-4" />
                    </button>
                    {openMenu === link.label ? (
                      <ul
                        role="menu"
                        aria-label={`${link.label} menu`}
                        className="absolute left-0 top-full w-44 rounded-md border border-borderline bg-white py-2 shadow-lg"
                      >
                        {link.children.map((child) => (
                          <li key={child}>
                            <a
                              href={`#${child.toLowerCase().replace(/\s+/g, '-')}`}
                              role="menuitem"
                              className="block px-4 py-2 text-sm text-ink transition-colors hover:bg-mist hover:text-primary"
                            >
                              {child}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : (
                  <a
                    href={link.href}
                    aria-current={link.active ? 'page' : undefined}
                    className={cn(
                      'px-3 py-2 text-sm font-medium transition-colors',
                      link.active
                        ? sticky
                          ? 'text-primary'
                          : 'text-white underline decoration-white/60 underline-offset-8'
                        : sticky
                          ? 'text-ink hover:text-primary'
                          : 'text-white hover:text-white/80',
                    )}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="flex h-[50px] items-center rounded-full border border-white px-8 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary"
          >
            {heroCtaLabels.chat}
          </a>
          <a
            href="#plans"
            className="flex h-[50px] items-center rounded-full bg-white px-8 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            {heroCtaLabels.start}
          </a>
        </div>
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className={cn('lg:hidden', sticky ? 'text-ink' : 'text-white')}
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      {mobileOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-primary lg:hidden"
        >
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <details>
                    <summary className="cursor-pointer py-3 text-sm font-medium text-white">
                      {link.label}
                    </summary>
                    <ul className="pb-2 pl-4">
                      {link.children.map((child) => (
                        <li key={child}>
                          <a
                            href={`#${child.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm text-white/80 hover:text-white"
                          >
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={link.active ? 'page' : undefined}
                    className="block py-3 text-sm font-medium text-white hover:text-white/80"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
            <li className="flex flex-col gap-3 py-3">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex h-[50px] items-center justify-center rounded-full border border-white text-sm font-semibold text-white"
              >
                {heroCtaLabels.chat}
              </a>
              <a
                href="#plans"
                onClick={() => setMobileOpen(false)}
                className="flex h-[50px] items-center justify-center rounded-full bg-white text-sm font-semibold text-primary"
              >
                {heroCtaLabels.start}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
