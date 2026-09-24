function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const NEWS_POSTS = [
  {
    title: 'New Medical Equipment Available',
    date: 'Sep 15, 2026',
    seed: 'clinipoint-news1',
  },
  {
    title: 'Health Awareness Camp Next Week',
    date: 'Sep 10, 2026',
    seed: 'clinipoint-news2',
  },
  {
    title: 'Meet Our New Specialist Doctor',
    date: 'Sep 5, 2026',
    seed: 'clinipoint-news3',
  },
]

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Contact', href: '#contact' },
  { label: 'Appointment', href: '#appointment' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-footer text-brand-footer-text pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + description */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white mb-4 inline-block"
            >
              Clinipoint
            </a>
            <p className="text-sm leading-relaxed mb-5 opacity-80">
              Providing quality healthcare services for the whole family. Your health is our
              priority.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-white mb-5">
              Latest News
            </h3>
            <ul className="space-y-4">
              {NEWS_POSTS.map((post) => (
                <li key={post.seed} className="flex gap-3">
                  <img
                    src={`https://picsum.photos/seed/${post.seed}/60/60`}
                    alt={post.title}
                    className="w-14 h-14 rounded object-cover flex-shrink-0"
                  />
                  <div>
                    <a
                      href="#"
                      className="text-sm text-white hover:text-brand-accent transition-colors leading-snug block"
                    >
                      {post.title}
                    </a>
                    <p className="text-xs opacity-60 mt-1">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-white mb-5">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="opacity-60">Address:</span>
                <span className="opacity-80">123 Medical Center Drive, New York, NY 10001</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="opacity-60">Phone:</span>
                <span className="opacity-80">+1 234 567 890</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="opacity-60">Email:</span>
                <a
                  href="mailto:info@clinipoint.com"
                  className="opacity-80 hover:text-white transition-colors"
                >
                  info@clinipoint.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 bg-brand-footer-bottom py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <p className="text-sm opacity-70 text-center">
            &copy; {new Date().getFullYear()} All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
