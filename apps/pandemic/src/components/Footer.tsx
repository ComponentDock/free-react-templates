const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Prevention', href: '#prevention' },
  { label: 'Symptoms', href: '#symptoms' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#footer' },
]

const helpfulLinks = [
  { label: 'World Health Organization', href: '#' },
  { label: 'CDC Guidelines', href: '#' },
  { label: 'Local Health Department', href: '#' },
  { label: 'Emergency Services', href: '#' },
]

const resources = [
  { label: 'COVID-19 FAQ', href: '#' },
  { label: 'Mental Health Support', href: '#' },
  { label: 'Financial Assistance', href: '#' },
  { label: 'Volunteer Opportunities', href: '#' },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 pt-16 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">About</h4>
            <p className="text-sm leading-relaxed text-gray-400">
              Pandemic provides health information and prevention guidelines. Stay informed and stay
              safe during challenging times.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Helpful Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Helpful Links</h4>
            <ul className="space-y-2">
              {helpfulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 py-6 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Pandemic. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand transition-colors hover:text-brand-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
