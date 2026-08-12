import { Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './social-icons'

const socials = [
  { label: 'Twitter', href: 'https://twitter.com/', icon: TwitterIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: FacebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: InstagramIcon },
] as const

const communityLinks = ['Search Properties', 'For Agents', 'Reviews', 'FAQs'] as const
const aboutLinks = ['Our Story', 'Meet the team', 'Careers'] as const
const companyLinks = ['About Us', 'Press', 'Contact', 'Careers'] as const

/**
 * Footer — gold `#d4ca68` footer (source `.ftco-footer`): brand column with
 * blurb + social circles, three link columns (Community / About Us /
 * Company), a "Have a Questions?" contact column, and a copyright bar that
 * credits Component Dock.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-brand text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a href="#home" aria-label="Keyhold home" className="text-xl font-bold text-white">
              Keyhold
            </a>
            <p className="mt-4 text-sm leading-relaxed text-footer-link">
              Keyhold helps you find, compare, and close on properties that make you money — with no
              downpayment options and agents in your corner.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 transition-colors hover:bg-white hover:text-brand"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Community">
            <h2 className="text-lg font-normal text-white">Community</h2>
            <ul className="mt-4 space-y-2.5">
              {communityLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#listing"
                    className="text-sm text-footer-link transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="About us links">
            <h2 className="text-lg font-normal text-white">About Us</h2>
            <ul className="mt-4 space-y-2.5">
              {aboutLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#about"
                    className="text-sm text-footer-link transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company links">
            <h2 className="text-lg font-normal text-white">Company</h2>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#contact"
                    className="text-sm text-footer-link transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-lg font-normal text-white">Have a Questions?</h2>
            <ul className="mt-4 space-y-3 text-sm text-footer-link">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href="tel:+23923929210" className="transition-colors hover:text-white">
                  +2 392 3929 210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href="mailto:info@yourdomain.com" className="transition-colors hover:text-white">
                  info@yourdomain.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/25">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-white/90 sm:flex-row lg:px-8">
          <p>© {year} Keyhold. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold underline underline-offset-2 transition-colors hover:text-ink"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
