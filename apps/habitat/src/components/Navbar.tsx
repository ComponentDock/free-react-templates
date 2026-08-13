import { useState } from 'react'
import { Home, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brandName, navLinks } from '../data'
import { BehanceIcon, DribbbleIcon, FacebookIcon, PinterestIcon, TwitterIcon } from './social-icons'

const socialLinks = [
  { label: 'Pinterest', Icon: PinterestIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Dribbble', Icon: DribbbleIcon },
  { label: 'Behance', Icon: BehanceIcon },
] as const

/* Reference: header.header-section — absolute bar over the hero (padding
   25px 0) with a circular house logo + "Habitat." wordmark, a right-floated
   menu (Home, Search Results, Categories, Single Property, Blog, Contact)
   and a brand-icon cluster; collapses into a toggle menu on mobile. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-50 w-full px-6 py-6 lg:px-16">
      <div className="flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 text-white">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-navy">
            <Home size={22} aria-hidden="true" />
          </span>
          <span className="font-sans text-[26px] font-bold tracking-tight">{brandName}.</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.active ? 'page' : undefined}
              className={cn(
                'text-[14px] font-medium text-white/85 transition-colors hover:text-white',
                link.active && 'text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          {socialLinks.map(({ label, Icon }) => (
            <a
              key={label}
              href="#home"
              aria-label={label}
              className="text-white/70 transition-colors hover:text-white"
            >
              <Icon className="h-[16px] w-[16px]" />
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full text-white lg:hidden"
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="mt-4 rounded-lg bg-navy p-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-3 py-2 text-[14px] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
