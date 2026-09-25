import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'News', href: '#news' },
  { label: 'Team', href: '#team' },
] as const

const innerLinks = [
  { label: 'Interior Design', href: '#services' },
  { label: 'Architecture', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const

const recentNews = [
  { title: 'Modern Architecture Trends', date: 'Sep 15, 2025' },
  { title: 'Sustainable Design Principles', date: 'Sep 10, 2025' },
  { title: 'Future of Interior Spaces', date: 'Sep 5, 2025' },
] as const

const socials = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: LinkedinIcon, label: 'LinkedIn' },
] as const

export function Footer() {
  return (
    <footer className="bg-coal text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Archcraft</h4>
            <p className="mb-4 text-sm leading-relaxed text-white/60">
              Leading architecture and interior design firm creating inspiring spaces that blend
              aesthetics with functionality.
            </p>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <div>
                {navLinks.map(({ label, href }) => (
                  <a key={label} href={href} className="block py-1 text-white/60 hover:text-white">
                    {label}
                  </a>
                ))}
              </div>
              <div>
                {innerLinks.map(({ label, href }) => (
                  <a key={label} href={href} className="block py-1 text-white/60 hover:text-white">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Recent News */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Recent News</h4>
            {recentNews.map(({ title, date }) => (
              <div key={title} className="mb-3">
                <p className="text-xs text-white/40">{date}</p>
                <a href="#news" className="text-sm text-white/60 hover:text-white">
                  {title}
                </a>
              </div>
            ))}
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Subscribe Newsletter</h4>
            <p className="mb-3 text-sm text-white/60">
              Get the latest updates on our projects and services.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email for newsletter"
                className="flex-1 rounded px-3 py-2 text-sm text-ink"
              />
              <button
                type="submit"
                className="rounded bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Follow Us</h4>
            <div className="flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded bg-white/10 text-white/60 transition-colors hover:bg-brand hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6">
          <p className="text-xs text-white/40">&copy; 2025 Archcraft. All rights reserved.</p>
          <p className="text-xs text-white/40">
            Made with{' '}
            <a href="https://www.componentdock.com/" className="text-brand hover:underline">
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
