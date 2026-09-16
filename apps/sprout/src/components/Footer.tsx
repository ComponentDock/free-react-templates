import { siteName, navLinks, footer, socialLinks } from '../data'

export function Footer() {
  return (
    <footer id="contact" className="bg-footer-bg py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:grid-cols-3">
        {/* About */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-white">{siteName}</h3>
          <p className="text-sm leading-relaxed text-gray-400">{footer.aboutText}</p>
        </div>

        {/* Connect */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-white">Connect</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Hours */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-white">Service Hours</h3>
          <ul className="space-y-2">
            {footer.serviceHours.map((hour) => (
              <li key={hour} className="text-sm text-gray-400">
                {hour}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-12 max-w-6xl border-t border-gray-700 px-4 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={footer.componentDockHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition-colors hover:text-white"
          >
            {footer.componentDockLabel}
          </a>
        </div>
      </div>
    </footer>
  )
}
