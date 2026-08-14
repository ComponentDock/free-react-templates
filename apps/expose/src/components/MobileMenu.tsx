import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS, SOCIAL_LINKS } from '../data'
import { SOCIAL_ICONS } from './icons'
import { cn } from '@free-react-templates/ui'

/* Mobile header (≤767px): full-width 70px black top bar (logo left,
   hamburger right) + a white 300px slide-in panel from the right with
   the same nav links and social icons. Desktop sidebar (Sidebar) is
   hidden at this breakpoint. */
export function MobileMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      return
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
      <div className="relative z-50 flex h-[70px] items-center justify-between bg-ink px-[15px] md:hidden">
        <a href="#" className="text-[20px] font-bold uppercase tracking-wide text-white">
          {BRAND}
        </a>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center text-white"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          role="dialog"
          aria-label="Mobile navigation"
          className="fixed inset-y-0 right-0 z-[2000] flex w-[300px] animate-[slide-in-right_0.3s_ease] flex-col bg-white shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.1)]"
        >
          <div className="flex items-center justify-between px-[30px] py-[20px]">
            <a href="#" className="text-[20px] font-bold uppercase tracking-wide text-black">
              {BRAND}
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center text-black"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-[30px]">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={link.active ? 'true' : undefined}
                    className={cn(
                      'block py-[10px] text-[20px] transition-colors',
                      link.active ? 'text-brand' : 'text-menu-link hover:text-brand',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-4 px-[30px] pb-[30px]">
            {SOCIAL_LINKS.map(({ key, label, href }) => {
              const Icon = SOCIAL_ICONS[key]
              return (
                <li key={key}>
                  <a
                    href={href}
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center text-black/60 transition-colors hover:text-brand"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </>
  )
}
