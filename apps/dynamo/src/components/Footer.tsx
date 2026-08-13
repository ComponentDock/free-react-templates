import { MapPin, Phone, Mail } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import { footerAbout, ourSolutions, site, socialLinks, usefulResources } from '../data'

export function Footer() {
  return (
    <footer data-section="footer" className="bg-ink-800">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
            About {site.name}
          </h3>
          <p className="text-sm leading-relaxed text-muted-600">{footerAbout}</p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-muted-600 transition-colors hover:border-primary-600 hover:text-primary-600"
              >
                <BrandIcon name={social.label as 'Facebook'} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
            Useful Resources
          </h3>
          <ul className="space-y-2.5">
            {usefulResources.map((item) => (
              <li key={item}>
                <a
                  href="#about"
                  className="text-sm text-muted-600 transition-colors hover:text-primary-600"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
            Our Solutions
          </h3>
          <ul className="space-y-2.5">
            {ourSolutions.map((item) => (
              <li key={item}>
                <a
                  href="#solutions"
                  className="text-sm text-muted-600 transition-colors hover:text-primary-600"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
            Contact Us
          </h3>
          <ul className="space-y-3.5 text-sm text-muted-600">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
              <span>
                <span>{site.addressLine1}</span>
                <br />
                <span>{site.addressLine2}</span>
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
              <span>{site.phone}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
              <span>{site.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-ink-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-500 md:flex-row">
          <p className="pt-1">
            © {new Date().getFullYear()} {site.name}. All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-muted-500 underline decoration-primary-600 underline-offset-4 transition-colors hover:text-primary-600"
            >
              Component Dock
            </a>
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-5">
              {['Home', 'About us', 'Solutions', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-muted-500 transition-colors hover:text-primary-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
