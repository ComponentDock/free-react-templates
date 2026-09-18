import { Heart } from 'lucide-react'

const COMPANY_LINKS = ['Home', 'About', 'Services', 'FAQ', 'Reviews', 'Stories']
const EXPLORE_LINKS = ['Privacy', 'Policy', 'Terms', 'Review', 'Features']
const GET_STARTED_LINKS = ['Buy', 'Rent', 'Payment', 'Mortgage', 'Loan']

export function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Hamlin.</h3>
            <p className="text-white/60 text-sm mb-4">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white text-xs hover:bg-brand transition-colors"
              >
                f
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white text-xs hover:bg-brand transition-colors"
              >
                ig
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2">
              {EXPLORE_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Get Started</h3>
            <ul className="space-y-2">
              {GET_STARTED_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-white/60 text-sm mb-4">
              Subscribe to get updates on new property listings.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full px-4 py-2.5 bg-transparent border border-white/30 text-white placeholder-white/50 text-sm focus:outline-none focus:border-brand"
              />
              <button
                type="submit"
                className="w-full bg-white text-dark font-bold py-2.5 text-sm hover:bg-brand hover:text-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 text-sm flex items-center justify-center gap-1">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <Heart className="w-4 h-4 text-brand inline" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-white font-semibold transition-colors"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
