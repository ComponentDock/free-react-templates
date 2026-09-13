import { BRAND, FOOTER_ABOUT, FOOTER_NAV_LEFT, FOOTER_NAV_RIGHT } from '../data'
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from './icons'

const SOCIALS = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: LinkedinIcon, label: 'LinkedIn' },
  { Icon: InstagramIcon, label: 'Instagram' },
]

/* Footer — dark bg, four-column layout: About Us, Navigation,
   Follow Us (social icons), and copyright bar crediting Component Dock. */
export function Footer() {
  return (
    <footer className="bg-dark px-4 py-16 text-sm text-white/70">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="pb-3 text-lg font-bold text-white">About Us</h3>
          <p className="mt-4 leading-relaxed">{FOOTER_ABOUT}</p>
          <a
            href="#home-section"
            className="mt-6 inline-block rounded-full border border-white/20 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-dark"
          >
            Learn more
          </a>
        </div>
        <div>
          <h3 className="pb-3 text-lg font-bold text-white">Navigation</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {FOOTER_NAV_LEFT.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
            {FOOTER_NAV_RIGHT.map((link) => (
              <li key={`r-${link.label}`}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="pb-3 text-lg font-bold text-white">Follow Us</h3>
          <ul className="mt-4 flex gap-3">
            {SOCIALS.map(({ Icon, label }) => (
              <li key={label}>
                <a
                  href="#home-section"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="pb-3 text-lg font-bold text-white">Contact Info</h3>
          <div className="mt-4 space-y-3">
            <p>198 West 21th Street, Suite 721 New York, NY 10016</p>
            <p>+1 234 567 890</p>
            <p>info@maxim.com</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-8 text-center text-xs text-white/50">
        <p>
          <a href="#home-section" className="font-bold text-brand">
            {BRAND}.
          </a>{' '}
          Copyright &copy;{new Date().getFullYear()} All rights reserved | Made with love — more
          templates at{' '}
          <a href="https://www.componentdock.com/" className="text-brand">
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
