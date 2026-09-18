const navLinks = ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact']

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

export function Header() {
  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="hidden bg-ink text-gray-400 md:block">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 text-sm">
          <div className="flex gap-6">
            <a href="#" className="flex items-center gap-2 transition-colors hover:text-white">
              <PhoneIcon />
              +1 (800) 256-3562
            </a>
            <a href="#" className="flex items-center gap-2 transition-colors hover:text-white">
              <MailIcon />
              support@citadel.com
            </a>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  News &amp; Media
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Review
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-0">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 py-4 text-2xl font-bold text-ink">
            <span className="text-brand">C</span>itadel
          </a>

          {/* Nav links */}
          <nav className="hidden lg:block">
            <ul className="flex">
              {navLinks.map((link, i) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`relative block px-4 py-10 text-sm font-normal text-ink transition-colors hover:text-brand ${
                      i === 0 ? 'text-brand' : ''
                    }`}
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-brand transition-transform hover:scale-x-100" />
                    {i === 0 && <span className="absolute bottom-0 left-0 h-0.5 w-full bg-brand" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Search"
              className="text-gray-400 transition-colors hover:text-brand"
            >
              <SearchIcon />
            </button>
            <a
              href="#"
              className="hidden bg-brand px-8 py-3 text-sm font-normal text-white transition-colors hover:bg-brand-dark lg:inline-block"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
