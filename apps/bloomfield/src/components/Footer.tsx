import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

const footerLinks = {
  Company: ['About us', 'Services', 'Contact us'],
  Account: ['My cart', 'Wishlist', 'Login/Register'],
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <a
            href="#home"
            className="text-xl font-bold uppercase tracking-widest text-bloom-300"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Bloomfield
          </a>
          <p className="max-w-md text-sm text-gray-400">
            The floristry business has a significant market in the corporate and social event world,
            as flowers
          </p>
          <ul className="flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-bloom-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Links section */}
      <div className="border-t border-gray-800">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="mb-4 text-base font-bold text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 transition-colors hover:text-bloom-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4
              className="mb-4 text-base font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to our newsletter to get more free tips. No Spam, Promise.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 rounded-l-full bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-bloom-400"
              />
              <button
                type="submit"
                className="rounded-r-full bg-bloom-400 px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-bloom-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright + ComponentDock */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center sm:px-6">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Bloomfield. All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bloom-400 underline transition-colors hover:text-bloom-300"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
