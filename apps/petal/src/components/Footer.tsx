import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'
import { Send } from 'lucide-react'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

const quickLinks = ['About Us', 'Shop', 'Contact', 'Blog']
const services = ['Fresh Flowers', 'Gift Delivery', 'Event Decor', 'Subscriptions']

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <a href="#home" className="mb-4 block text-2xl font-bold text-rose-400">
              Petal
            </a>
            <p className="mb-4 text-sm text-gray-400">
              The floristry business has a significant market in the corporate and social event
              world, as flowers are a popular choice for decoration.
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-rose-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-base font-bold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-rose-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-bold">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-rose-400"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-bold">Newsletter</h4>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to get updates on new arrivals and special offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex"
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-l bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-rose-400"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center rounded-r bg-rose-400 px-4 text-white hover:bg-rose-500"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Petal. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
