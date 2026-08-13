import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import { footer, socials } from '../data'
import { BrandIcon } from './BrandIcon'

/** Footer (reference `.ftco-footer-2`): dark #232931 band with the brand +
 *  blurb + social icons, a "Have a Questions?" contact widget, link
 *  columns, and a copyright bar with the Component Dock attribution. */
export function Footer() {
  return (
    <footer id="contact" className="bg-slate pt-20 pb-8 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-xl font-black">{footer.brand}</h2>
          <p className="mt-5 leading-relaxed text-white/70">{footer.blurb}</p>
          <ul className="mt-6 flex items-center gap-4">
            {socials.map(({ label, name }) => (
              <li key={label}>
                <a
                  href="#contact"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-black"
                >
                  <BrandIcon name={name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold">Have a Questions?</h2>
          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span className="text-white/70">{footer.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <a
                href="tel:+23923929210"
                className="text-white/70 transition-colors hover:text-white"
              >
                {footer.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <a
                href="mailto:info@yourdomain.com"
                className="text-white/70 transition-colors hover:text-white"
              >
                {footer.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold">Links</h2>
          <ul className="mt-5 space-y-3">
            {footer.links.map((link) => (
              <li key={link}>
                <a href="#home" className="text-white/70 transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="mt-5 space-y-3">
            {footer.links.map((link) => (
              <li key={link}>
                <a href="#home" className="text-white/70 transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 border-t border-white/10 px-4 pt-8">
        <p className="text-center text-sm text-white/70">
          Copyright &copy; 2026 All rights reserved | Made with{' '}
          <Heart className="inline h-4 w-4 text-gold" aria-hidden="true" /> at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-white underline transition-colors hover:text-gold"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
