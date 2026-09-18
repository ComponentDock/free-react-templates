const USEFUL_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Artists', href: '#artists' },
  { label: 'Shop', href: '#shop' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="bg-footer-bg text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo + description */}
          <div>
            <a href="#home" className="text-2xl font-bold text-white">
              LookCraft
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              A curated photography portfolio showcasing the finest work from emerging and
              established artists around the world.
            </p>
          </div>

          {/* Column 2: Useful links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
              Useful Links
            </h3>
            <ul className="space-y-2">
              {USEFUL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li>info@lookcraft.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Gallery Street</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>

          {/* Column 4: Component Dock */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
              More Templates
            </h3>
            <p className="text-sm text-white/50">
              More templates at{' '}
              <a
                href="https://www.componentdock.com/"
                className="text-white underline transition-colors hover:text-accent-red"
              >
                Component Dock
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} LookCraft. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="underline transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
