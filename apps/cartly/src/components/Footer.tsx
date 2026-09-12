import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const footerLinks = {
  'Useful Links': [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
    { label: 'Services', href: '#' },
  ],
  Products: [
    { label: 'Sneakers', href: '#' },
    { label: 'Purses', href: '#' },
    { label: 'Watches', href: '#' },
    { label: 'T-Shirts', href: '#' },
  ],
}

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h4 className="mb-4 font-heading text-base font-bold uppercase">Cartly</h4>
            <p className="text-sm leading-relaxed text-neutral-400">
              An ecommerce landing template recreated in React with Tailwind CSS. Fresh products,
              clean design.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-heading text-base font-bold uppercase">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Follow */}
          <div>
            <h4 className="mb-4 font-heading text-base font-bold uppercase">Follow Us</h4>
            <div className="flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded bg-white/10 text-white transition-colors hover:bg-lime-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Cartly. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-bold text-lime-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
          <ul className="flex gap-4 text-xs text-neutral-400">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
