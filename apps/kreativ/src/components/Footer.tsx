import { Sparkles } from 'lucide-react'
import { DribbbleIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './social-icons'

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const services = ['Web Design', 'Mobile Apps', 'Brand Identity', 'Digital Marketing']

const socials = [
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
  { label: 'Dribbble', href: 'https://dribbble.com', Icon: DribbbleIcon },
]

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Kreativ
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              We craft bold digital experiences that captivate audiences and drive results.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 text-gray-600 transition-colors hover:bg-primary-500 hover:text-white dark:bg-gray-800 dark:text-gray-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="mailto:hello@kreativ.studio"
                  className="transition-colors hover:text-primary-500"
                >
                  hello@kreativ.studio
                </a>
              </li>
              <li>
                <a href="tel:+15559876543" className="transition-colors hover:text-primary-500">
                  (555) 987-6543
                </a>
              </li>
              <li>
                456 Creative Ave, Suite 200
                <br />
                Los Angeles, CA 90028
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2026 Kreativ. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-sm text-gray-500 transition-colors hover:text-primary-500 dark:text-gray-400"
            >
              Privacy Policy
            </a>
            <a
              href="#home"
              className="text-sm text-gray-500 transition-colors hover:text-primary-500 dark:text-gray-400"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
