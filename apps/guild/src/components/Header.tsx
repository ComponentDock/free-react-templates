import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  headerAd,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  siteName,
  siteSubtitle,
} from '../data'

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2">
      <span className="text-[30px] leading-none font-bold tracking-wide text-white">
        {siteName}
      </span>
      <span className="hidden text-[11px] font-medium text-meta sm:block">{siteSubtitle}</span>
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-[9999] bg-header">
      <div className="mx-auto flex h-[110px] max-w-[1200px] items-center justify-between px-4">
        <div className="flex items-center gap-10">
          <Logo />
          <nav aria-label={navLabel} className="hidden lg:block">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block px-2 py-11 text-base font-medium text-white transition-colors hover:text-brand lg:mr-[45px] lg:px-[7px]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <img
          src={headerAd.image}
          alt={headerAd.alt}
          className="hidden h-[90px] w-[230px] object-cover lg:block"
        />
        <button
          type="button"
          aria-label={open ? menuCloseLabel : menuTriggerLabel}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav aria-label={mobileNavLabel} className="border-t border-white/10 bg-header lg:hidden">
          <ul className="flex flex-col px-4 py-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn('block py-3 text-base font-medium text-white hover:text-brand')}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
