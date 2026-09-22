export function Footer() {
  return (
    <footer className="bg-white py-16" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-heading text-xl font-semibold uppercase text-black">
              LuxStay
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-text-body">
              Experience luxury hospitality at its finest. Our hotel offers world-class amenities,
              exquisite dining, and unparalleled service.
            </p>
            <div className="flex gap-3">
              {['Twitter', 'Facebook', 'LinkedIn', 'Dribbble'].map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-icon-circle text-xs text-brand-blue hover:bg-brand-blue hover:text-white"
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-black">Quick Links</h4>
            <ul className="space-y-2">
              {['Accommodation', 'Dining & Bar', 'Restaurants', 'Beach & Resorts'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-text-body hover:text-brand-blue">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Blog */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-black">Recent Blog Posts</h4>
            <ul className="space-y-3">
              {[
                'Top 10 Hidden Gems in the City',
                'A Guide to Fine Dining',
                'Wellness Retreats Guide',
              ].map((title) => (
                <li key={title}>
                  <a href="#" className="text-sm text-text-body hover:text-brand-blue">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-black">Contact Information</h4>
            <ul className="space-y-2 text-sm text-text-body">
              <li>123 Luxury Avenue, Resort City</li>
              <li>
                <a href="tel:+1234567890" className="hover:text-brand-blue">
                  +1 234 567 890
                </a>
              </li>
              <li>
                <a href="mailto:info@luxstay.com" className="hover:text-brand-blue">
                  info@luxstay.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-blue">
                  www.luxstay.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-100 pt-6 text-center text-xs text-text-body">
          <p>
            &copy; {new Date().getFullYear()} LuxStay. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand-blue hover:underline"
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
