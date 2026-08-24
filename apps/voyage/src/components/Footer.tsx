import { MapPin, Phone, Mail } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'LinkedIn', name: 'linkedin' },
  { label: 'YouTube', name: 'youtube' },
  { label: 'TikTok', name: 'tiktok' },
]

const quickLinks = ['About us', 'Services', 'News', 'Careers', 'Contact'] as const

const companyLinks = ['About us', 'Services', 'News', 'Careers', 'Contact'] as const

export function Footer() {
  return (
    <footer className="bg-footer text-gray-600 transition-colors dark:bg-gray-900 dark:text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* About */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-lg font-bold text-ink dark:text-white">
              About Voyage.
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-heading text-lg font-bold text-ink dark:text-white">Connect</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href="#home"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-brand hover:bg-brand hover:text-white dark:border-gray-700 dark:text-gray-400"
                  >
                    <BrandIcon name={social.name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-ink dark:text-white">Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#home" className="transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-lg font-bold text-ink dark:text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#home" className="transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold text-ink dark:text-white">Contact</h3>
            <address className="mt-4 not-italic text-sm leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                43 Raymouth Rd. Baltemoer, London 3910
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="tel:+11234567890"
                    className="flex items-center gap-2 transition-colors hover:text-brand"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    +1(123)-456-7890
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+11234567891"
                    className="flex items-center gap-2 transition-colors hover:text-brand"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    +1(123)-456-7891
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@mydomain.com"
                    className="flex items-center gap-2 transition-colors hover:text-brand"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    info@mydomain.com
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 py-5 text-center text-sm dark:border-gray-700">
        <p>
          © {new Date().getFullYear()} Voyage Travel. All rights reserved. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand transition-colors hover:text-brand-dark"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
