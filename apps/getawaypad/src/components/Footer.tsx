import { Send } from 'lucide-react'

const SERVICES = [
  'Map Direction',
  'Accommodation Services',
  'Great Experience',
  'Perfect central location',
]
const TAGS = ['apartment', 'home', 'vacation', 'rental', 'rent', 'house', 'place', 'drinks']

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + description */}
          <div>
            <h2 className="mb-4 text-xl font-bold">
              <a href="#" className="hover:text-brand transition-colors">
                GetawayPad
              </a>
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-gray-400">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia.
            </p>
            <a href="#" className="text-sm text-brand hover:underline">
              Read more →
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm text-gray-400 hover:text-brand transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tag cloud */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Tag cloud</h3>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <a
                  key={tag}
                  href="#"
                  className="rounded bg-gray-800 px-3 py-1 text-xs text-gray-400 hover:bg-brand hover:text-white transition-colors"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Subscribe + social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Subscribe</h3>
            <form onSubmit={(e) => e.preventDefault()} className="mb-6 flex">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-1 rounded-l bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="rounded-r bg-brand px-4 text-white hover:bg-brand-dark transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
            <h3 className="mb-3 text-lg font-semibold">Follow us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-brand transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-brand transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-brand transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-5 md:flex-row">
          <p className="text-sm text-gray-400">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-brand">♥</span> at{' '}
            <a href="https://www.componentdock.com/" className="text-brand hover:underline">
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-gray-400 hover:text-brand transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-brand transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-brand transition-colors">
              Compliances
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
