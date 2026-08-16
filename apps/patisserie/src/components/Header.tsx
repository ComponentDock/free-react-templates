import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brand, nav } from '../data'
import { BrandIcon } from './BrandIcon'

/**
 * Dark header: top info bar (socials left, "Call Us" right), centered gold
 * wordmark, centered uppercase nav with a Blog dropdown, and a mobile
 * hamburger menu. Sticky state keeps the solid #0A0A0A background.
 */
export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ink">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-[30px] pb-[13px] sm:px-6 lg:px-[88px]">
        <ul className="flex items-center gap-4">
          {nav.socials.map((social) => (
            <li key={social.name}>
              <a
                href="#home"
                aria-label={social.label}
                className="block text-white transition-colors duration-300 hover:text-brand [&:hover_svg]:rotate-y-180"
              >
                <BrandIcon
                  name={social.name.toLowerCase() as 'facebook' | 'instagram' | 'twitter'}
                />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden border border-brand px-5 py-[11px] text-base capitalize text-brand transition-colors hover:bg-brand hover:text-ink md:inline-block"
        >
          {nav.callUs}
        </a>
      </div>

      {/* Wordmark + nav */}
      <div className="flex items-center justify-between border-t border-line px-4 py-4 sm:px-6 lg:px-[88px]">
        <a href="#home" className="font-display text-[32px] leading-none text-brand lg:pl-[69px]">
          {brand}
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-2">
            {nav.links.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="group relative">
                  <a
                    href={link.href}
                    className="relative inline-block px-[7px] py-[32px] text-[15px] font-normal tracking-wide text-white uppercase transition-colors hover:text-brand after:absolute after:bottom-[18px] after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-brand after:transition-all after:duration-300 group-hover:after:w-full"
                  >
                    {link.label}
                  </a>
                  <ul className="invisible absolute left-0 top-full w-[170px] bg-white p-[17px_0] opacity-0 shadow-[0_0_10px_3px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    {link.dropdown.map((item) => (
                      <li key={item}>
                        <a
                          href={link.href}
                          className="block px-6 py-2 text-[15px] text-heading-light capitalize transition-colors hover:text-brand"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="relative inline-block px-[7px] py-[32px] text-[15px] font-normal tracking-wide text-white uppercase transition-colors hover:text-brand after:absolute after:bottom-[18px] after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-brand lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-line bg-ink lg:hidden">
          <ul className="px-6 py-4">
            {nav.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block border-b border-line py-3 text-[15px] tracking-wide text-white uppercase transition-colors hover:text-brand',
                  )}
                >
                  {link.label}
                </a>
                {link.dropdown && (
                  <ul className="pl-4">
                    {link.dropdown.map((item) => (
                      <li key={item}>
                        <a
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-[14px] text-heading capitalize transition-colors hover:text-brand"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
