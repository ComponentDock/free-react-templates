import { Sprout, MapPin, Phone, Mail } from 'lucide-react'

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" />
    </svg>
  )
}

const recentPosts = [
  { title: 'Modern Farming Techniques', date: 'Sep 10, 2025' },
  { title: 'Benefits of Organic Agriculture', date: 'Sep 8, 2025' },
] as const

const exploreLinks = ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'] as const

export function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                <Sprout size={20} />
              </div>
              <h4 className="text-xl font-bold text-white">Greenfield</h4>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-white/60">
              We provide the best agricultural services and products to help you grow healthy,
              organic food for a sustainable future.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/60 transition-colors hover:text-brand"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white/60 transition-colors hover:text-brand"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/60 transition-colors hover:text-brand"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Recent Posts</h4>
            <ul className="space-y-3">
              {recentPosts.map((p) => (
                <li key={p.title}>
                  <p className="text-sm font-medium text-white transition-colors hover:text-brand">
                    {p.title}
                  </p>
                  <p className="text-xs text-white/40">{p.date}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Explore</h4>
            <ul className="space-y-2">
              {exploreLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-white/60 transition-colors hover:text-brand"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Have a Questions? */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Have a Questions?</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
                123 Farm Road, Agri City, AC 12345
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Phone size={16} className="mt-0.5 shrink-0 text-brand" />
                +1 234 567 890
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand" />
                info@greenfield.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Greenfield. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand transition-colors hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
