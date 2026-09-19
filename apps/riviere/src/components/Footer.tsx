const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Offers & Discounts', href: '#offers' },
  { label: 'Get Coupon', href: '#coupon' },
  { label: 'Contact Us', href: '#contact' },
]

const newProducts = [
  { label: 'Women Cloth', href: '#women-cloth' },
  { label: 'Fashion Accessories', href: '#fashion-acc' },
  { label: 'Man Accessories', href: '#man-acc' },
  { label: 'Rubber Made Toys', href: '#rubber-toys' },
]

const support = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Terms & Conditions', href: '#terms' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Report a Payment Issue', href: '#report' },
]

function SocialIcon({ label, href, path }: { label: string; href: string; path: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-mist transition-colors hover:bg-brand hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-brand"
    >
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  )
}

export function Footer() {
  return (
    <footer className="bg-paper dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <span className="font-[var(--font-heading)] text-2xl font-bold text-ink dark:text-white">
              Riviere
            </span>
            <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
              Your destination for the latest fashion trends. Quality clothing and accessories at
              affordable prices.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-[var(--font-heading)] mb-4 text-lg font-semibold text-ink dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-mist transition-colors hover:text-brand dark:text-gray-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: New Products */}
          <div>
            <h3 className="font-[var(--font-heading)] mb-4 text-lg font-semibold text-ink dark:text-white">
              New Products
            </h3>
            <ul className="space-y-2">
              {newProducts.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-mist transition-colors hover:text-brand dark:text-gray-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="font-[var(--font-heading)] mb-4 text-lg font-semibold text-ink dark:text-white">
              Support
            </h3>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-mist transition-colors hover:text-brand dark:text-gray-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <p className="text-xs text-meta dark:text-gray-500">
            &copy; {new Date().getFullYear()} Riviere. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <SocialIcon
              label="Twitter"
              href="https://twitter.com"
              path="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
            />
            <SocialIcon
              label="Facebook"
              href="https://facebook.com"
              path="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
            />
            <SocialIcon
              label="Behance"
              href="https://behance.net"
              path="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8zm11-4a4 4 0 110 8 4 4 0 010-8z"
            />
            <SocialIcon
              label="Website"
              href="#"
              path="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
            />
          </div>
          <p className="text-xs text-meta dark:text-gray-500">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
