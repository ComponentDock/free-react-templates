const quickLinks1 = ['Sitemaps', 'Categories', 'Archives', 'Advertise', 'Ad Choice']

const quickLinks2 = ['Privacy Policy', 'Terms of Use', 'Help Center', 'Newsletters', 'Feedback']

const mostViewed = [
  {
    image: 'https://picsum.photos/seed/shatter-mv1/100/80',
    headline: 'Scientists Discover New Species in Deep Ocean',
  },
  {
    image: 'https://picsum.photos/seed/shatter-mv2/100/80',
    headline: 'Tech Giants Report Record Quarterly Earnings',
  },
  {
    image: 'https://picsum.photos/seed/shatter-mv3/100/80',
    headline: 'New Study Links Exercise to Better Sleep Quality',
  },
]

export function Footer() {
  return (
    <footer className="bg-dark pt-12 pb-6 text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1 — logo + description */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <svg
                className="h-7 w-7 text-brand"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
              </svg>
              <div className="leading-tight">
                <div className="font-display text-lg font-bold tracking-wider">SHATTER</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">Magazine</div>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Your trusted source for breaking news, in-depth analysis, and the stories that shape
              our world. Stay informed with Shatter Magazine.
            </p>
          </div>

          {/* Column 2 — quick links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks1.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-white/60 transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">
                &nbsp;
              </h3>
              <ul className="space-y-2">
                {quickLinks2.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-white/60 transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3 — most viewed news */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">
              Most Viewed News
            </h3>
            <ul className="space-y-3">
              {mostViewed.map((item) => (
                <li key={item.headline} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.headline}
                    className="h-14 w-16 shrink-0 rounded-sm object-cover"
                    loading="lazy"
                  />
                  <a
                    href="#"
                    className="text-sm leading-snug text-white/70 transition-colors hover:text-brand"
                  >
                    {item.headline}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Shatter Magazine. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand transition-colors hover:text-brand-dark"
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
