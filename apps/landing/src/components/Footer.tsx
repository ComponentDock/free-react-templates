import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const exploreLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

const contactLines = [
  { icon: MapPin, text: '600/B, South Bhadalta, Bagbazar' },
  { icon: Phone, text: '+1 234 567 890' },
  { icon: Mail, text: 'hello@landing.example' },
] as const

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-gray-100 bg-paper py-16 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink dark:text-white">About Us</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Landing helps teams ship beautiful, high-converting pages in minutes — no code, no
              compromises.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink dark:text-white">Explore</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
              Contact Info
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {contactLines.map((line) => (
                <li key={line.text} className="flex items-start gap-3">
                  <line.icon
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary-500"
                    aria-hidden="true"
                  />
                  <span className="text-gray-600 dark:text-gray-400">{line.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 sm:flex-row sm:justify-between dark:border-gray-800">
          <p>Copyright © {new Date().getFullYear()} Landing. All rights reserved.</p>
          <p>
            Made with <span aria-hidden="true">♥</span> by Landing
          </p>
        </div>
      </div>
    </footer>
  )
}
