import { Phone, MapPin, Mail } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const quickLinks = ['Home', 'About', 'Causes', 'Blog', 'Contact'] as const

const latestNews = [
  'Clean Water Initiative Update',
  'Volunteer Spotlight: Sarah',
  'Annual Gala Recap 2025',
] as const

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-footer text-white transition-colors dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand + Social + Donate */}
          <div>
            <a href="#home" className="text-xl font-bold uppercase tracking-wider">
              Mercy<span className="text-brand">.</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Bringing hope and essential resources to communities in need around the world.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:text-brand"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href="#donate"
              className="mt-6 inline-block rounded-full bg-brand px-6 py-2 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
            >
              Donate Now
            </a>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand">Latest News</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {latestNews.map((news) => (
                <li key={news}>
                  <a href="#blog" className="transition-colors hover:text-white">
                    {news}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand">Contact Info</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                123 Charity Lane, Aid City, AC 12345
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                +10 367 267 2678
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                info@mercy.org
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Mercy Charity. Built by{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
