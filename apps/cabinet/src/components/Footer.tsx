const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const supportLinks = [
  { label: 'FAQ', href: '#' },
  { label: 'Shipping', href: '#' },
  { label: 'Returns', href: '#' },
  { label: 'Contact Us', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-[1300px] gap-8 px-5 py-12 sm:grid-cols-3 lg:px-10">
        <div>
          <h3 className="mb-3 text-lg font-bold uppercase tracking-wider">Cabinet</h3>
          <p className="text-sm text-white/60">
            Premium furniture built to last. Solid frames, honest materials, and a price that makes
            sense.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-white/60 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide">Support</h4>
          <ul className="space-y-2">
            {supportLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-white/60 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1300px] flex-wrap items-center justify-between gap-4 px-5 py-4 text-xs text-white/40 lg:px-10">
          <p>&copy; {new Date().getFullYear()} Cabinet. All rights reserved.</p>
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
