function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
    </svg>
  )
}

const SOCIAL = [
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: TwitterIcon, label: 'Twitter' },
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: LinkedinIcon, label: 'LinkedIn' },
]

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'DJs', href: '#djs' },
  { label: 'News', href: '#news' },
  { label: 'Top 20 of the week', href: '#top20' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="bg-brand-dark border-t border-white/10 pt-16 pb-8 lg:pt-20"
      data-testid="footer"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* About Us + Navigations */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white font-heading">
              About Us
            </h3>
            <p className="mb-8 text-sm text-brand-footer-text">
              We are passionate about bringing the best DJ events and music experiences to audiences
              worldwide. Our platform connects fans with incredible talent.
            </p>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white font-heading">
              Navigations
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-footer-link transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us + Subscribe */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white font-heading">
              Follow Us
            </h3>
            <div className="mb-8 flex gap-4">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="text-brand-footer-link transition-colors hover:text-white"
                >
                  <s.icon />
                </a>
              ))}
            </div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white font-heading">
              Subscribe
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Enter Email"
                className="flex-1 border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-gold focus:outline-none"
              />
              <button
                type="submit"
                className="bg-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-yellow-500"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Watch Video */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white font-heading">
              Watch Video
            </h3>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://picsum.photos/seed/vynl-footer-video/600/350"
                alt="Video thumbnail"
                className="w-full object-cover"
                loading="lazy"
              />
              <button
                className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/50"
                aria-label="Play video"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-brand-footer-text">
            &copy; {year} Vynl. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand-gold transition-colors hover:text-white"
            >
              Component Dock
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
