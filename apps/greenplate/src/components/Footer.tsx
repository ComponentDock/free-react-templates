export function Footer() {
  return (
    <footer className="bg-ink text-white py-12" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand + Description */}
          <div>
            <h3 className="text-xl font-bold text-brand font-serif mb-4">Greenplate</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We deliver the freshest organic vegetables and fruits straight from local farms to
              your doorstep. Eat healthy, live healthy with Greenplate.
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#faq" className="hover:text-brand transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-brand transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-brand transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-brand transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Delivery */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Delivery</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#local" className="hover:text-brand transition-colors">
                  Local Delivery
                </a>
              </li>
              <li>
                <a href="#nationwide" className="hover:text-brand transition-colors">
                  Nationwide Shipping
                </a>
              </li>
              <li>
                <a href="#track" className="hover:text-brand transition-colors">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#bulk" className="hover:text-brand transition-colors">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Organic Lane, Green City</li>
              <li>+1 (555) 123-4567</li>
              <li>info@free-template.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-2 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Greenplate. All rights reserved.</p>
          <p>
            More templates at{' '}
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
