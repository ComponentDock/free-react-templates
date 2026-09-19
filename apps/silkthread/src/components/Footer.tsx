import { Mail } from 'lucide-react'

const shoppingLinks = ['Clothing Store', 'Trending Shoes', 'Accessories', 'Sale']
const supportLinks = ['Contact Us', 'Payment Methods', 'Delivery', 'Return & Exchanges']

export function Footer() {
  return (
    <footer id="footer" className="bg-ink text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h2 className="mb-4 text-2xl font-bold">SilkThread</h2>
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              The customer is at the heart of our unique business model, which includes design.
            </p>
            <div className="flex gap-3">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((p) => (
                <span key={p} className="rounded bg-white/10 px-2 py-1 text-xs text-white/60">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Shopping */}
          <div>
            <h6 className="mb-4 text-sm font-bold uppercase tracking-wider">Shopping</h6>
            <ul className="flex flex-col gap-2">
              {shoppingLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/70 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h6 className="mb-4 text-sm font-bold uppercase tracking-wider">Support</h6>
            <ul className="flex flex-col gap-2">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/70 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="mb-4 text-sm font-bold uppercase tracking-wider">Newsletter</h6>
            <p className="mb-4 text-sm text-white/70">
              Be the first to know about new arrivals, look books, sales &amp; promos!
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-l bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="rounded-r bg-brand px-4 text-white transition-colors hover:bg-brand/80"
              >
                <Mail className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} SilkThread. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white/70 underline hover:text-white"
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
