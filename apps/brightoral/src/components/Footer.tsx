import { Mail, MapPin, Phone } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Services', 'Appointment', 'Blog', 'Contact']

export function Footer() {
  return (
    <footer className="bg-footer text-footer-muted">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              About Brightoral
            </h3>
            <p className="mb-4 text-sm leading-relaxed">
              We are a dedicated dental clinic providing comprehensive oral healthcare services with
              state-of-the-art equipment and a compassionate team.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-footer-link transition-colors hover:text-white"
              >
                Component Dock
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-footer-link transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent News */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Recent News
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-footer-link transition-colors hover:text-white">
                  Tips for Healthy Gums
                </a>
                <p className="mt-1 text-xs">March 15, 2025</p>
              </li>
              <li>
                <a href="#" className="text-sm text-footer-link transition-colors hover:text-white">
                  Modern Teeth Whitening
                </a>
                <p className="mt-1 text-xs">March 10, 2025</p>
              </li>
              <li>
                <a href="#" className="text-sm text-footer-link transition-colors hover:text-white">
                  Children Dental Care Guide
                </a>
                <p className="mt-1 text-xs">March 5, 2025</p>
              </li>
            </ul>
          </div>

          {/* Subscribe + Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Subscribe Newsletter
            </h3>
            <p className="mb-4 text-sm">Stay updated with our latest news and dental tips.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mb-6 flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 px-3 py-2 text-sm text-white placeholder-footer-muted focus:outline-none"
              />
              <button
                type="submit"
                className="bg-brand px-4 py-2 text-sm text-white transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </form>

            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">
              Follow Us
            </h3>
            <div className="flex gap-4 text-footer-link">
              <a href="#" aria-label="Email" className="transition-colors hover:text-white">
                <Mail size={16} />
              </a>
              <a href="#" aria-label="Phone" className="transition-colors hover:text-white">
                <Phone size={16} />
              </a>
              <a href="#" aria-label="Location" className="transition-colors hover:text-white">
                <MapPin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-xs text-footer-muted">
          &copy; {new Date().getFullYear()} Brightoral. All rights reserved. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-footer-link transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
