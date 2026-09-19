import { InstagramIcon, FacebookIcon, TwitterIcon } from './social-icons'

const shopLinks = ['Clothing', 'Bags', 'Accessories', 'Jewellery', 'Shoes']
const helpLinks = ['Contact us', 'Shipping', 'Returns', 'Size guide', 'FAQ']

export function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-200">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-lg font-bold text-white mb-3">Drape</h2>
            <p className="text-sm text-warm-400 leading-relaxed">
              Modern wardrobe essentials, made to last. Fewer, better pieces in natural fibres.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-full bg-white/10 hover:bg-terra-400 transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-full bg-white/10 hover:bg-terra-400 transition-colors"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-full bg-white/10 hover:bg-terra-400 transition-colors"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Shop</h2>
            <ul className="space-y-2 text-sm">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a href="#shop" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Help</h2>
            <ul className="space-y-2 text-sm">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#contact" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Newsletter
            </h2>
            <p className="text-sm text-warm-400 mb-3">
              New arrivals and offers, straight to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Email address"
                required
                className="flex-1 min-w-0 px-3 py-2 text-sm bg-white/10 border border-warm-700 text-white placeholder:text-warm-500 focus:outline-none focus:border-terra-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-warm-900 text-sm font-semibold hover:bg-warm-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-warm-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-warm-500">
          <span>&copy; 2026 Drape. More templates at Component Dock.</span>
          <a href="https://www.componentdock.com/" className="hover:text-white transition-colors">
            www.componentdock.com
          </a>
        </div>
      </div>
    </footer>
  )
}
