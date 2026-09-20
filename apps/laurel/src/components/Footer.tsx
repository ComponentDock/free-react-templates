import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from './social-icons'

const quickLinks = ['About', 'Service', 'Team', 'Privacy Policy', 'Testimonials', 'Support']

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Logo + description */}
          <div>
            <a href="#home" className="font-heading text-xl font-semibold tracking-wide text-white">
              Laurel
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Laurel is a leading online education platform dedicated to making quality learning
              accessible to everyone. Join our community and start your journey today.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Newsletter
            </h4>
            <p className="mt-4 text-sm text-gray-400">
              Subscribe to get updates on new courses and offers.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 rounded-[5px] bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="rounded-[5px] bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Laurel. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with ❤ by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline transition-colors hover:text-accent"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
