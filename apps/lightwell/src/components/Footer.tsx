const footerColumns = [
  {
    title: 'Top Product',
    links: [
      { label: 'Strategy', href: '#features' },
      { label: 'Analytics', href: '#features' },
      { label: 'Design', href: '#features' },
      { label: 'Development', href: '#features' },
      { label: 'Marketing', href: '#features' },
    ],
  },
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Features', href: '#features' },
      { label: 'FAQ', href: '#contact' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Compare',
    links: [
      { label: 'Basic Plan', href: '#contact' },
      { label: 'Standard Plan', href: '#contact' },
      { label: 'Premium Plan', href: '#contact' },
      { label: 'Enterprise', href: '#contact' },
      { label: 'Custom Plan', href: '#contact' },
    ],
  },
  {
    title: 'Quick About',
    links: [
      { label: 'Our Story', href: '#about' },
      { label: 'Team', href: '#about' },
      { label: 'Careers', href: '#about' },
      { label: 'Blog', href: '#about' },
      { label: 'Press', href: '#about' },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="bg-heading text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wider">{column.title}</h3>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => e.preventDefault()}
                    className="text-sm text-gray-400 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Lightwell. All rights reserved. More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand transition-colors hover:text-brand-medium"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
