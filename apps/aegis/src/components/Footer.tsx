import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const solutionsLinks = [
  'Endpoint Protection',
  'Cloud Security',
  'Identity Protection',
  'Threat Intelligence',
] as const

const resourcesLinks = ['Documentation', 'Security Blog', 'Threat Reports', 'Webinars'] as const
const companyLinks = ['About', 'Careers', 'Contact', 'Partners'] as const
const legalLinks = ['Privacy Policy', 'Terms of Service', 'Style Guide'] as const

const socials = [
  { name: 'Twitter', icon: 'twitter' as const },
  { name: 'LinkedIn', icon: 'linkedin' as const },
  { name: 'GitHub', icon: 'github' as const },
] as const

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2" aria-label="Aegis home">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">Aegis</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Advanced threat protection platform for modern teams. Detect, prevent, and respond to
              cyber threats in real time.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href="#home"
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    <BrandIcon name={social.icon} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                Solutions
              </h3>
              <ul className="mt-4 space-y-3">
                {solutionsLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#solutions"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                {resourcesLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#faq"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Company</h3>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="tel:+1555678901"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  (555) 567-8901
                </a>
              </li>
              <li>
                <a
                  href="mailto:security@aegis.io"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  security@aegis.io
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  1200 Cyber Defense Blvd
                  <span className="block">Washington, DC 20001</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Aegis. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <li key={link}>
                <a
                  href="#home"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
