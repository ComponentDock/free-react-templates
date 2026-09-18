import { MapPin, Phone, Mail } from 'lucide-react'

const exploreLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

const recentPosts = [
  'After Renovation House Cleaning Project',
  'Deep Cleaning Tips for Spring',
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <a href="#home" className="text-xl font-bold text-white">
            Tidy<span className="text-accent-400">Wash</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Recent Posts
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {recentPosts.map((post) => (
              <li key={post}>
                <a href="#blog" className="transition-colors hover:text-primary-400">
                  {post}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Have a Question?
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href="tel:+23923929210" className="transition-colors hover:text-primary-400">
                +2 392 3929 210
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a
                href="mailto:info@yourdomain.com"
                className="transition-colors hover:text-primary-400"
              >
                info@yourdomain.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} TidyWash. All rights reserved. More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-400 hover:underline"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
