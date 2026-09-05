import { FacebookIcon, TwitterIcon, LinkedinIcon, GooglePlusIcon } from './social-icons'

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'LinkedIn', Icon: LinkedinIcon },
  { label: 'Google Plus', Icon: GooglePlusIcon },
]

const serviceLinks = ['Home', 'About Us', 'Our Works', 'Contact', 'News']

export function Footer() {
  return (
    <footer id="contact" className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & hours */}
          <div>
            <a href="#home" className="text-xl font-bold uppercase tracking-widest text-charcoal">
              Structura
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Lorem Ipsum available but the majority have suffered alteration in some form by
              injected humour.
            </p>
            <h4 className="mt-4 text-sm font-semibold text-charcoal">Working Hours:</h4>
            <p className="mt-1 text-xs text-gray-500">Mon - Sat 8:00 - 18:00 (Sunday off)</p>
            <div className="mt-4 flex gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-charcoal text-white transition-colors hover:bg-lime-accent hover:text-charcoal"
                >
                  <Icon className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-charcoal">
              Get In Touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>1265 North Avenue Luke Lane, South Bend, IN 360025</li>
              <li>+012 549 594</li>
              <li>support@email.com</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-charcoal">
              Services
            </h4>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 transition-colors hover:text-lime-accent"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-charcoal">
              Newsletter
            </h4>
            <p className="mt-4 text-sm text-gray-500">
              Lorem Ipsum available, but the majority have suffered alteration some.
            </p>
            <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 border border-gray-300 bg-white px-3 py-2 text-sm text-charcoal placeholder:text-gray-400 focus:border-lime-accent focus:outline-none"
              />
              <button
                type="submit"
                className="bg-charcoal px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-lime-accent hover:text-charcoal"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 bg-charcoal py-4">
        <div className="mx-auto max-w-6xl px-4 text-center text-xs text-white/60 sm:px-6">
          &copy; {new Date().getFullYear()} Structura. All rights reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-medium text-lime-accent hover:underline"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
