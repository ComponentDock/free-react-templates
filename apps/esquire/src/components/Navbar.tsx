import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS, SOCIAL_LINKS } from '../data'
import { SocialIcon } from './SocialIcon'

/**
 * Navbar — black sticky header (source `.header-area`, bg #000) with the
 * Esquire brand left, the nav centered (Blog and Pages each expand a
 * dropdown submenu on hover/focus), circular 40×40 #171717 social chips on
 * the right (desktop only) and a hamburger menu on narrow viewports. The
 * active Home link is gold; all links hover gold.
 */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-hero text-paper">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
      >
        <a href="#home" className="text-2xl font-bold tracking-widest text-paper uppercase">
          {BRAND}
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const hasSubmenu = Boolean(link.submenu?.length)
            const isOpen = dropdown === link.label
            return (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => hasSubmenu && setDropdown(link.label)}
                onMouseLeave={() => hasSubmenu && setDropdown(null)}
              >
                <a
                  href={link.href}
                  aria-current={link.label === 'Home' ? 'page' : undefined}
                  className={cn(
                    'flex items-center gap-1 py-2 text-sm font-medium tracking-wide text-hero-sub uppercase transition-colors hover:text-brand',
                    link.label === 'Home' && 'text-brand',
                  )}
                >
                  {link.label}
                  {hasSubmenu && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
                </a>
                {hasSubmenu && (
                  <ul
                    className={cn(
                      'invisible absolute left-0 top-full min-w-36 bg-[#111] py-2 opacity-0 shadow-lg transition-opacity',
                      isOpen && 'visible opacity-100',
                    )}
                  >
                    {link.submenu!.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-hero-sub transition-colors hover:text-brand"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-social-chip text-[#8B8B8B] transition-colors hover:bg-brand hover:text-paper"
            >
              <SocialIcon name={social.label} />
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="rounded-md p-2 text-paper transition-colors hover:text-brand lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-paper/10 bg-hero px-4 pt-2 pb-6 lg:hidden">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={link.label === 'Home' ? 'page' : undefined}
                  className={cn(
                    'block px-2 py-2.5 text-sm tracking-wide text-hero-sub uppercase transition-colors hover:text-brand',
                    link.label === 'Home' && 'text-brand',
                  )}
                >
                  {link.label}
                </a>
                {link.submenu?.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 text-sm text-hero-sub/80 transition-colors hover:text-brand"
                  >
                    {item}
                  </a>
                ))}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3 border-t border-paper/10 pt-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-social-chip text-[#8B8B8B] transition-colors hover:bg-brand hover:text-paper"
              >
                <SocialIcon name={social.label} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
