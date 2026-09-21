import { Mail } from 'lucide-react'

const shoppingLinks = ['Clothing Store', 'Trending Shoes', 'Accessories', 'Sale']
const contactLinks = ['Contact Us', 'Payment Methods', 'Delivery', 'Return & Exchanges']

export function Footer() {
  return (
    <footer className="bg-surface-darker text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Threadline</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The customer is at the heart of our unique business model, which includes design.
            </p>
          </div>

          {/* Shopping */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wide">Shopping</h4>
            <ul className="space-y-2">
              {shoppingLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-brand-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wide">Contact Us</h4>
            <ul className="space-y-2">
              {contactLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-brand-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wide">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Be the first to know about new arrivals, look books, sales & promos!
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 bg-gray-800 text-white text-sm px-4 py-2 rounded-l border border-gray-700 focus:outline-none focus:border-brand-500"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-r transition-colors"
              >
                <Mail size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand-400 hover:text-brand-300 transition-colors"
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
