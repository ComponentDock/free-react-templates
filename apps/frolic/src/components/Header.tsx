import { useState } from 'react'
import { Clock, MapPin, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks, quickContact, socials } from '../data'
import { BrandIcon } from './BrandIcon'

const socialColors: Record<string, string> = {
  facebook: 'text-lagoon',
  twitter: 'text-leaf',
  linkedin: 'text-sunflower',
}

/** Header (reference `.site-navbar`): absolute over the hero with a top
 *  quick-contact row (logo + address/hours, hidden on mobile) and a nav row
 *  in a white floating pill (reference `.menu-wrap` — bg #fff, radius 100px)
 *  with black links (active/hover coral #fd4d40), colored social icons, and
 *  a hamburger for the mobile menu. */
export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-6 lg:px-8">
        <a href="#home" className="flex items-baseline text-[2.7rem] font-bold text-white">
          <span className="font-heading">Frolic</span>
          <span className="text-cherry">.</span>
        </a>
        <div className="hidden items-center gap-8 text-xs text-white lg:flex xl:text-sm">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-sunflower" aria-hidden="true" />
            {quickContact.address}
          </p>
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-lagoon" aria-hidden="true" />
            {quickContact.hours}
          </p>
        </div>
      </div>

      <nav
        aria-label="Primary"
        className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full bg-white px-5 py-2.5"
      >
        <ul className="hidden items-center lg:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                aria-current={label === 'Home' ? 'page' : undefined}
                className={cn(
                  'mx-[15px] py-5 transition-colors hover:text-coral',
                  label === 'Home' ? 'text-coral' : 'text-black',
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="hidden items-center gap-5 lg:flex">
          {socials.map(({ label, name }) => (
            <li key={label}>
              <a href="#contact" aria-label={label} className={cn(socialColors[name])}>
                <BrandIcon name={name} className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center text-black lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="bg-white/95 px-6 pb-8 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink/10 py-3 text-coral transition-colors hover:text-coral"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex items-center gap-5">
            {socials.map(({ label, name }) => (
              <li key={label}>
                <a href="#contact" aria-label={label} className={cn(socialColors[name])}>
                  <BrandIcon name={name} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
