const footerLinks = ['Home', 'Albums', 'Events', 'News', 'Contact']

export function Footer() {
  return (
    <footer className="bg-groove-black py-12" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand + copyright */}
          <div>
            <a href="#" className="mb-3 block text-2xl font-bold text-white">
              Groovecraft
            </a>
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} All rights reserved. Made with{' '}
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/70 transition-colors hover:text-white"
              >
                Component Dock
              </a>
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex gap-6">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
