export function Footer() {
  return (
    <footer className="bg-navy py-12 text-sm text-gray-400">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-4">
        {/* About */}
        <div>
          <h4 className="mb-4 text-lg font-semibold text-white">
            <span className="font-[family-name:var(--font-playfair)]">ArtGallery</span>
          </h4>
          <p className="leading-relaxed">
            Experience the finest collection of modern art from world-renowned artists. Visit us
            today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="mb-4 font-semibold text-white">Quick Links</h5>
          <ul className="space-y-2">
            {['Home', 'About', 'Gallery', 'Events', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-accent">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Visit */}
        <div>
          <h5 className="mb-4 font-semibold text-white">Visit Us</h5>
          <ul className="space-y-2">
            <li>123 Art Avenue</li>
            <li>Gallery District, NY 10001</li>
            <li>Mon — Fri: 9AM — 6PM</li>
            <li>Sat: 10AM — 4PM</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h5 className="mb-4 font-semibold text-white">Follow Us</h5>
          <div className="flex gap-3">
            <a href="#" className="transition-colors hover:text-accent" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" className="transition-colors hover:text-accent" aria-label="Twitter">
              Twitter
            </a>
            <a href="#" className="transition-colors hover:text-accent" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} ArtGallery. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-dark"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
