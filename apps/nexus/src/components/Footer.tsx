import { Mail, Phone, MapPin } from 'lucide-react'

const PAGE_LINKS = ['Home', 'Services', 'Process', 'Clients', 'About']
const RESOURCE_LINKS = ['Documentation', 'Support', 'Blog', 'Careers']

export function Footer() {
  return (
    <footer className="bg-text py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Nexus.</h3>
            <p className="text-sm text-gray-400">
              We are a web agency based in Los Angeles, CA, delivering creative digital solutions
              for businesses of all sizes.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Pages</h4>
            <ul className="space-y-2">
              {PAGE_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-brand-pink transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="space-y-2">
              {RESOURCE_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-brand-pink transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-brand-pink" />
                <a
                  href="mailto:hello@nexus.com"
                  className="text-sm text-gray-400 hover:text-brand-pink transition-colors"
                >
                  hello@nexus.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-brand-pink" />
                <span className="text-sm text-gray-400">+1 234 567 890</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-pink" />
                <span className="text-sm text-gray-400">123 Main St, Los Angeles, CA 90001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Nexus. Built with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-pink hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
