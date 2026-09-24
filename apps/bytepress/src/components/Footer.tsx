const navLinks = ['Home', 'Tech', 'Innovation', 'Videos', 'World', 'Contact']

const socialLinks = [
  { label: 'Pinterest', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-dark-bg text-white">
      {/* Social bar */}
      <div className="border-b border-white/10 py-6">
        <ul className="flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-label={link.label}
                className="text-white/60 transition-colors hover:text-white"
              >
                {link.label[0]}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer content */}
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          {/* Logo */}
          <a href="#" className="mb-6 inline-block">
            <span className="text-3xl font-extrabold">
              Byte<span className="text-accent">Press</span>
            </span>
            <span className="block text-xs uppercase tracking-widest text-white/60">
              Innovation & Technology Magazine
            </span>
          </a>

          {/* Nav */}
          <nav className="mb-8">
            <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} All rights reserved | More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-accent underline transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
