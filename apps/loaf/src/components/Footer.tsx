import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* About Us */}
          <div>
            <h3 className="mb-4 text-lg font-bold">About Us</h3>
            <p className="mb-6 text-sm text-white/60">
              Loaf Bakery is a family-owned business dedicated to bringing you the freshest, most
              delicious baked goods. We use traditional recipes and modern techniques to create
              items that bring joy to your table.
            </p>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Mon – Fri: 7am – 8pm</li>
              <li>Saturday: 8am – 6pm</li>
              <li>Sunday: 9am – 5pm</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Newsletter</h3>
            <p className="mb-4 text-sm text-white/60">
              Subscribe to our newsletter and get the latest updates on our freshly baked items and
              special offers.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                className="rounded-full bg-brand px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
            <p className="mb-6 text-sm text-white/60">
              Stay connected with us on social media for daily inspiration, behind-the-scenes
              content, and exclusive offers.
            </p>
            <ul className="flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Loaf Bakery. All rights reserved.{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              More templates at Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
