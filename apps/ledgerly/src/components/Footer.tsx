const socials = [
  {
    label: 'Facebook',
    href: '#',
    svg: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
  },
  {
    label: 'Twitter',
    href: '#',
    svg: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
  },
  {
    label: 'Dribbble',
    href: '#',
    svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.7-5.61.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z',
  },
  {
    label: 'Instagram',
    href: '#',
    svg: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m7.2 3a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1m-3.6 1a4.4 4.4 0 00-4.4 4.4A4.4 4.4 0 0012 14.8 4.4 4.4 0 0016.4 10.4 4.4 4.4 0 0012 6m0 1.5a2.9 2.9 0 012.9 2.9A2.9 2.9 0 0112 13.3 2.9 2.9 0 019.1 10.4 2.9 2.9 0 0112 7.5',
  },
]

const recentPosts = [
  { title: 'Aliquam ac eleifend metus', date: 'March 10, 2024' },
  { title: 'Donec in libero sit amet mi', date: 'March 8, 2024' },
  { title: 'Aliquam ac eleifend metus', date: 'March 5, 2024' },
]

const quickLinks = [
  'Home',
  'FAQ',
  'About Us',
  'Terms & Conditions',
  'Services',
  'Careers',
  'Testimonials',
  'News',
  'Contact',
]

export function Footer() {
  return (
    <footer>
      <div
        className="relative bg-navy-900 bg-cover bg-center py-16"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/ledgerly-footer/1920/600)' }}
      >
        <div className="absolute inset-0 bg-navy-900/85" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* About Widget */}
            <div>
              <a href="/" className="text-2xl font-bold text-white">
                <span className="text-gold-500">Ledger</span>ly
              </a>
              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                Your trusted partner in the world of cryptocurrency. We provide tools, news, and
                insights to help you navigate the digital currency landscape with confidence.
              </p>
              <div className="mt-6 flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="text-gray-400 transition-colors hover:text-gold-500"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d={s.svg} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Recent Posts
              </h3>
              <ul className="space-y-3">
                {recentPosts.map((post, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-gray-300 transition-colors hover:text-gold-500"
                    >
                      {post.title}
                    </a>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-300 transition-colors hover:text-gold-500"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-navy-950 py-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Ledgerly. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-gold-500 transition-colors hover:text-gold-400"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
