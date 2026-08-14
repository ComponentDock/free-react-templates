import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data'
import { BrandIcon } from './BrandIcon'

const socials = [
  { label: 'Pinterest', name: 'pinterest' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Dribbble', name: 'dribbble' },
  { label: 'Behance', name: 'behance' },
] as const

/* Transparent header overlaid on the hero (the reference's absolute
   .header-section): logo wordmark in a thin white box on the left, five
   brand icons on the right, centered uppercase menu; mobile gets a circular
   hamburger that opens a slide-down menu. */
export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header data-testid="header" className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1464px] items-center justify-between px-6 pt-[35px]">
        <a
          href="#home"
          className="border border-white px-3 py-1 text-lg font-bold uppercase tracking-widest text-white"
        >
          Obscura
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-9 md:flex">
            {socials.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.label}
                className="text-white transition-colors hover:text-white/60"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>

          <nav aria-label="Main navigation" className="hidden items-center gap-12 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base text-white transition-colors hover:text-white/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-fog text-white lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full border-t border-white/20 bg-black/95 px-6 py-6">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="uppercase text-white transition-colors hover:text-white/60"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
