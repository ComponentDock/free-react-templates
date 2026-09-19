import { Send } from 'lucide-react'

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3">
        {/* Logo & Social */}
        <div>
          <h3 className="mb-4 text-xl font-bold">WARES</h3>
          <p className="mb-4 text-sm text-gray-400">
            Your one-stop shop for the latest products at unbeatable prices.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-brand transition-colors"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-brand transition-colors"
            >
              <TwitterIcon size={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-brand transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        {/* My Account */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">My Account</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                My Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                Compare
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                Checkout
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Customer Service</h4>
          <ul className="mb-6 space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                Shipping &amp; Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                Shipping Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                FAQ
              </a>
            </li>
          </ul>
          <h4 className="mb-2 text-sm font-bold uppercase tracking-wider">Stay Connected</h4>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-l bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="rounded-r bg-brand px-4 text-white hover:bg-brand-dark transition-colors"
              aria-label="Subscribe to newsletter"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Wares. All rights reserved. | More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
