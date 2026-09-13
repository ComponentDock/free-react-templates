import { SocialLinks } from './SocialLinks'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="#home" className="text-2xl font-bold tracking-tight text-primary-500">
            Netforge
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            Delivering world-class IT solutions to help businesses grow and thrive in the digital
            age.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#services" className="transition-colors hover:text-primary-400">
                Web Development
              </a>
            </li>
            <li>
              <a href="#services" className="transition-colors hover:text-primary-400">
                Cloud Solutions
              </a>
            </li>
            <li>
              <a href="#services" className="transition-colors hover:text-primary-400">
                Cybersecurity
              </a>
            </li>
            <li>
              <a href="#services" className="transition-colors hover:text-primary-400">
                Digital Marketing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact Info
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>123 Tech Street, Digital City, DC 10001</li>
            <li>
              <a href="tel:+1234567890" className="transition-colors hover:text-primary-400">
                +1 (234) 567-890
              </a>
            </li>
            <li>
              <a
                href="mailto:info@netforge.dev"
                className="transition-colors hover:text-primary-400"
              >
                info@netforge.dev
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Netforge. Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noreferrer"
          className="text-primary-400 transition-colors hover:text-primary-300"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
