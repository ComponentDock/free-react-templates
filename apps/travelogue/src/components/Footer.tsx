const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Trips', href: '#trips' },
  { label: 'Testimonials', href: '#testimonials' },
] as const

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 sm:px-6 md:flex-row md:justify-between">
        <div>
          <a
            href="#home"
            className="font-display text-2xl font-bold tracking-wide text-primary-400"
          >
            Travelogue
          </a>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        <p>
          Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 underline transition-colors hover:text-primary-300"
          >
            Component Dock
          </a>
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Travelogue. All rights reserved.</p>
      </div>
    </footer>
  )
}
