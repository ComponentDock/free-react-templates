import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react'

const USEFUL_LINKS = [
  'Listings',
  'Favorite Cities',
  'Clients Testimonials',
  'Featured Listings',
  'Properties on Offer',
  'Services',
  'News',
  'Our Agents',
]

const SOCIAL_SVG = [
  {
    name: 'Pinterest',
    path: 'M12 0C5.37 0 0 5.37 0 12c0 5.08 3.15 9.43 7.6 11.21-.1-.95-.2-2.42.04-3.46.22-.94 1.42-6.02 1.42-6.02s-.36-.73-.36-1.8c0-1.69.98-2.95 2.2-2.95 1.04 0 1.54.78 1.54 1.72 0 1.05-.67 2.61-1.01 4.06-.29 1.21.61 2.2 1.8 2.2 2.16 0 3.82-2.27 3.82-5.56 0-2.91-2.09-4.95-5.07-4.95-3.45 0-5.48 2.59-5.48 5.27 0 1.04.4 2.16.89 2.77.1.12.11.22.08.34-.09.37-.29 1.21-.33 1.38-.05.22-.18.27-.41.16-1.52-.71-2.47-2.93-2.47-4.72 0-3.84 2.79-7.37 8.03-7.37 4.21 0 7.49 3 7.49 7.01 0 4.18-2.64 7.55-6.3 7.55-1.23 0-2.39-.64-2.79-1.39l-.76 2.89c-.27 1.06-1.01 2.4-1.51 3.21C9.58 23.81 10.77 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z',
  },
  {
    name: 'Facebook',
    path: 'M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.62 23.1 24 18.1 24 12.07z',
  },
  {
    name: 'Twitter',
    path: 'M23.64 4.67c-.85.38-1.78.63-2.73.75 1-.6 1.76-1.54 2.12-2.67-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.68.85 3.16 2.14 4.02-.79-.02-1.53-.24-2.18-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.1-.83.16-1.27.16-.31 0-.62-.03-.92-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.83 2.1-6.15 2.1-.4 0-.8-.02-1.19-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.42-.01-.63.96-.69 1.79-1.56 2.45-2.55z',
  },
]

export function Footer() {
  return (
    <footer className="bg-navy-800 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + Social + About */}
          <div>
            <a href="#" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-coral-400">
                <span className="text-sm font-bold text-white">M</span>
              </div>
              <span className="font-heading text-lg font-semibold text-white">the manor</span>
            </a>
            <div className="mb-4 flex gap-3">
              {SOCIAL_SVG.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-coral-400"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen dis se tellus eros,
              placerat quis fermentum et, viverra sit amet lacus.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              useful links
            </h4>
            <ul className="space-y-2">
              {USEFUL_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-coral-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              say hello
            </h4>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-coral-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="E-mail"
                required
                className="w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-coral-400 focus:outline-none"
              />
              <textarea
                placeholder="Message"
                required
                rows={3}
                className="w-full resize-none rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-coral-400 focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded bg-coral-400 px-4 py-2 font-heading text-sm font-semibold text-white transition-colors hover:bg-coral-500"
              >
                <Send className="h-4 w-4" /> send
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              contact info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-coral-400" />
                <span className="text-sm text-gray-400">4127 Raoul Wallenberg 45b-c Gibraltar</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-coral-400" />
                <span className="text-sm text-gray-400">2556-808-8613</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-coral-400" />
                <a
                  href="mailto:contactme@gmail.com"
                  className="text-sm text-gray-400 hover:text-coral-400"
                >
                  contactme@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 flex-shrink-0 text-coral-400" />
                <a
                  href="https://www.componentdock.com"
                  className="text-sm text-gray-400 hover:text-coral-400"
                >
                  www.componentdock.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Brand Footer */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center">
        <p className="text-sm text-gray-500">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-semibold text-coral-400 transition-colors hover:text-coral-300"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
