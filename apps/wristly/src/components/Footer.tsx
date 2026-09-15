import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <h6 className="mb-3 font-semibold">About Us</h6>
            <p className="mb-4 text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore dolore magna aliqua.
            </p>
            <p className="text-sm text-gray-500">
              More templates at{' '}
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-accent underline hover:text-white"
              >
                Component Dock
              </a>
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="mb-3 font-semibold">Newsletter</h6>
            <p className="mb-3 text-sm text-gray-400">Stay updated with our latest</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter Email"
                aria-label="Email for newsletter"
                className="flex-1 rounded-l-full bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-accent"
              />
              <button
                type="submit"
                className="rounded-r-full bg-brand-500 px-5 py-2 text-sm font-medium text-white hover:bg-brand-600"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social */}
          <div>
            <h6 className="mb-3 font-semibold">Follow Us</h6>
            <p className="mb-3 text-sm text-gray-400">Let us be social</p>
            <ul className="flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-500"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
