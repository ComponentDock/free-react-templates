import { useState } from 'react'
import { Heart, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks, phone, email } from '../data'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const socialLinks = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'LinkedIn', Icon: LinkedinIcon },
  { label: 'Instagram', Icon: InstagramIcon },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 shadow-sm">
      <div aria-label="Top bar" className="bg-primary px-4 py-2 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <ul className="flex flex-wrap items-center gap-x-5 text-sm">
            <li className="flex items-center gap-2">
              <span aria-hidden="true">☏</span>
              <a href="#contact" className="hover:text-white/80">
                {phone}
              </a>
            </li>
            <li aria-hidden="true" className="hidden h-4 w-px bg-white/20 sm:block" />
            <li className="hidden items-center gap-2 sm:flex">
              <span aria-hidden="true">✉</span>
              <a href="#contact" className="hover:text-white/80">
                {email}
              </a>
            </li>
          </ul>
          <nav aria-label="Social links" className="flex items-center gap-4">
            {socialLinks.map(({ label, Icon }) => (
              <a
                key={label}
                href="#contact"
                aria-label={label}
                className="transition-transform hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-2">
            <Heart aria-label="Meliora logo" className="h-7 w-7 fill-primary text-primary" />
            <span className="font-serif text-2xl font-bold text-plum">Meliora</span>
          </a>
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-plum transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="#donate"
              className="hidden rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700 sm:inline-block"
            >
              Donate Now
            </a>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="text-plum lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <nav aria-label="Mobile navigation" className="border-t border-cardline lg:hidden">
            <ul className="flex flex-col px-4 py-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block py-3 text-sm font-medium text-plum transition-colors hover:text-primary',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
