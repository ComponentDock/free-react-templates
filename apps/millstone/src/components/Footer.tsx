const QUICK_LINKS = ['Home', 'About', 'Services', 'Works', 'Blog', 'Contact']
const SERVICES = [
  'Automotive Manufacturing',
  'Heavy Industry Market',
  'Industry Analysis',
  'Quality Control',
]

function SocialIcon({ d }: { d: string }) {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

const FACEBOOK_D =
  'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
const TWITTER_D =
  'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
const LINKEDIN_D =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Column 1: Logo + description */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-primary-400 mb-4">
            Millstone<span className="text-white">.</span>
          </h3>
          <p className="font-body text-sm text-gray-400 leading-relaxed mb-6">
            Delivering industrial solutions with quality, safety, and innovation. Your trusted
            partner in manufacturing excellence.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-400 transition-colors"
              aria-label="Follow Millstone on Facebook"
            >
              <SocialIcon d={FACEBOOK_D} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-400 transition-colors"
              aria-label="Follow Millstone on Twitter"
            >
              <SocialIcon d={TWITTER_D} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-400 transition-colors"
              aria-label="Follow Millstone on LinkedIn"
            >
              <SocialIcon d={LINKEDIN_D} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-heading text-base font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-body text-sm text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="font-heading text-base font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            {SERVICES.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="font-body text-sm text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="font-heading text-base font-bold mb-4">About Us</h4>
          <p className="font-body text-sm text-gray-400 leading-relaxed mb-4">
            Subscribe to our newsletter for the latest industry insights and company updates.
          </p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2.5 rounded-l bg-white/10 text-white text-sm font-body placeholder-gray-500 outline-none focus:ring-2 focus:ring-primary-400"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="bg-primary-400 text-white px-4 py-2.5 rounded-r font-heading text-sm font-semibold hover:bg-primary-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Millstone. All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-primary-400 hover:text-primary-300 transition-colors"
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
