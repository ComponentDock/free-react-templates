import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const quickLinks = ['Home', 'About', 'Services', 'Blog', 'Contact']
const varieties = ['Blackforest', 'Chocolate', 'Red Velvet', 'Cheesecake', 'Tiramisu']

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="font-heading text-xl font-bold text-brand">
              Batterly
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Freshly baked cakes and pastries crafted with love. Visit us or order online for
              delivery.
            </p>
            <ul className="mt-4 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-gray-900">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-500 transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cake Varieties */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-gray-900">
              Our Cakes
            </h3>
            <ul className="mt-4 space-y-2">
              {varieties.map((v) => (
                <li key={v}>
                  <a
                    href="#product"
                    className="text-sm text-gray-500 transition-colors hover:text-brand"
                  >
                    {v}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-gray-900">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li>123 Bakery Street, Sweet City, SC 12345</li>
              <li>
                <a href="tel:+10567453095" className="hover:text-brand">
                  +10 (56) 745 3095
                </a>
              </li>
              <li>
                <a href="mailto:hello@batterly.com" className="hover:text-brand">
                  hello@batterly.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-brand/10">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-gray-400 sm:flex-row">
            <p>
              &copy; {new Date().getFullYear()} Batterly. Made with
              <span className="mx-1 text-brand">&hearts;</span> for cake lovers.
            </p>
            <p>
              More templates at{' '}
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
      </div>
    </footer>
  )
}
