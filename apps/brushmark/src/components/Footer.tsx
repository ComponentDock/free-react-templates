const navLinks = ['Home', 'About', 'Portfolio', 'Blog', 'Services']

const socials = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07Z',
  },
  {
    label: 'Twitter',
    href: '#',
    path: 'M23.954 4.57c-.885.39-1.83.65-2.825.77 1.014-.61 1.795-1.57 2.16-2.72-.95.56-2.005.97-3.127 1.19-.9-.96-2.18-1.56-3.59-1.56-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.76.13 1.12-4.09-.2-7.72-2.17-10.15-5.15-.42.73-.66 1.57-.66 2.48 0 1.71.87 3.21 2.19 4.1-.8-.03-1.56-.25-2.22-.61v.06c0 2.38 1.7 4.37 3.95 4.83-.41.11-.85.17-1.3.17-.32 0-.63-.03-.93-.09.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.82 2.11-6.13 2.11-.4 0-.79-.02-1.18-.07 2.18 1.4 4.76 2.21 7.54 2.21 9.05 0 14-7.5 14-14 0-.21 0-.43-.02-.64.96-.69 1.79-1.55 2.45-2.53l-.05-.03Z',
  },
  {
    label: 'Skype',
    href: '#',
    path: 'M12.069 18.87c-4.017 0-7.069-2.386-7.069-5.569 0-1.74.868-3.448 2.424-4.772 2.075-1.766 4.543-2.352 5.154-2.563.405-.139.652.294.398.709-.565.924-1.702 2.842-1.702 3.589 0 .372.27.361.459.154.539-.586 1.478-1.433 2.836-1.433 2.228 0 3.619 1.479 3.619 3.701 0 1.781-1.063 3.184-3.119 3.184-1.403 0-2.206-.576-2.593-1.002-.097-.106-.223-.157-.357-.157-.181 0-.331.149-.331.331 0 .453.312 1.329 1.308 1.329Z',
  },
  {
    label: 'Pinterest',
    href: '#',
    path: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24 18.635 24 24 18.633 24 12.013 24 5.393 18.635.026 12.017.026z',
  },
]

export function Footer() {
  return (
    <footer className="bg-slate py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Logo */}
        <div className="mb-8 text-center">
          <a href="#" className="text-2xl font-bold">
            Brush<span className="text-brand-pink">mark</span>
          </a>
        </div>

        {/* Nav links */}
        <ul className="mb-8 flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <div className="mb-8 flex justify-center gap-3">
          {socials.map(({ label, href, path }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-pink hover:border-transparent hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} Brushmark. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            className="underline transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
