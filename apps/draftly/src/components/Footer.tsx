export function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">About Us</h3>
            <p className="text-sm text-gray-400">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="transition-colors hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#blog" className="transition-colors hover:text-white">
                  News
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Branding</li>
              <li>SEO</li>
            </ul>
          </div>

          {/* Questions */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Have a Questions?</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>San Francisco CA 97987, USA</li>
              <li>+1-2234-5678-9-0</li>
              <li>hello@draftly.dev</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Draftly. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
