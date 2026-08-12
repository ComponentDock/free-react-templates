import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'

/* header — site name "Atelier" + nav links (desktop-only) + dark-mode
   toggle + mobile burger menu. Dark mode flips a `.dark` class on <html>
   (class-based Tailwind variant). */
export function Navbar() {
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-ink">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="text-[22px] font-black tracking-wide text-ink uppercase dark:text-white"
        >
          {BRAND}
        </a>

        <div className="flex items-center gap-2">
          <nav aria-label="Primary" className="mr-2 hidden items-center lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-[15px] font-medium text-ink transition-colors hover:text-brand dark:text-white dark:hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setDark((current) => !current)}
            className="cursor-pointer rounded-full p-2 text-ink transition-colors hover:bg-tint dark:text-white dark:hover:bg-white/10"
          >
            {dark ? (
              <Sun aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Moon aria-hidden="true" className="h-5 w-5" />
            )}
          </button>

          <button
            type="button"
            aria-label="Toggle mobile menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((current) => !current)}
            className="cursor-pointer rounded-full p-2 text-ink transition-colors hover:bg-tint dark:text-white lg:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-gray-100 px-4 py-4 dark:border-white/10 lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink transition-colors hover:text-brand dark:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
