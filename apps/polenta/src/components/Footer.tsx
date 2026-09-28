const footerLinks = ['Home', 'About', 'Menu', 'Reservation', 'Gallery', 'Events', 'Contact']

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright */}
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Polenta Restaurant. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>

          {/* Footer nav */}
          <nav className="flex flex-wrap justify-center gap-4" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-white/60 transition-colors hover:text-brand"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
