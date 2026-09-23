import { Send } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#262626] py-20 text-white/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* About */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">
              About Polygon
            </h4>
            <p className="leading-relaxed">
              We are a creative architecture and design studio dedicated to transforming spaces into
              inspiring environments that reflect modern living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Links */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">
              Follow Links
            </h4>
            <ul className="space-y-3">
              {['Instagram', 'Facebook', 'Twitter', 'LinkedIn', 'Dribbble'].map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">
              Subscribe
            </h4>
            <p className="mb-4">
              Get the latest news and design inspiration delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex"
              aria-label="Newsletter subscription"
            >
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                className="flex-1 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-brand px-4 text-white transition-colors hover:bg-brand-dark"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Polygon. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
