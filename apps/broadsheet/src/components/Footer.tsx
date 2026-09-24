const FOOTER_COLUMNS = [
  {
    title: 'Politics',
    links: ['Business', 'Markets', 'Tech', 'Luxury'],
  },
  {
    title: 'Featured',
    links: [
      'Football',
      'Golf',
      'Tennis',
      'Motorsport',
      'Horseracing',
      'Equestrian',
      'Sailing',
      'Skiing',
    ],
  },
  {
    title: 'FAQ',
    links: [
      'Aviation',
      'Business',
      'Traveller',
      'Destinations',
      'Features',
      'Food/Drink',
      'Hotels',
      'Partner Hotels',
    ],
  },
  {
    title: '+More',
    links: ['Fashion', 'Design', 'Architecture', 'Arts', 'Autos', 'Luxury'],
  },
]

export function Footer() {
  return (
    <footer className="bg-dark-bg text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo + Contact */}
          <div className="lg:col-span-1">
            <a href="/" className="text-xl font-bold">
              BroadSheet
            </a>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:contact@broadsheet.com" className="hover:text-white">
                  contact@broadsheet.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white">
                  +1 234 567 890
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  www.broadsheet.com
                </a>
              </li>
            </ul>
          </div>

          {/* Link Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm font-bold">{col.title}</h3>
              <ul className="space-y-1.5 text-sm text-gray-400">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
