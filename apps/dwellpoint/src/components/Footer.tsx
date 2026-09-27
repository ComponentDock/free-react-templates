import { Send } from 'lucide-react'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'Dribbble', href: 'https://dribbble.com' },
  { label: 'Behance', href: 'https://behance.net' },
]

const instagramImages = Array.from({ length: 8 }, (_, i) => ({
  seed: `dwellpoint-ig${i + 1}`,
}))

export function Footer() {
  return (
    <footer className="bg-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              About Us
            </h4>
            <p className="text-sm leading-relaxed text-gray-400">
              Dwellpoint is your trusted partner in finding the perfect property. We connect buyers
              with homes that match their lifestyle.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Newsletter
            </h4>
            <p className="mb-3 text-sm text-gray-400">Stay updated with our latest listings.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 rounded-l bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-crimson-400"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="rounded-r bg-crimson-400 px-4 text-white transition-colors hover:bg-crimson-500"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Instagram */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Instagram Feed
            </h4>
            <div className="grid grid-cols-4 gap-1.5">
              {instagramImages.map(({ seed }) => (
                <img
                  key={seed}
                  src={`https://picsum.photos/seed/${seed}/60/60`}
                  alt="Instagram post"
                  className="h-12 w-12 rounded object-cover opacity-70 transition-opacity hover:opacity-100"
                />
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Follow Us
            </h4>
            <p className="mb-3 text-sm text-gray-400">Let us be social.</p>
            <div className="flex gap-3">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-crimson-400 hover:text-white"
                >
                  {label[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Dwellpoint. Made with{' '}
            <span className="text-crimson-400">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 underline transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
