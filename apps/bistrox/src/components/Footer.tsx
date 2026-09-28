import { type FormEvent } from 'react'

function TwitterIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export function Footer() {
  const handleNewsletter = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <footer id="contact" className="bg-[#333] text-gray-400 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 font-heading">Bistrox</h3>
            <p className="text-sm leading-relaxed mb-4">
              Serving delicious food with passion and dedication since 2020. Experience the finest
              dining at Bistrox.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="text-text-muted hover:text-white transition-colors"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-text-muted hover:text-white transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-text-muted hover:text-white transition-colors"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-heading">Opening Hours</h3>
            <p className="text-sm mb-2">Monday - Sunday</p>
            <p className="text-sm">08:00 - 22:00</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-heading">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <p>198 West 21th Street, Suite 721, New York NY 10016</p>
              <p>+1 555 1234567</p>
              <p>info@bistrox.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-heading">Newsletter</h3>
            <p className="text-sm mb-3">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form onSubmit={handleNewsletter} className="flex">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-1 bg-[#444] text-white px-3 py-2 rounded-l text-sm focus:outline-none focus:ring-1 focus:ring-brand"
              />
              <button
                type="submit"
                className="bg-brand hover:bg-brand-hover text-white px-4 py-2 rounded-r text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 pt-6 text-center text-sm">
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand transition-colors font-semibold"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
