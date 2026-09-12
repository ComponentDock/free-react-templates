import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'Twitter', href: '#', Icon: TwitterIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'LinkedIn', href: '#', Icon: LinkedinIcon },
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Packages', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-navy-800 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-xl font-extrabold uppercase tracking-wider text-signal-400"
            >
              Blinkwave
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Fast, reliable internet for homes and businesses. Powered by next-generation fiber
              optics.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-signal-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Newsletter</h4>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe for the latest deals, speed upgrades, and service news.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex overflow-hidden rounded-[0_10px] bg-white/10"
            >
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email for newsletter"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="bg-signal-400 px-6 text-sm font-bold text-white transition-colors hover:bg-signal-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Blinkwave. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-signal-400 underline transition-colors hover:text-signal-300"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
