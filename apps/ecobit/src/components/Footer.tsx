import { SocialLinks } from './SocialLinks'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const

const accountLinks = ['Sign up', 'My Account', 'Login', 'Support'] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-fog py-16 text-gray-600 dark:bg-gray-950 dark:text-gray-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-ink dark:text-white">About Ecobit</h2>
            <p className="mt-4 text-sm leading-relaxed text-body dark:text-gray-400">
              Ecobit helps teams build networks for people — simple tools, honest pricing, and
              support that never sleeps.
            </p>
            <div className="mt-6">
              <SocialLinks inverted />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink dark:text-white">Quick Links</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink dark:text-white">My Account</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {accountLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#contact"
                    className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 sm:flex-row sm:justify-between dark:border-gray-800">
          <p>Copyright © {new Date().getFullYear()} Ecobit. All rights reserved.</p>
          <p>
            Made with <span aria-hidden="true">♥</span> by Ecobit
          </p>
        </div>
      </div>
    </footer>
  )
}
