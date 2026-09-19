const infoLinks = [
  'About Us',
  'My Account',
  'Returns & Exchanges',
  'Order Tracking',
  'Privacy Policy',
  'Terms & Conditions',
]
const serviceLinks = ['Shop', 'Contact Us', 'Shipping Policy', 'Returns Policy', 'FAQs', 'Blog']

export function Footer() {
  return (
    <footer className="bg-dark-deep text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-extrabold mb-4">Threadcraft</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              123 Fashion Ave
              <br />
              Style City, ST 12345
              <br />
              United States
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Information</h4>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-text-secondary hover:text-brand transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-text-secondary hover:text-brand transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Newsletter</h4>
            <p className="text-sm text-text-secondary mb-3">
              Subscribe for exclusive deals and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-2 rounded-l bg-dark text-sm text-white placeholder:text-text-secondary focus:outline-none"
              />
              <button className="bg-brand hover:bg-brand-light text-dark-deep font-bold px-4 py-2 rounded-r text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-xs text-text-secondary">
          &copy; 2026 Threadcraft. All rights reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
