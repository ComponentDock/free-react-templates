export function Footer() {
  return (
    <footer className="bg-bg-dark py-16 text-gray-300" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-heading text-xl font-semibold uppercase text-white">
              Regalia
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Experience luxury hospitality at its finest. Our hotel offers world-class amenities,
              exquisite dining, and unparalleled service.
            </p>
            <div className="flex gap-3">
              {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-xs text-gray-300 hover:bg-accent-gold hover:text-white"
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Accommodation', 'Dining & Bar', 'Restaurants', 'Beach & Resorts'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-accent-gold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Blog */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-white">Recent Posts</h4>
            <ul className="space-y-3">
              {[
                'Top 10 Hidden Gems in the City',
                'A Guide to Fine Dining',
                'Wellness Retreats Guide',
              ].map((title) => (
                <li key={title}>
                  <a href="#" className="text-sm text-gray-400 hover:text-accent-gold">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Luxury Avenue, Resort City</li>
              <li>
                <a href="tel:+1234567890" className="hover:text-accent-gold">
                  +1 234 567 890
                </a>
              </li>
              <li>
                <a href="mailto:info@regalia.com" className="hover:text-accent-gold">
                  info@regalia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Regalia. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-accent-gold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
