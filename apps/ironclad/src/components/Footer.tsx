import { Mail, MapPin, Phone } from 'lucide-react'

const QUICK_LINKS = ['About', 'Services', 'Projects', 'Blog', 'Contact']
const SERVICE_LINKS = ['Architecture', 'Renovation', 'Construction', 'Industrial', 'Building']

export function Footer() {
  return (
    <footer id="contact" className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Ironclad</h3>
            <p className="text-sm leading-relaxed mb-4">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="flex gap-3">
              {['Facebook', 'Twitter', 'Instagram'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-400 hover:text-white transition-colors text-xs"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm hover:text-brand-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-sm hover:text-brand-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Have Questions?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>198 West 21th Street, Suite 721 New York NY 10016</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <span>+1 234 456 78910</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <span>info@ironclad.com</span>
              </li>
            </ul>
            <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <div className="flex">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter email address"
                  className="flex-1 bg-white/10 text-white text-sm px-4 py-2 rounded-l border border-gray-600 focus:outline-none focus:border-brand-400"
                />
                <button
                  type="submit"
                  className="bg-brand-400 hover:bg-brand-500 text-white px-4 py-2 rounded-r text-sm font-medium transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Ironclad. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand-400 hover:text-brand-500 transition-colors"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
