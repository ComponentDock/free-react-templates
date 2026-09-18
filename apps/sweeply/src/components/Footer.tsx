export function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center pt-16"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/sweeply-footer/1600/800)' }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand + Social */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Sweeply</h2>
            <p className="text-sm text-white/60 mb-4">
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com/"
                aria-label="Twitter"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brand transition-colors"
              >
                <span className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brand transition-colors"
              >
                <span className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brand transition-colors"
              >
                <span className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Recent Posts</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-white hover:text-accent transition-colors cursor-pointer">
                  After Renovation House Cleaning Project
                </h4>
                <div className="flex gap-3 text-xs text-white/50 mt-1">
                  <span>
                    <span className="fa fa-calendar mr-1" aria-hidden="true" />
                    Oct. 21, 2020
                  </span>
                  <span>
                    <span className="fa fa-user mr-1" aria-hidden="true" />
                    Admin
                  </span>
                  <span>
                    <span className="fa fa-comment mr-1" aria-hidden="true" />
                    19
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white hover:text-accent transition-colors cursor-pointer">
                  After Renovation House Cleaning Project
                </h4>
                <div className="flex gap-3 text-xs text-white/50 mt-1">
                  <span>
                    <span className="fa fa-calendar mr-1" aria-hidden="true" />
                    Oct. 21, 2020
                  </span>
                  <span>
                    <span className="fa fa-user mr-1" aria-hidden="true" />
                    Admin
                  </span>
                  <span>
                    <span className="fa fa-comment mr-1" aria-hidden="true" />
                    19
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              {['About', 'Contact', 'Services', 'Blog'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <span className="fa fa-chevron-right mr-2 text-xs" aria-hidden="true" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Have a Questions?</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <span className="fa fa-map-marker text-brand mt-0.5" aria-hidden="true" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="fa fa-phone text-brand" aria-hidden="true" />
                <a href="tel:+23923929210" className="hover:text-white transition-colors">
                  +2 392 3929 210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="fa fa-paper-plane text-brand" aria-hidden="true" />
                <a href="mailto:info@yourdomain.com" className="hover:text-white transition-colors">
                  info@yourdomain.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative bg-dark py-5">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="fa fa-heart text-red-500" aria-hidden="true" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
