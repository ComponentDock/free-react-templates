import { MapPin, Phone, Mail } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const featureLinks = [
  'Locksmith Services',
  'Safes & Locks',
  'Access Control',
  'Security Doors',
  'Alarm System',
] as const

const quickLinks = ['Home', 'About', 'Services', 'Shop', 'News', 'Contact'] as const

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        {/* About */}
        <div>
          <a href="#home" className="font-display text-2xl font-bold text-white">
            Keycraft
          </a>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              123 Security Avenue, Suite 100, New York, NY 10001
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              +1 800 556 6688
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              info@keycraft.com
            </li>
          </ul>
        </div>

        {/* Feature Services */}
        <div>
          <h4 className="font-display text-lg font-bold uppercase text-white">Feature Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {featureLinks.map((link) => (
              <li key={link}>
                <a href="#services" className="transition-colors hover:text-primary-400">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-bold uppercase text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="transition-colors hover:text-primary-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-display text-lg font-bold uppercase text-white">Newsletter</h4>
          <p className="mt-4 text-sm">
            Subscribe to our newsletter for the latest updates and security tips.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address for newsletter"
              className="rounded bg-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-primary-400"
            />
            <button
              type="submit"
              className="rounded bg-primary-400 px-6 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-primary-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-sm">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-400 transition-colors hover:underline"
            >
              Component Dock
            </a>
          </p>
          <SocialLinks className="flex gap-3" />
        </div>
      </div>
    </footer>
  )
}
