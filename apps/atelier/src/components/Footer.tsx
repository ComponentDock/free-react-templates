const navColumns = [
  {
    title: 'Company',
    links: ['About Us', 'Services', 'Blog', 'Careers'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API Reference', 'Community', 'Status'],
  },
]

const socials = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01',
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.6 5.18c1.46 1.74 2.34 3.97 2.42 6.38-1.23-.25-2.45-.42-3.65-.51.32-1.1.57-2.22.75-3.37a12.1 12.1 0 0 0 .48-2.5zM12 4c1.53 0 2.97.42 4.18 1.15-.16 1.16-.47 2.3-.9 3.4a24.6 24.6 0 0 0-6.61-.18A7.9 7.9 0 0 1 12 4zM7.78 5.23A24.6 24.6 0 0 0 11.19 9c-2.74.7-5.57.85-8.32.48A8 8 0 0 1 7.78 5.23zM4 12c0-.13.01-.25.02-.38 2.83.4 5.74.2 8.55-.53.2.7.37 1.4.53 2.11-3.44 1.02-6.04 3.46-7.5 6.65A8 8 0 0 1 4 12zm3.93 6.7c1.26-2.98 3.56-5.15 6.6-5.93.8 2.04 1.4 4.16 1.78 6.33A8 8 0 0 1 7.93 18.7zm7.67.07c-.38-2.17-.97-4.29-1.78-6.33 2.27-.26 4.55-.16 6.78.29a8 8 0 0 1-5 6.04z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* About column */}
          <div>
            <a href="#home" className="text-xl font-bold text-navy">
              Atelier
            </a>
            <p className="mt-3 max-w-xs text-sm text-navy/50">
              We are a creative agency crafting bold digital experiences for forward-thinking brands
              worldwide.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-[#f8f9fa] text-navy transition-colors hover:bg-brand-500 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-navy">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-navy/50 transition-colors hover:text-brand-500"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-6 text-center text-xs text-navy/40">
          © 2026 All rights reserved | Made with <span aria-label="love">❤️</span> by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline transition-colors hover:text-brand-500"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
