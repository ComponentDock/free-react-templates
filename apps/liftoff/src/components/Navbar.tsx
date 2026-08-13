import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

const SECTION_IDS = navLinks.map((link) => link.href.slice(1))

/** Navbar (reference `.site-navbar`): a centered black brand wordmark with a
 *  teal dot above a white sticky navbar with six anchor links (scrollspy
 *  highlights the active one in teal) and a hamburger that toggles a mobile
 *  offcanvas panel. */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(SECTION_IDS[0]!)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    for (const id of SECTION_IDS) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header className="relative z-20 bg-paper">
      <div className="mx-auto hidden max-w-7xl px-4 pt-5 pb-2 text-center lg:block lg:px-8">
        <p className="font-heading text-2xl font-black tracking-wide text-ink">
          Liftoff<span className="text-brand">.</span>
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-center justify-between border-b border-[#f3f3f4] py-4">
          <a href="#home-section" className="font-heading text-2xl font-black text-ink lg:hidden">
            Liftoff<span className="text-brand">.</span>
          </a>

          <nav aria-label="Primary" className="hidden flex-1 justify-end lg:flex">
            <ul className="flex items-center">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-current={active === href.slice(1) ? 'true' : undefined}
                    className={cn(
                      'px-5 py-1 text-ink transition-colors hover:text-brand',
                      active === href.slice(1) && 'text-brand',
                    )}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-full z-30 border-b border-[#f3f3f4] bg-paper shadow-lg lg:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-[#f3f3f4] py-3 text-ink transition-colors hover:text-brand"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
