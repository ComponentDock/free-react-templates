import { useState } from 'react'
import { ChevronDown, Coffee, MapPin, Menu, Phone, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { address, blogSubLinks, navLinks, phoneDisplay, phoneHref, socials } from '../data'

/* Fixed dark left sidebar (300px wide on wide screens; off-canvas drawer
   below 1600px with a hamburger/close pair). Carries the logo, uppercase
   nav links (Blog expands into a dropdown), an outlined order button,
   contact details and brand social icons. */
export function Sidebar() {
  const [open, setOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="fixed left-4 top-5 z-50 text-white min-[1600px]:hidden"
      >
        <Menu className="h-7 w-7" aria-hidden="true" />
      </button>

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-[300px] -translate-x-full flex-col bg-navy px-8 pb-6 pt-10 transition-transform duration-300',
          'min-[1600px]:translate-x-0',
          open && 'translate-x-0',
        )}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-white/70 transition-colors hover:text-white min-[1600px]:hidden"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>

        <nav aria-label="Main navigation" className="flex flex-1 flex-col">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2"
          >
            <Coffee className="h-7 w-7 text-copper" aria-hidden="true" />
            <span className="font-display text-2xl font-semibold text-white">Beanery</span>
            <span className="mt-1 text-[10px] uppercase tracking-widest text-white/50">
              EST. 1985
            </span>
          </a>

          <ul className="mt-10 space-y-1">
            {navLinks.map((link) =>
              link.label === 'Blog' ? (
                <li key={link.label} className="text-center">
                  <button
                    type="button"
                    aria-expanded={blogOpen}
                    onClick={() => setBlogOpen((value) => !value)}
                    className="flex w-full items-center justify-center gap-1 py-2.5 text-sm font-normal uppercase tracking-wide text-links transition-colors hover:text-copper"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn('h-4 w-4 transition-transform', blogOpen && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                  {blogOpen && (
                    <ul className="mt-1 space-y-1 border-l border-white/10 pb-2 pl-4 text-left">
                      {blogSubLinks.map((sub) => (
                        <li key={sub.label}>
                          <a
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="block py-1.5 pl-2 text-xs uppercase tracking-wide text-white/60 transition-colors hover:text-copper"
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label} className="text-center">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm font-normal uppercase tracking-wide text-links transition-colors hover:text-copper"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="mt-auto space-y-4 text-center">
          <a href="#contact" className="btn-outline block text-[15px] uppercase">
            Order Online
          </a>
          <p>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-copper"
            >
              <Phone className="h-4 w-4 text-copper" aria-hidden="true" />
              {phoneDisplay}
            </a>
          </p>
          <p className="flex items-center justify-center gap-2 text-sm text-white/60">
            <MapPin className="h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
            {address}
          </p>
          <ul className="flex justify-center gap-3 pt-2" aria-label="Social media">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-copper hover:text-copper"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}
