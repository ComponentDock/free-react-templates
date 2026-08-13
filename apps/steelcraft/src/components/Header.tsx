import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brand, navItems, topBar } from '../data'
import { socialLinks } from './social-icons'

/** Black info top bar + nav that floats over the hero and turns into a
 *  fixed black bar (the reference's sticky-bar) once the page is scrolled.
 *  Mobile: the hamburger opens a slide-in panel with a backdrop. */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="bg-black text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm">
          <ul className="hidden items-center gap-8 sm:flex">
            {[topBar.phone, topBar.email, topBar.hours].map((item) => (
              <li
                key={item}
                className="relative pl-5 before:absolute before:left-0 before:top-1/2 before:h-px before:w-5 before:-translate-y-1/2 before:bg-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="hidden items-center gap-4 md:flex">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="text-white/80 transition-colors hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        data-testid="sticky-nav"
        className={
          scrolled
            ? 'fixed inset-x-0 top-0 bg-black shadow-[0_10px_15px_rgba(25,25,25,0.1)]'
            : 'relative'
        }
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-semibold text-white">
              {brand.name.charAt(0)}
            </span>
            <span className="text-xl font-semibold tracking-wide">{brand.name}</span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-medium text-brand transition-colors hover:text-white"
            >
              {topBar.quote}
            </a>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="steelcraft-mobile-menu"
            onClick={() => setOpen(true)}
            className="text-white lg:hidden"
          >
            <Menu className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            id="steelcraft-mobile-menu"
            className="fixed inset-y-0 right-0 z-50 w-72 bg-black p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-white">{brand.name}</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-white"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="mt-8 flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-white transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="text-brand">
                {topBar.quote}
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
