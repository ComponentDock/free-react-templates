const footerColumns = [
  {
    title: 'Toothzen',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Team', href: '#team' },
      { label: 'Blog', href: '#blog' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Info',
    links: [
      { label: 'Join us', href: '#' },
      { label: 'Blog', href: '#blog' },
      { label: 'Privacy & Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative bg-tooth-light-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-300/10 via-amber-200/10 to-tooth-teal/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <h3 className="text-lg font-bold text-tooth-dark-blue">
              Tooth<span className="text-tooth-teal">zen</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-tooth-footer-text">
              Far far away, behind the word mountains, far from the countries.
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map(({ title, links }) => (
            <div key={title}>
              <h4 className="mb-4 font-bold text-tooth-dark-blue">{title}</h4>
              <ul className="flex flex-col gap-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-tooth-footer-text transition-colors hover:text-tooth-teal"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright + Component Dock */}
      <div className="relative z-10 border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6">
          <p className="text-xs text-tooth-muted">
            &copy; {new Date().getFullYear()} Toothzen. All rights reserved.
          </p>
          <p className="text-xs text-tooth-muted">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-tooth-teal transition-colors hover:text-tooth-dark-blue"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
