import { ExternalLink } from 'lucide-react'

const footerLinks = [
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

export function Footer() {
  return (
    <>
      <footer className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-lg font-semibold text-heading">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-body transition-colors hover:text-brand-accent"
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
              <h4 className="mb-4 text-lg font-semibold text-heading">Newsletter</h4>
              <p className="mb-4 text-sm text-body">You can trust us. We only send promo offers.</p>
              <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-brand-accent focus:outline-none"
                  required
                />
                <button type="submit" className="gradient-btn text-sm">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <footer className="bg-footer-bg px-4 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-white"
          >
            Made with Component Dock <ExternalLink size={14} />
          </a>
        </div>
      </footer>
    </>
  )
}
