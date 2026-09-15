import { Mail, Phone, MapPin } from 'lucide-react'

const quickLinks = [
  'Building Construction',
  'Home Renovation',
  'Hardwood Flooring',
  'Repairing Of Roof',
  'Commercial Construction',
  'Concrete Transport',
]

export function Footer() {
  return (
    <footer id="contact" className="bg-brand text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold uppercase">About Our Company</h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-300">
              We are a leading construction company delivering quality residential and commercial
              projects with over 30 years of experience.
            </p>
            <div className="flex gap-3">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
                >
                  <span className="sr-only">{s}</span>
                  <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-accent"
                  >
                    <span className="text-accent">&#8250;</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Posts */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold uppercase">Latest Posts</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-sm text-gray-300 transition-colors hover:text-accent"
              >
                Discover sustainable building practices for modern construction.
              </a>
              <a
                href="#"
                className="block text-sm text-gray-300 transition-colors hover:text-accent"
              >
                Expert renovation tips for your next home improvement project.
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold uppercase">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-gray-300">info@constructo.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-gray-300">+1 (168) 314 5016</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-gray-300">
                  123 Construction Ave, Building District, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Constructo. All rights reserved.{' '}
          <a href="https://www.componentdock.com/" className="text-accent hover:text-white">
            More templates at Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
