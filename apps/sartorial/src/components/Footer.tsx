const quickLinks = ['Home', 'About Us', 'Our History', 'Contact']

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-midnight pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-display text-xl font-bold text-white">Sartorial</h3>
            <p className="leading-relaxed text-mist">
              The art of bespoke tailoring. Crafting garments that define elegance and individuality
              since 1999.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-sm text-mist transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-mist">
              Be the first to know about new collections and exclusive offers.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 border border-gray-700 bg-transparent px-4 py-3 text-sm text-white placeholder-mist focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="border border-brand bg-brand px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-mist">
            &copy; {new Date().getFullYear()} Sartorial. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:text-brand-dark"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-mist transition-colors hover:text-brand"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-mist transition-colors hover:text-brand"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-mist transition-colors hover:text-brand"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
