export function Footer() {
  return (
    <footer className="bg-heading text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-bold mb-4">
              Domicile<span className="text-brand">.</span>
            </h2>
            <p className="text-sm text-white/60 mb-4">
              Find your dream home with us. We offer the best properties in prime locations.
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com/"
                aria-label="Twitter"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-colors"
              >
                <span className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-colors"
              >
                <span className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-colors"
              >
                <span className="fa fa-linkedin" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/60">
              {['Home', 'Properties', 'Blog', 'About', 'Contact'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <span className="fa fa-map-marker text-brand mt-0.5" aria-hidden="true" />
                <span>203 Fake St. Mountain View, San Francisco, CA</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="fa fa-phone text-brand" aria-hidden="true" />
                <a href="tel:+210239233922" className="hover:text-white transition-colors">
                  +2 102 3923 3922
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="fa fa-envelope text-brand" aria-hidden="true" />
                <a href="mailto:info@domain.com" className="hover:text-white transition-colors">
                  info@domain.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-white/60 mb-3">Subscribe to get updates on new listings.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-l text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                className="bg-brand px-4 py-2 text-sm font-semibold rounded-r hover:bg-brand-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="fa fa-heart text-red-500" aria-hidden="true" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
