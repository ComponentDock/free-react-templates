import { Phone, MapPin, Mail } from 'lucide-react'

const quickLinks = ['Home', 'About', 'Causes', 'Blog', 'Gallery', 'Events', 'Contact'] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-footer text-white transition-colors">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* About */}
          <div>
            <a href="#home" className="text-xl font-bold uppercase tracking-wider">
              Gracious
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Gracious is a nonprofit organization dedicated to making a difference in the lives of
              those who need it most. We believe that everyone deserves access to basic necessities
              and a chance at a better life.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-9 w-9 items-center justify-center rounded border border-gray-600 text-gray-400 transition-colors hover:border-teal hover:text-teal"
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-teal">Quick Links</h3>
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
            <h3 className="text-lg font-bold uppercase tracking-wide text-teal">Contact Info</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                123 Charity Lane, Aid City, AC 12345
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                +10 367 267 2678
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                info@gracious.org
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Gracious Charity. Built by{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal hover:underline"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
