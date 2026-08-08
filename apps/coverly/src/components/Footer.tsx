import { Mail, Phone, Shield } from 'lucide-react'

const coverageLinks = [
  'Auto Insurance',
  'Home Insurance',
  'Life Insurance',
  'Health Insurance',
  'Business Insurance',
] as const

const resourcesLinks = ['Blog', 'FAQ', 'Claims', 'File a Claim'] as const
const companyLinks = ['About', 'Careers', 'Licensing', 'Contact'] as const
const legalLinks = ['Privacy Policy', 'Terms of Service', 'Style Guide'] as const

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2" aria-label="ShieldGuard home">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white">
                <Shield className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">ShieldGuard</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Comprehensive insurance solutions that protect what matters most — your family, your
              home, and your future.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                Coverage
              </h3>
              <ul className="mt-4 space-y-3">
                {coverageLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#coverage"
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
                  href="tel:+15555678901"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  (555) 567-8901
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@shieldguard.com"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  info@shieldguard.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ShieldGuard. All rights reserved.
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
