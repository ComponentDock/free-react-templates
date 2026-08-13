import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

/** Navbar (reference `.ftco-navbar-light`): transparent over the hero on
 *  desktop (black on mobile), with the brand in a dark #232931 box, white
 *  nav links (active = solid white), a white-pill "Buy Ticket" CTA, and a
 *  hamburger that toggles the collapsible menu. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 bg-black lg:absolute lg:inset-x-0 lg:top-0 lg:bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#home" className="bg-slate px-4 py-1 text-xl font-black text-white">
          Kickoff
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                aria-current={label === 'Home' ? 'page' : undefined}
                className={cn(
                  'text-white/50 transition-colors hover:text-white',
                  label === 'Home' && 'font-bold text-white',
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="rounded-[4px] border border-white bg-white px-[18px] py-3 text-black transition-colors hover:border-slate hover:bg-slate hover:text-white"
          >
            Buy Ticket
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
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
        <div id="mobile-menu" className="bg-black px-6 pb-8 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={label === 'Home' ? 'page' : undefined}
                  className={cn(
                    'block border-b border-white/10 py-3 text-white/50 transition-colors hover:text-white',
                    label === 'Home' && 'font-bold text-white',
                  )}
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
