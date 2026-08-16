import { Coffee } from 'lucide-react'
import { address, footerLinks, phoneDisplay, phoneHref, socials } from '../data'

/* Cream footer: Contact Us column, brand column with circular social
   icons (side borders), Navigation column, and a black-on-cream
   copyright bar carrying the Component Dock credit (repo convention —
   replaces any external attribution). */
export function Footer() {
  return (
    <footer className="bg-cream pt-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 pb-12 text-center md:grid-cols-3 md:text-left">
          <div>
            <h2 className="text-xl font-normal text-navy">Contact Us</h2>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href={phoneHref} className="inline-block transition-colors hover:text-copper">
                  {phoneDisplay}
                </a>
              </li>
              <li>{address}</li>
            </ul>
          </div>

          <div className="border-y border-[rgba(125,96,84,0.2)] py-8 md:border-x md:border-y-0 md:px-10">
            <p className="flex items-center justify-center gap-2">
              <Coffee className="h-6 w-6 text-copper" aria-hidden="true" />
              <span className="font-display text-2xl font-semibold text-navy">Beanery</span>
              <span className="mt-1 text-[10px] uppercase tracking-widest text-copper">
                EST. 1985
              </span>
            </p>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed">
              Duis congue sapien eget nibh consequat — a neighbourhood roastery, bakery and
              gathering place since 1985.
            </p>
            <ul className="mt-6 flex justify-center gap-3" aria-label="Footer social links">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/10 text-navy transition-colors hover:bg-copper hover:text-white"
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

          <div>
            <h2 className="text-xl font-normal text-navy">Navigation</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="inline-block transition-colors hover:text-copper">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(125,96,84,0.2)] py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 text-center text-sm text-[#928888] md:flex-row lg:px-8">
          <p>Copyright © {new Date().getFullYear()} All rights reserved | Beanery</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-navy transition-colors hover:text-copper"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
