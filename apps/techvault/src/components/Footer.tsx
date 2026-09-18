import { Phone, Mail, MapPin } from 'lucide-react'

const FIND_IT_FAST = [
  'Computers & Laptops',
  'Cameras & Photos',
  'Smartphones & Tablets',
  'TV & Audio',
  'Gadgets',
  'Car Electronics',
]

const CUSTOMER_CARE = ['Your Account', 'Shipping Policy', 'Return & Refunds', 'FAQ', 'Contact Us']

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4">
        {/* Contact */}
        <div>
          <h3 className="mb-4 font-display text-sm font-bold uppercase">
            Got Questions? Call Us 24/7
          </h3>
          <p className="mb-4 text-2xl font-bold text-primary-400">+38 068 005 3570</p>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>123 Tech Street, Digital City</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:fastsales@gmail.com"
                className="hover:text-primary-400 transition-colors"
              >
                fastsales@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+38 068 005 3570</span>
            </div>
          </div>
        </div>

        {/* Find it Fast */}
        <div>
          <h3 className="mb-4 font-display text-sm font-bold uppercase">Find it Fast</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            {FIND_IT_FAST.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="mb-4 font-display text-sm font-bold uppercase">Customer Care</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            {CUSTOMER_CARE.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-4 font-display text-sm font-bold uppercase">Newsletter</h3>
          <p className="mb-4 text-sm text-gray-400">
            Subscribe to our newsletter and get %20 off your first purchase.
          </p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-l border border-r-0 border-gray-600 bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-primary-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-r bg-primary-400 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}
