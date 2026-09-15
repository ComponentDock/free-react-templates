import { useState, type FormEvent } from 'react'

const categories = ['Male', 'Female', 'Shoes', 'Fashion'] as const
const company = ['About', 'News', 'FAQ', 'Contact'] as const

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-heading py-16 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <h4 className="text-lg font-semibold uppercase text-white">Category</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {categories.map((cat) => (
              <li key={cat}>
                <a
                  href="#"
                  className="font-light text-gray-400 transition-colors hover:text-brand-pink"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold uppercase text-white">Company</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {company.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-light text-gray-400 transition-colors hover:text-brand-pink"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold uppercase text-white">Address</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="font-light text-gray-400">200, Green block, New York</li>
            <li className="font-light text-gray-400">+10 456 267 1678</li>
            <li className="font-light text-gray-400">contact@snowline.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold uppercase text-white">Newsletter</h4>
          <p className="mt-5 text-sm font-light text-gray-400">
            Subscribe to our newsletter to get updates about our latest collections.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex items-stretch">
            <label htmlFor="snowline-newsletter" className="sr-only">
              Email Address
            </label>
            <input
              id="snowline-newsletter"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email Address"
              className="h-12 min-w-0 flex-1 border border-white/25 bg-transparent px-4 text-sm text-white placeholder:text-white/50 focus:border-brand-pink focus:outline-none"
            />
            <button
              type="submit"
              className="ml-2 h-12 shrink-0 bg-brand-pink px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-orange"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-6 flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 px-4 pt-8 sm:px-6">
        <p className="text-center text-sm font-light text-gray-400">
          Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-pink transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
