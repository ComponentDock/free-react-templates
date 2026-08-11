import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Menu } from 'lucide-react'
import { NAV_LINKS } from '../data'

/* nav.navbar.ftco_navbar — absolute over the hero (top 20px, z-index 3),
   transparent on desktop; ≤992px: solid black background, static position,
   hamburger toggle shown. Brand "Succor." with the trailing dot in #ffb400;
   links 18px w700 white, hover #ffb400, padding 1.8rem 20px. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      aria-label="Main"
      className="absolute top-5 z-[3] w-full max-[992px]:static max-[992px]:bg-black max-[992px]:p-[10px_15px]"
    >
      <div className="mx-auto flex max-w-6xl items-center px-4">
        <a href="#home" className="text-[18px] font-black text-white lg:text-[22px]">
          Succor<span className="text-brand">.</span>
        </a>

        {/* .navbar-toggler — hamburger + "Menu" (source oi oi-menu icon),
            aria-label="Toggle navigation". Hidden on desktop. */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="ml-auto flex cursor-pointer items-center gap-1 border border-white/40 px-3 py-1 text-white lg:hidden"
        >
          <Menu aria-hidden="true" className="h-4 w-4" />
          <span className="text-sm uppercase tracking-wide">Menu</span>
        </button>

        {/* ul.navbar-nav.ml-auto — right-aligned links on desktop; on mobile
            the same links live in the collapsible panel below. */}
        <ul className="ml-auto hidden items-center lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-current={link.active ? 'page' : undefined}
                className="inline-block px-5 py-[1.8rem] text-[18px] font-bold text-white hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile collapse panel — rendered only when the toggle is open. */}
      {open && (
        <ul className="flex flex-col bg-black lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block border-t border-white/10 px-5 py-3 text-[18px] font-bold text-white/70 hover:text-white',
                  link.active && 'text-brand hover:text-brand',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
