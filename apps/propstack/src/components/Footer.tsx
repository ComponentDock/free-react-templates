export function Footer() {
  return (
    <footer className="bg-footer-bg py-16 text-gray-400 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Propstack</h3>
            <p className="text-sm leading-relaxed">
              Your trusted partner in finding the perfect property. We connect buyers with their
              dream homes across prime locations.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="#home" className="transition-colors hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#properties" className="transition-colors hover:text-white">
                  Properties
                </a>
              </li>
              <li>
                <a href="#agents" className="transition-colors hover:text-white">
                  Agents
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#news" className="transition-colors hover:text-white">
                  News
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Subscribe</h3>
            <p className="mb-4 text-sm">
              Sign up for our newsletter to receive the latest property listings and market
              insights.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full border border-gray-600 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Propstack. All rights reserved.{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-gray-400 underline transition-colors hover:text-white"
            >
              More templates at Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
