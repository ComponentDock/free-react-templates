export function Footer() {
  return (
    <footer className="bg-charcoal py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
              About Supper
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
              wild Question Marks and devious Semikoli, but the Little Blind Text didn&apos;t
              listen.
            </p>
            <a
              href="#"
              className="inline-block rounded border border-white px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-charcoal"
            >
              Read More
            </a>
          </div>

          {/* Service Hours */}
          <div>
            <h3 className="mb-4 text-lg font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
              Lunch Service
            </h3>
            <p className="mb-6 text-sm text-gray-400">Booking from 12:00pm &mdash; 1:30pm</p>
            <h3 className="mb-4 text-lg font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
              Dinner Service
            </h3>
            <p className="text-sm text-gray-400">Everyday: Booking from 6:00pm &mdash; 9:00pm</p>
          </div>

          {/* Social + Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
              Follow Along
            </h3>
            <div className="mb-6 flex gap-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
                <svg
                  width="20"
                  height="20"
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
              </a>
            </div>
            <h3 className="mb-4 text-lg font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
              Newsletter
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 rounded-l bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-500 outline-none"
              />
              <button
                type="submit"
                className="rounded-r bg-coral px-4 py-2 text-white transition-colors hover:bg-coral-dark"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-coral"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
