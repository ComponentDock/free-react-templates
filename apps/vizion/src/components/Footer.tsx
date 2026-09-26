import { FacebookIcon, TwitterIcon, InstagramIcon } from './SocialIcons'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
]

const socialLinks = [
  { Icon: FacebookIcon, href: '#', label: 'Facebook' },
  { Icon: TwitterIcon, href: '#', label: 'Twitter' },
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <ul className="flex gap-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex gap-4">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  className="text-body transition-colors hover:text-brand"
                >
                  <link.Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 text-center">
          <p className="text-sm text-body">
            &copy; {new Date().getFullYear()} All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
