import { TwitterIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from './social-icons'

export function Footer() {
  return (
    <footer data-testid="footer" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo + social */}
          <div>
            <a href="#" className="text-2xl font-bold font-heading text-orange-400">
              Nascent
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Empowering startups with modern tools and infrastructure.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 transition hover:text-orange-400"
              >
                <TwitterIcon size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 transition hover:text-orange-400"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 transition hover:text-orange-400"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 transition hover:text-orange-400"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#home" className="transition hover:text-orange-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-orange-400">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-orange-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#blog" className="transition hover:text-orange-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-orange-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#services" className="transition hover:text-orange-400">
                  Digital Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-orange-400">
                  Innovation Lab
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-orange-400">
                  Growth Analytics
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition hover:text-orange-400">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>hello@nascent.io</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Innovation Ave</li>
              <li>San Francisco, CA 94102</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Nascent. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-orange-400 transition hover:text-orange-300"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
