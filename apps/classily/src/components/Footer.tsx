import { Mail, Phone, MapPin } from 'lucide-react'

const quickLinks = ['Home', 'Ads', 'About', 'Blog', 'Contact'] as const

export function Footer() {
  return (
    <footer className="bg-ink text-white transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <span className="text-xl font-bold tracking-tight">Classily</span>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Your trusted marketplace for buying, selling, and finding everything you need. Browse
              thousands of classified ads across every category.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                hello@classily.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                123 Marketplace Ave, Tech City
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Classily. All rights reserved.{' '}
        <a
          href="https://www.componentdock.com/"
          className="underline transition-colors hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with Component Dock
        </a>
      </div>
    </footer>
  )
}
