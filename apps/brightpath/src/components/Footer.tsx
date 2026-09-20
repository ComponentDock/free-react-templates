import { Heart } from 'lucide-react'

const footerColumns = {
  'Top Products': ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service'],
  'Quick Links': ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  Features: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  Resources: ['Guides', 'Research', 'Experts', 'Agencies'],
}

const socialLinks = [
  { name: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  {
    name: 'Twitter',
    path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
  },
  {
    name: 'Dribbble',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.903 53.903 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.7-5.442 2.164-.467 4.013-.585 4.651-.585a8.505 8.505 0 01-6.016 7.829z',
  },
  {
    name: 'Behance',
    path: 'M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.609.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.62.16-1.26.25-1.92.25H0V4.51h6.938v-.007zM6.545 10.16c.6 0 1.096-.15 1.486-.45.39-.3.58-.75.58-1.35 0-.35-.06-.64-.18-.87a1.42 1.42 0 00-.5-.53 1.96 1.96 0 00-.74-.26 4.17 4.17 0 00-.93-.1H3.23v3.56h3.315zm.195 5.52c.34 0 .66-.04.97-.11.31-.08.58-.2.82-.36.24-.17.43-.39.58-.66.15-.27.23-.62.23-1.05 0-.83-.22-1.44-.66-1.82-.44-.38-1.02-.57-1.74-.57H3.23v4.57h3.51zm8.43-5.33h5.1v-1.17h-5.1v1.17zm2.55 8.18c.58 0 1.09-.08 1.52-.25.43-.17.79-.4 1.08-.69.29-.29.51-.65.66-1.07.15-.42.23-.9.23-1.43V9.2h-2.48v5.12c0 .38-.08.67-.24.87-.16.2-.39.3-.69.3-.26 0-.47-.08-.64-.23a1.07 1.07 0 01-.33-.53c-.07-.22-.11-.46-.11-.73V9.2h-2.48v6.48c0 .88.16 1.55.48 2 .32.46.77.68 1.35.68zM23.01 9.2h-2.48v2.3h-1.17V9.2h-2.48v7.63h2.48v-2.6h1.17v2.6h2.48V9.2z',
  },
]

export function Footer() {
  return (
    <footer className="bg-heading text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {Object.entries(footerColumns).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-base font-semibold mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-brand transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-base font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              You can trust us. We only send promo offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-3 py-2 text-sm text-heading rounded-l outline-none"
              />
              <button
                type="submit"
                className="bg-brand px-4 py-2 text-white text-sm font-semibold rounded-r hover:bg-brand-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-3 mb-8">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href="#"
              aria-label={s.name}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-brand" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()} BrightPath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
