import { FormEvent } from 'react'

const quickLinks = ['Work', 'Services', 'Services', 'Tips & Tricks']
const supportLinks = ['FAQ', 'Submit Ticket', 'Contact Us']

export function Footer() {
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const year = new Date().getFullYear()

  return (
    <footer className="bg-mist pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Logo */}
          <div>
            <a href="#home" className="text-2xl font-heading font-bold text-navy">
              Spruce
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-navy mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-body font-body text-sm hover:text-brand transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold text-navy mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-body font-body text-sm hover:text-brand transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-navy mb-4">Newsletter</h4>
            <p className="text-body font-body text-sm mb-4">Subscribe to get updates.</p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-border rounded-l px-3 py-2 text-sm font-body focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                className="bg-brand text-white px-4 py-2 rounded-r text-sm hover:bg-brand-light transition-colors"
                aria-label="Subscribe"
              >
                →
              </button>
            </form>
            <div className="flex gap-4 mt-6">
              {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center text-xs font-semibold hover:bg-brand transition-colors"
                  aria-label={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border py-6 text-center">
          <p className="text-muted font-body text-sm">
            Copyright ©{year} All rights reserved | Made with ❤ by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
