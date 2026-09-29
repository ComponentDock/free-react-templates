/* Brand icons — lucide-react removed brand icons */

const PRODUCTS = ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service']

const INSTAGRAM = Array.from({ length: 8 }, (_, i) => ({
  seed: `rankly-insta${i + 1}`,
  alt: `Instagram post ${i + 1}`,
}))

export function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-8 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Top Products */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Top Products</h4>
            <ul className="space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p}>
                  <a href="#" className="text-sm transition-colors hover:text-brand">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Newsletter</h4>
            <p className="mb-4 text-sm">Stay updated with our latest SEO insights and tips.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 rounded bg-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                className="rounded bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Instagram Feed */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Instagram Feed</h4>
            <div className="grid grid-cols-3 gap-2">
              {INSTAGRAM.map((img) => (
                <a key={img.seed} href="#" className="overflow-hidden rounded">
                  <img
                    src={`https://picsum.photos/seed/${img.seed}/100/100`}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-brand">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook">
              <svg
                className="h-5 w-5 text-gray-500 transition-colors hover:text-brand"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg
                className="h-5 w-5 text-gray-500 transition-colors hover:text-brand"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" aria-label="Dribbble">
              <svg
                className="h-5 w-5 text-gray-500 transition-colors hover:text-brand"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.29 10.29 0 004.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.161 10.161 0 006.126 2.183c1.506 0 2.92-.312 4.188-.874zM4.38 18.948c.23-.395 3.025-5.088 8.33-6.778.137-.045.273-.084.407-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.936zM20.636 7.98c-2.516.207-5.317-.118-7.54-.926-.187-.067-.374-.132-.56-.2-.208-.07-.42-.133-.633-.193-2.174-.613-4.364-.717-5.098-.73l-.01.26c0 2.145.79 4.097 2.1 5.584l.225.252c3.136-1.42 6.266-2.066 6.665-2.066v-.006zm-9.91 1.238c2.176.068 4.368.205 5.924.67.38.112.748.238 1.103.378-3.378 1.073-7.05 1.193-7.438 1.198l-.002-.006c-.11-1.69.314-3.37 1.222-4.84a8.84 8.84 0 01-1.81 2.6z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg
                className="h-5 w-5 text-gray-500 transition-colors hover:text-brand"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
