import { ArrowUp } from 'lucide-react'

const customerCare = [
  'Contact',
  'Returns/Exchange',
  'Gift Voucher',
  'Wishlist',
  'Special',
  'Customer Services',
  'Site maps',
]
const information = [
  'About us',
  'Delivery Information',
  'Privacy Policy',
  'Support',
  'Order Tracking',
]
const news = ['Blog', 'Press', 'Exhibitions']

export function Footer() {
  return (
    <footer className="bg-ink pt-16 text-white" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* About */}
          <div>
            <h4 className="mb-4 text-lg font-bold">About Bazaar</h4>
            <p className="mb-4 text-sm text-white/70">
              Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque
              dicta adipisci architecto culpa amet.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="text-white/70 transition-colors hover:text-brand"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/70 transition-colors hover:text-brand"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white/70 transition-colors hover:text-brand"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Dribbble"
                className="text-white/70 transition-colors hover:text-brand"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702C16.948 2.612 14.517 1.62 12 1.62c-.82 0-1.62.107-2.4.307v.12zm10.08 3.59c-.21.282-1.89 2.478-5.647 4.014.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.39-6.34z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Customer Care</h4>
            <ul className="space-y-2">
              {customerCare.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/70 transition-colors hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Information</h4>
            <ul className="space-y-2">
              {information.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/70 transition-colors hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* News */}
          <div>
            <h4 className="mb-4 text-lg font-bold">News</h4>
            <ul className="space-y-2">
              {news.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/70 transition-colors hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Contact Information</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>291 South 21th Street, Suite 721 New York NY 10016</li>
              <li>
                <a href="tel://1234567920" className="transition-colors hover:text-brand">
                  + 1235 2355 98
                </a>
              </li>
              <li>
                <a href="mailto:info@yoursite.com" className="transition-colors hover:text-brand">
                  info@yoursite.com
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-brand">
                  yoursite.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-white/70">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-brand">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand underline transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>

      {/* Back to top */}
      <a
        href="#"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-ink shadow-lg transition-colors hover:bg-brand-dark"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  )
}
