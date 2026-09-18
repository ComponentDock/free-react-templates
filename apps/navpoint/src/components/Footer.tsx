const FOOTER_LINKS = ['Home', 'About us', 'Listings', 'News', 'Contact'] as const

export function Footer() {
  return (
    <footer className="bg-brand-dark py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-sm">
          © {new Date().getFullYear()} All rights reserved — Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:text-brand-hover font-semibold transition-colors"
          >
            Component Dock
          </a>
        </p>
        <nav>
          <ul className="flex flex-wrap items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={`text-sm transition-colors hover:text-brand ${
                    link === 'Home' ? 'text-brand font-semibold' : 'text-white/70'
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
