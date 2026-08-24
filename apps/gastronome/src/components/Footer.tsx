export function Footer() {
  return (
    <footer>
      <div className="bg-surface-dark py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-4">
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>123 Via Roma, New York, NY 10001</li>
              <li>+1 (212) 555-0199</li>
              <li>info@gastronome.com</li>
            </ul>
            <h3 className="mt-6 text-lg font-bold text-white">Opening Times</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>Mon - Fri: 11:00 AM - 10:00 PM</li>
              <li>Sat - Sun: 10:00 AM - 11:00 PM</li>
            </ul>
          </div>

          {/* Latest Posts */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white">Latest Posts</h3>
            <ul className="mt-4 space-y-4">
              {['Christmas Special Menu', 'Wine Tasting Event', "Chef's New Recipe"].map((post) => (
                <li key={post}>
                  <a
                    href="#blog"
                    className="text-sm text-white/60 transition-colors hover:text-brand"
                  >
                    {post}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-white">Gallery</h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                'gastro-gal1',
                'gastro-gal2',
                'gastro-gal3',
                'gastro-gal4',
                'gastro-gal5',
                'gastro-gal6',
              ].map((seed) => (
                <img
                  key={seed}
                  src={`https://picsum.photos/seed/${seed}/200/200`}
                  alt="Gallery"
                  className="h-24 w-full rounded object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-surface-darker py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex gap-4">
            {/* Social icons */}
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/60 transition-colors hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white/60 transition-colors hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/60 transition-colors hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Gastronome. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white/60 transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
