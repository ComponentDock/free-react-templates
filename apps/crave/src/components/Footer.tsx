import { Send } from 'lucide-react'

const footerColumns = [
  {
    title: 'Top Products',
    links: ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service'],
  },
  {
    title: 'Quick Links',
    links: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  },
  {
    title: 'Features',
    links: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  },
  {
    title: 'Resources',
    links: ['Guides', 'Research', 'Experts', 'Agencies'],
  },
]

const socialLinks = [
  { name: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  {
    name: 'Twitter',
    path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  },
  {
    name: 'Dribbble',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0 1 12 3.475zm-3.633.803a53.896 53.896 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705zM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715z',
  },
  {
    name: 'LinkedIn',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  },
]

export function Footer() {
  return (
    <footer className="bg-cream pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-heading text-base font-bold text-heading">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-colors hover:text-brand"
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
            <h4 className="mb-4 font-heading text-base font-bold text-heading">Newsletter</h4>
            <p className="mb-4 text-sm text-gray-500">
              You can trust us. We only send promo offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full border border-gray-200 bg-transparent px-3 py-2 text-sm text-gray-500 outline-none"
              />
              <button
                type="button"
                aria-label="Subscribe"
                className="flex items-center justify-center bg-brand px-3 text-white transition-colors hover:bg-red-700"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Made with <span className="text-brand">&hearts;</span>{' '}
            by{' '}
            <a href="https://www.componentdock.com/" className="text-brand hover:underline">
              Component Dock
            </a>
          </p>
          <ul className="flex gap-2">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href="#"
                  aria-label={social.name}
                  className="flex h-8 w-8 items-center justify-center bg-heading text-white transition-colors hover:bg-brand"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
