import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer data-testid="footer" className="bg-footer-bg text-footer-text pt-24 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Address */}
          <div>
            <h4 className="text-white text-lg font-medium mb-5">Address</h4>
            <div className="flex items-start gap-3 mb-4">
              <MapPin size={18} className="text-social mt-1 shrink-0" />
              <p className="text-sm leading-relaxed">
                200, Green road, Mongla,
                <br />
                New York City, USA
              </p>
            </div>
            <a
              href="#"
              className="inline-block text-muted text-sm hover:text-brand transition-colors border-b border-muted hover:border-brand pb-0.5"
            >
              Get Direction
            </a>
          </div>

          {/* Reservation */}
          <div>
            <h4 className="text-white text-lg font-medium mb-5">Reservation</h4>
            <div className="flex items-start gap-3 mb-3">
              <Phone size={18} className="text-social mt-0.5 shrink-0" />
              <span className="text-sm">+10 367 267 2678</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-social mt-0.5 shrink-0" />
              <span className="text-sm">reservation@highland.com</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-lg font-medium mb-5">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'Rooms', 'About', 'News'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-footer-text hover:text-brand transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-medium mb-5">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe newsletter to get updates</p>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white text-heading px-4 py-3 text-sm pr-24"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bottom-0 bg-brand text-white px-5 text-sm font-semibold hover:bg-brand-hover transition-colors"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} Highland Resort. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
